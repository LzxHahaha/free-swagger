import fse from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import ora from 'ora'
import { OpenAPIV2 } from 'openapi-types'
import { Config, isUrl, isPath, assertOpenApi2, MockConfig } from './utils'
import { mergeDefaultConfig, mergeDefaultMockConfig } from './default'
import { chooseApi } from './inquirer'
import { pick } from 'lodash'
import { ApiCollection, parsePaths } from './parse/path'
import { compileInterfaces, compileJsDocs } from 'free-swagger-client'
import { ParsedPaths } from './parse/path'
import { genPaths } from './gen/path'
import { fetchJSON } from './request'
import { mock } from './mock'
import { INTERFACE_PATH } from './gen/interface'
import { JSDOC_PATH } from './gen/jsDoc'

export const spinner = ora().render()

// parse swagger json
const parse = async (
  config: Config<OpenAPIV2.Document>
): Promise<{
  paths: ParsedPaths
}> => {
  fse.ensureDirSync(config.root!)
  const paths = parsePaths(config.source)
  return { paths }
}

// code generate
const gen = async (
  config: Required<Config<OpenAPIV2.Document>>,
  dirPath: string,
  paths: ParsedPaths
): Promise<void> => {
  // 生成 interface
  if (config.lang === 'ts') {
    const interfacePath = path.resolve(dirPath, INTERFACE_PATH)
    fse.ensureFileSync(interfacePath)
    await fse.writeFile(
      interfacePath,
      compileInterfaces(config.source, undefined, config.propComment)
    )
  }

  if (config.lang === 'js' && config.useJsDoc) {
    const jsDocPath = path.resolve(dirPath, JSDOC_PATH)
    fse.ensureFileSync(jsDocPath)
    await fse.writeFile(jsDocPath, compileJsDocs(config.source))
  }

  // 生成 api
  const genApi = async ([name, apiCollection]: [
    string,
    ApiCollection
  ]): Promise<void> => {
    const apiCollectionPath = path.resolve(
      dirPath,
      `${config.fileName(name)}.${config.lang}`
    )
    fse.ensureFileSync(apiCollectionPath)
    const code = genPaths(apiCollection, config)
    await fse.writeFile(apiCollectionPath, code)
  }

  Object.entries(paths).forEach(genApi)
}

const normalizeSource = async (
  source: string | OpenAPIV2.Document,
  cookie?: string
): Promise<OpenAPIV2.Document> => {
  if (isUrl(source)) {
    return await fetchJSON(source, cookie)
  }
  if (isPath(source)) {
    const sourcePath = path.resolve(process.cwd(), source)
    return JSON.parse(await fse.readFile(sourcePath, 'utf-8'))
  }
  return source
}

// compile = parse + gen
const compile = async (config: Required<Config>): Promise<any> => {
  try {
    config.source = await normalizeSource(config.source, config.cookie)
    if (!assertOpenApi2(config)) {
      throw new Error('文档解析错误，请使用 openApi2 规范的文档')
    }
    spinner.start('正在生成 api 文件...')
    fse.ensureDirSync(config.root)

    // parse
    const { paths } = await parse(config)
    spinner.succeed('api 文件解析完成')
    const choosePaths =
      config.chooseAll || global.__DEV__
        ? paths
        : pick(paths, ...(await chooseApi(paths)))
    // gen
    await gen(config, config.root, choosePaths)
    spinner.succeed(
      `api 文件生成成功，文件根目录地址: ${chalk.green(config.root)}`
    )
    return config.source
  } catch (e) {
    spinner.fail(`${chalk.red('api 文件生成失败')}`)
    throw new Error(e)
  }
}

// freeSwagger = merge + compile
const freeSwagger = async (
  config: Config | string
): Promise<OpenAPIV2.Document> => {
  const mergedConfig = await mergeDefaultConfig(config)
  return await compile(mergedConfig)
}

freeSwagger.compile = compile
freeSwagger.mock = async (config: MockConfig | string): Promise<void> => {
  const mergedConfig = mergeDefaultMockConfig(config)
  const source = await normalizeSource(mergedConfig.source, mergedConfig.cookie)
  await mock({ ...mergedConfig, source })
  spinner.succeed(
    `mock 文件生成成功，文件根目录地址: ${chalk.green(
      path.resolve(mergedConfig.mockRoot)
    )}`
  )
}
module.exports = freeSwagger
