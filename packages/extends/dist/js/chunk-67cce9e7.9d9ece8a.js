(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67cce9e7"],{"2d3e":function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("99af"),r("a623"),r("c740"),r("4160"),r("caad"),r("a15b"),r("d81d"),r("b0c0"),r("7a82"),r("b64b"),r("ac1f"),r("2532"),r("1276"),r("159b");var _=r("9523"),n=r("6374");Object.defineProperty(a,"__esModule",{value:!0}),a.formatGenericInterface=a.flatInterfaceName=a.resetInterfaceMap=a.findInterface=a.shouldSkipGenerate=a.parseInterface=a.parseInterfaceName=a.buildInInterfaces=a.genericInterfaceMap=a.recursiveMap=a.map=void 0;var t=r("fff2"),s=r("792e"),c={Map:{name:"JavaMap",code:"\n   export type JavaMap<T, U> = Record<string, U>\n  "},List:{name:"JavaList",code:"\n   export type JavaList<T> = Array<T>\n  "}};a.buildInInterfaces=c;var o={};a.map=o;var i={};a.genericInterfaceMap=i;var u={};a.recursiveMap=u;var p=function(e){return i[e]||o[e]||u[e]};a.findInterface=p;var m=function(){a.map=o={},a.genericInterfaceMap=i={},a.recursiveMap=u={}};a.resetInterfaceMap=m;var f=function(e){var a,r=[],_="",s=function(e){return Object.keys(t.SPECIAL_CHARACTERS_MAP_OPEN).includes(e)},c=function(e){return Object.keys(t.SPECIAL_CHARACTERS_MAP_CLOSE).includes(e)},o=n(e.split(""));try{for(o.s();!(a=o.n()).done;){var i=a.value;if(s(i))r.push(_),_="",r.push(i);else if(","===i)_&&(r.push(_),_="");else if(c(i)){_&&(r.push(_),_="");var u=void 0,p=[];while(!s(u)&&r.length>0)u=r.pop(),"string"!==typeof u||s(u)?s(u)||p.unshift(u):p.unshift({name:u});if(r.length){var m=r.pop();"string"===typeof m&&r.push({name:m,generics:p})}if(1===r.length)return r[0]}else _+=i}}catch(f){o.e(f)}finally{o.f()}return{name:_}};a.parseInterfaceName=f;var d=function e(a){return a.generics?"".concat(a.name,"<").concat(a.generics.map((function(a){return e(a)})).join(","),">"):a.name},l=function(e){var a=[];return t.traverseTree(f(e),(function(e){a.push(e.name)})),a};a.flatInterfaceName=l;var P=function(e){var a=f(e);return t.traverseTree(a,(function(e){c[e.name]&&(e.name=c[e.name].name),t.TYPE_MAP[e.name]&&(e.name=t.TYPE_MAP[e.name])})),d(a)};a.formatGenericInterface=P;var y=function(e,a){var r={};return Object.keys(e).forEach((function(_){var n=e[_],s=t.schemaToTsType(n),c=s.imports,o=s.type;r[_]={type:o,imports:c,required:(null===a||void 0===a?void 0:a.includes(_))||!1,description:n.description||""}})),r},E=function(e){var a=Object.keys(e).findIndex((function(a){var r;return e[a].$ref||"array"===e[a].type&&(null===(r=e[a].items)||void 0===r?void 0:r.$ref)}));return Object.keys(e)[a]},b=function(e){var a,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_=f(e);return!!(null===(a=_.generics)||void 0===a?void 0:a.length)&&(!!r||l(e).every((function(e){return t.TYPE_MAP[e]||o[e]||u[e]})))};a.shouldSkipGenerate=b;var I=function(e,a){var r,n,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],p=t?u:o,m=f(a),d={name:(null===(r=m.generics)||void 0===r?void 0:r.length)?"".concat(m.name,"<T>"):m.name,props:{},hasGeneric:!!(null===(n=m.generics)||void 0===n?void 0:n.length),skipGenerate:Object.keys(c).includes(m.name)};if(d.skipGenerate)return d;var l=e[a],P=l.properties,b=l.required;if(!P)return d;if(d.hasGeneric){if(i[m.name])return void(d.skipGenerate=!0);var I=E(P);return d.props=I?Object.assign(_({},I,{type:"array"===P[I].type?"T[]":"T",imports:[],required:(null===b||void 0===b?void 0:b.includes(I))||!1,description:P[I].description||""}),y(s.omit(P,I),b)):y(P,b),u[m.name]&&delete u[m.name],o[m.name]&&delete o[m.name],void(i[m.name]=d)}d.props=y(P,b),p[m.name]=d};a.parseInterface=I},3:function(e,a){},"32fc":function(e,a,r){"use strict";r("99af"),r("a15b"),r("d81d"),r("45fc"),r("b0c0"),r("7a82"),r("4fad"),r("b64b");var _=r("278c"),n=r("7037");Object.defineProperty(a,"__esModule",{value:!0}),a.genIParams=a.isParsedSchemaObject=a.genPath=void 0;var t=r("792e"),s=function(e){return Object.keys(e).some((function(a){return"object"!==n(e[a])}))};a.isParsedSchemaObject=s;var c=function(e){return!e||t.isEmpty(e)?"":s(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e){var a=_(e,2),r=a[0],n=a[1];return'\n          "'.concat(r,'"').concat(n.required?"":"?",": ").concat(n.type)})).join(","),"\n      }")},o=function(e){var a=e.pathParamsInterface,r=e.queryParamsInterface,_=e.bodyParamsInterface;return{IQueryParams:c(r),IBodyParams:c(_),IPathParams:c(a)}};a.genIParams=o;var i=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],_=o(e),n=_.IPathParams,t=_.IBodyParams,s=_.IQueryParams;return a({name:e.name,method:e.method,url:e.url,responseType:e.responseInterface.isBinary?"blob":"json",deprecated:!r&&e.deprecated,summary:r?"":e.summary,IResponse:e.responseInterface.type,pathParams:Object.keys(e.pathParamsInterface),IQueryParams:s,IBodyParams:t,IPathParams:n})};a.genPath=i},"37b8":function(e,a,r){"use strict";r("4160"),r("d81d"),r("13d5"),r("7a82"),r("b64b"),r("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.compileInterfaces=a.compileInterface=void 0;var _=r("2d3e"),n=r("fff2"),t=r("f55f"),s=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||_.shouldSkipGenerate(a,r))return"";_.parseInterface(e.definitions,a);try{return n.formatCode("ts")(t.genInterface(_.findInterface(a)))}catch(s){return console.warn("interfaceName: ".concat(a," 生成失败，检查是否符合 swagger 规范")),console.warn(s),"\n    // interfaceName: ".concat(a," 生成失败，检查是否符合 swagger 规范\n    \n    ")}};a.compileInterface=s;var c=function(e,a){if(!e.definitions)return"";if(_.resetInterfaceMap(),a)return s(e,a,!0);var r="/* eslint-disable */\n    // @ts-nocheck\n    // generated by free-swagger-client\n    \n    ",c=Object.keys(_.buildInInterfaces).reduce((function(e,a){return e+_.buildInInterfaces[a].code}),"");Object.keys(e.definitions).forEach((function(a){_.parseInterface(e.definitions,a)}));var o=Object.keys(_.map).reduce((function(a,r){return a+s(e,r)}),""),i=Object.keys(_.recursiveMap).reduce((function(e,a){return e+n.formatCode("ts")(t.genInterface(_.recursiveMap[a]))}),""),u=Object.keys(_.genericInterfaceMap).reduce((function(e,a){return e+n.formatCode("ts")(t.genInterface(_.genericInterfaceMap[a]))}),"");return n.formatCode("ts")(r+c+u+o+i)};a.compileInterfaces=c},"3b29":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"state",(function(){return state})),__webpack_require__.d(__webpack_exports__,"handleCopyApi",(function(){return handleCopyApi})),__webpack_require__.d(__webpack_exports__,"handleCopyPath",(function(){return handleCopyPath})),__webpack_require__.d(__webpack_exports__,"handleCopyFake",(function(){return handleCopyFake})),__webpack_require__.d(__webpack_exports__,"handleCopyInterface",(function(){return handleCopyInterface})),__webpack_require__.d(__webpack_exports__,"handleCopyJsDoc",(function(){return handleCopyJsDoc})),__webpack_require__.d(__webpack_exports__,"handleCopySchema",(function(){return handleCopySchema}));var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a4d3"),core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("e01a"),core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("c740"),core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a434"),core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b64b"),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("0fb7"),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_11__),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("450d"),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_12__),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("f529"),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13__),vue__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("2b0e"),_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("4f0c"),lodash_es__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("e247"),free_swagger_client__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("95a9"),free_swagger_client__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__),json_schema_faker__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("e08d"),json_schema_faker__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(json_schema_faker__WEBPACK_IMPORTED_MODULE_18__),STORAGE_KEY="SWAGGER-EXTENDS",state=new vue__WEBPACK_IMPORTED_MODULE_14__["default"]({data:function(){return{url:"",dialog:!1,key:"",currentApi:{key:"",path:"",method:"",collection:{controller:{},operationId:""}},storage:{jsTemplate:free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["jsTemplate"],tsTemplate:free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["tsTemplate"],useJsDoc:!1,exportLanguage:"js",currentLanguage:"js"},isNewUi:!1,domLoaded:!1,swagger:null,parsedSwagger:null}},computed:{options:function(){if(!this.swagger)return[];var e=[],a=[],r=this.swagger.paths,_=this.swagger.tags;return Object.keys(r).forEach((function(a){Object.keys(r[a]).forEach((function(_){var n=r[a][_],t=n.tags,s=n.summary,c=n.description,o=n.operationId;e.push({path:a,method:_,key:"".concat(_," ").concat(a," ").concat(s),tag:t[t.length-1],collection:{controller:t[t.length-1],summary:s,description:c,operationId:o}})}))})),_.forEach((function(r){var _;do{if(_=e.findIndex((function(e){return e.tag===r.name})),_<0)return;a.push(e[_]),e.splice(_,1)}while(_>=0)})),a}},watch:{storage:{handler:function(e){localStorage.setItem(STORAGE_KEY,JSON.stringify(e))},deep:!0}},created:function(){var e=localStorage.getItem(STORAGE_KEY)?JSON.parse(localStorage.getItem(STORAGE_KEY)):{};this.storage=Object(lodash_es__WEBPACK_IMPORTED_MODULE_16__["a"])(e,this.storage,(function(e,a){if(""===e)return a}))}}),handleCopyApi=function handleCopyApi(){var path=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,method=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,source=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.swagger;try{if(!path)throw new Error;var storage=state.storage,codeFragment=free_swagger_client__WEBPACK_IMPORTED_MODULE_17___default()({source:source,lang:storage.currentLanguage,useJsDoc:storage.useJsDoc,templateFunction:eval("js"===storage.currentLanguage?storage.jsTemplate:storage.tsTemplate)},path,method);Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(codeFragment)}catch(e){element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版"),console.log(e)}},handleCopyPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method;try{var r=e.replace(/{(.*?)}/g,":$1");Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])('"'.concat(a.toUpperCase()," ").concat(r,'"'))}catch(_){element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版"),console.log(_)}},handleCopyFake=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.parsedSwagger,_="200";Object(json_schema_faker__WEBPACK_IMPORTED_MODULE_18__["option"])({useExamplesValue:!0,useDefaultValue:!0,alwaysFakeOptionals:!0,refDepthMax:2,maxItems:1,failOnInvalidTypes:!1});try{var n,t,s,c=null===(n=r.paths[e][a].responses)||void 0===n||null===(t=n[_])||void 0===t?void 0:t.schema;c?(s=Object(json_schema_faker__WEBPACK_IMPORTED_MODULE_18__["generate"])(c),s.code&&(s.code=_)):s={code:_,msg:"xxx",data:{}},Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(s)}catch(o){console.log(o),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版")}},handleCopyInterface=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.swagger,a=arguments.length>1?arguments[1]:void 0;try{var r=a&&Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["parseInterfaceName"])(a).generics.length;if(r)return void element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.warning("复制失败，interface 片段会丢失上下文，请选择复制 interface");var _=Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["compileInterfaces"])(e,a);Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(_)}catch(n){console.log(n),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api")}},handleCopyJsDoc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.swagger,a=arguments.length>1?arguments[1]:void 0;try{var r=Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["compileJsDocs"])(e,a);Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(r)}catch(_){console.log(_),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api")}},handleCopySchema=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.parsedSwagger;try{var _=r.paths[e][a].responses[SUCCESS_CODE].schema;Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(_)}catch(n){console.log(n),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版")}}},"59ae":function(e,a,r){"use strict";r("99af"),r("7a82");var _=r("448a");Object.defineProperty(a,"__esModule",{value:!0}),a.parsePath=void 0;var n=r("8e80"),t=r("d0f0"),s=r("792e"),c=function(e,a,r,c){var o=c.parameters,i=c.summary,u=void 0===i?"":i,p=c.responses,m=c.deprecated,f=void 0!==m&&m,d=t.getRequestType(o),l=d.bodyParamsInterface,P=d.queryParamsInterface,y=d.pathParamsInterface,E=d.imports,b=n.getResponseType(p),I=b.responseInterface;return{imports:s.uniq([].concat(_(E),_(I.imports))),summary:u,deprecated:f,url:a,name:e,method:r,bodyParamsInterface:l,queryParamsInterface:P,pathParamsInterface:y,responseInterface:I}};a.parsePath=c},"8e80":function(e,a,r){"use strict";r("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.getResponseType=void 0;var _=r("fff2"),n=200,t=function(e){if(!e[n])return{responseInterface:{type:"",imports:[],required:!1,description:"",isBinary:!1}};var a=e[n].schema;return{responseInterface:_.schemaToTsType(a)}};a.getResponseType=t},"95a9":function(e,a,r){"use strict";r("99af"),r("b8bf"),r("7a82");var _=this&&this.__createBinding||(Object.create?function(e,a,r,_){void 0===_&&(_=r),Object.defineProperty(e,_,{enumerable:!0,get:function(){return a[r]}})}:function(e,a,r,_){void 0===_&&(_=r),e[_]=a[r]}),n=this&&this.__exportStar||function(e,a){for(var r in e)"default"===r||a.hasOwnProperty(r)||_(a,e,r)};Object.defineProperty(a,"__esModule",{value:!0}),a.compileJsDocs=a.compileInterfaces=void 0;var t=r("32fc"),s=r("59ae"),c=r("fff2"),o=r("caf7"),i=r("37b8");Object.defineProperty(a,"compileInterfaces",{enumerable:!0,get:function(){return i.compileInterfaces}});var u=r("f295");Object.defineProperty(a,"compileJsDocs",{enumerable:!0,get:function(){return u.compileJsDocs}});var p=r("f45f"),m=function(e,a,r){var _=!a||!r;if(_)return"";var n=o.mergeDefaultConfig(e),i=e.source.paths[a][r].operationId;if(!i)return"";var u=s.parsePath(i,"".concat(e.source.basePath).concat(a),r,e.source.paths[a][r]),m=t.genPath(u,n.templateFunction,n.useJsDoc),f=n.useJsDoc&&"js"===n.lang?p.genJsDoc(u):"";return c.formatCode(n.lang)(f+m)};a["default"]=m,n(r("a4e5"),a),n(r("fff2"),a),n(r("32fc"),a),n(r("f45f"),a),n(r("59ae"),a),n(r("2d3e"),a)},a4e5:function(e,a,r){"use strict";r("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.tsTemplate=a.jsTemplate=void 0,a.jsTemplate='// js template\n({\n  url,\n  summary,\n  method,\n  name,\n  responseType,\n  deprecated,\n  pathParams,\n  IQueryParams,\n  IBodyParams,\n  IPathParams\n}) => {\n  // 处理路径参数\n  // `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, \'${$1}\'); \n\n const onlyIQueryParams = IQueryParams && !IBodyParams\n const onlyIBodyParams = IBodyParams && !IQueryParams\n const multipleParams = IQueryParams && IBodyParams\n \n  return `\n  ${deprecated ? `/**deprecated*/` : ""}\n  ${summary ? `// ${summary}` : ""}\n  export const ${name} = (${\n   onlyIQueryParams\n    ? "params,"\n    : onlyIBodyParams \n    ? "params,"\n    : multipleParams\n    ? "queryParams,"\n    // no params\n    : IPathParams\n    ? "params,"\n    : ""\n  }${\n  IPathParams ? `{${pathParams.join(",")}},` : multipleParams ? "pathParams," : ""\n}${\n  multipleParams\n    ? `bodyParams: ${IBodyParams}`\n    : ""\n}) => axios.request({\n     url: \\`${parsedUrl}\\`,\n     method: "${method}",\n     params:'.concat('${ multipleParams ? "queryParams" : IQueryParams ? "params," : "{},"}',"\n     data:",'${ multipleParams ? "bodyParams" : IBodyParams ? "params," : "{},"}','\n     ${responseType === "json" ? "" : `responseType: ${responseType}`}\n })`;\n};\n'),a.tsTemplate='// ts template\n({\n  url,\n  summary,\n  method,\n  name,\n  responseType,\n  deprecated,\n  pathParams,\n  IResponse,\n  IQueryParams,\n  IBodyParams,\n  IPathParams\n}) => {\n  // 处理路径参数\n  // `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, \'${$1}\'); \n \n const onlyIQueryParams = IQueryParams && !IBodyParams\n const onlyIBodyParams = IBodyParams && !IQueryParams\n const multipleParams = IQueryParams && IBodyParams\n \n  return `\n  ${deprecated ? `/**deprecated*/` : ""}\n  ${summary ? `// ${summary}` : ""}  \n  export const ${name} = (${\n  onlyIQueryParams\n    ? `params: ${IQueryParams},`\n    : onlyIBodyParams \n    ? `params: ${IBodyParams},`\n    : multipleParams\n    ? `params: ${IQueryParams},`\n    // no params\n    :  IPathParams\n    ? "params:{[key:string]: never},"\n    : ""\n}${\n  pathParams.length ? `{${pathParams.join(",")}}: ${IPathParams},` : multipleParams ? "pathParams:{[key:string]: never}," : ""\n}${\n  multipleParams\n    ? `bodyParams: ${IBodyParams}`\n    : ""\n}) => axios.request<${IResponse || "any"},AxiosResponse<${IResponse ||\n"any"}>>({\n     url: \\`${parsedUrl}\\`,\n     method: "${method}",\n     params:'.concat('${ multipleParams ? "queryParams" : IQueryParams ? "params," : "{},"}',"\n     data:",'${ multipleParams ? "bodyParams" : IBodyParams ? "params," : "{},"}','\n     ${responseType === "json" ? "" : `responseType: ${responseType}`}\n })`;\n};\n')},caf7:function(module,exports,__webpack_require__){"use strict";__webpack_require__("7a82"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeDefaultConfig=void 0;var template_1=__webpack_require__("a4e5");exports.mergeDefaultConfig=function(config){return Object.assign({useJsDoc:!1,lang:"js",templateFunction:eval(template_1.jsTemplate)},config)}},d0f0:function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("4160"),r("45fc"),r("b0c0"),r("7a82"),r("159b");var _=r("448a");Object.defineProperty(a,"__esModule",{value:!0}),a.getRequestType=void 0;var n=r("fff2"),t=function(e,a){var r=[],t="",s=!1;if(e.schema||e.items){var c=n.schemaToTsType(e.schema||e.items);t=c.type,s=!!c.isBinary,r.push.apply(r,_(c.imports)),a.push.apply(a,_(c.imports))}else t=n.TYPE_MAP[e.type];return{type:t,imports:r,isBinary:s,description:e.description||"",required:e.required||!1}},s=function(e){if(!e||e.some(n.isRef))return{imports:[],pathParamsInterface:{},queryParamsInterface:{},bodyParamsInterface:{}};var a={},r={},_={},s=[];return e.forEach((function(e){switch(e["in"]){case"path":a[e.name]=t(e,s);break;case"query":r[e.name]=t(e,s);break;case"formData":_={type:"FormData",imports:[],isBinary:!0,description:"",required:!0};break;case"body":_=t(e,s);break;default:return}})),{imports:s,pathParamsInterface:a,bodyParamsInterface:_,queryParamsInterface:r}};a.getRequestType=s},f295:function(e,a,r){"use strict";r("4160"),r("d81d"),r("13d5"),r("7a82"),r("b64b"),r("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.compileJsDoc=a.compileJsDocs=void 0;var _=r("2d3e"),n=r("95a9"),t=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||_.shouldSkipGenerate(a,r))return"";_.parseInterface(e.definitions,a);try{return n.genJsDocTypeDef(_.findInterface(a))}catch(t){return console.warn("jsDoc: ".concat(a," 生成失败，检查是否符合 swagger 规范")),console.warn(t),"\n    // jsDoc: ".concat(a," 生成失败，检查是否符合 swagger 规范\n    ")}};a.compileJsDoc=t;var s=function(e,a){if(!e.definitions)return"";if(_.resetInterfaceMap(),a)return t(e,a,!0);var r="// generated by free-swagger-client\n    ";Object.keys(e.definitions).forEach((function(a){_.parseInterface(e.definitions,a)}));var s=Object.keys(_.map).reduce((function(a,r){return a+t(e,r)}),""),c=Object.keys(_.recursiveMap).reduce((function(e,a){return e+n.genJsDocTypeDef(_.recursiveMap[a])}),""),o=Object.keys(_.genericInterfaceMap).reduce((function(e,a){return e+n.genJsDocTypeDef(_.genericInterfaceMap[a])}),"");return r+o+s+c};a.compileJsDocs=s},f45f:function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("99af"),r("a15b"),r("d81d"),r("b0c0"),r("7a82"),r("4fad");var _=r("278c");Object.defineProperty(a,"__esModule",{value:!0}),a.genJsDoc=a.genJsDocTypeDef=void 0;var n=r("95a9"),t=r("792e"),s=function(e){var a=e.name,r=e.props,n=e.skipGenerate;return n?"":"\n/**\n * @typedef {\n *   {\n".concat(Object.entries(r).map((function(e){var a=_(e,2),r=a[0],n=a[1];return" *     ".concat(r,": ").concat(n.type,"\n")})).join("")," *   }\n * } ").concat(a,"\n**/\n")};a.genJsDocTypeDef=s;var c=function(e){return!e||t.isEmpty(e)?"":n.isParsedSchemaObject(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e,a){var r=_(e,2),n=r[0],t=r[1];return"".concat(0!==a?"    ":"",'"').concat(n,'": ').concat(t.type)})).join("\n"),"\n}")},o=function(e){var a=e.pathParamsInterface,r=e.queryParamsInterface,_=e.bodyParamsInterface;return{IQueryParams:c(r),IBodyParams:c(_),IPathParams:c(a)}},i=function(e){var a=o(e),r=a.IBodyParams,n=a.IQueryParams,s=!t.isEmpty(n)&&t.isEmpty(r),c=!t.isEmpty(r)&&t.isEmpty(n),i=!t.isEmpty(r)&&!t.isEmpty(n),u=!t.isEmpty(e.pathParamsInterface),p=e.queryParamsInterface.description?"-".concat(e.queryParamsInterface.description):"",m=e.bodyParamsInterface.description?"-".concat(e.bodyParamsInterface.description):"",f=u?" * @param {Object} pathParams\n".concat(Object.entries(e.pathParamsInterface).map((function(e,a){var r=_(e,2),n=r[0],t=r[1];return"".concat(0!==a?"    ":""," * @param {").concat(t.type,"} pathParams.").concat(n," ").concat(t.description?"-".concat(t.description):"")})).join("\n"),"\n  "):"",d=s?" \n * @param {".concat(n,"} params ").concat(p,"\n").concat(f):"",l=c?" \n * @param {".concat(r,"} params ").concat(m,"\n").concat(f):"",P=i?" \n * @param {".concat(n,"} queryParams ").concat(p,"\n").concat(f,"\n * @param {").concat(r,"} bodyParams ").concat(m):"";return"\n/** ".concat(e.deprecated?"\n * @deprecated":"","\n * @description ").concat(e.summary," ").concat(i?P:c?l:s?d:u?"\n * @param {Object} params -never\n".concat(f):""," **/")};a.genJsDoc=i},f55f:function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("99af"),r("d81d"),r("b0c0"),r("7a82"),r("4fad");var _=r("278c");Object.defineProperty(a,"__esModule",{value:!0}),a.genInterface=void 0;var n=function(e){var a=e.name,r=e.props,n=e.skipGenerate;return n?"":" \n    export interface ".concat(a," {\n        ").concat(Object.entries(r).map((function(e){var a=_(e,2),r=a[0],n=a[1];return"\n            ".concat(r," ").concat(n.required?"":"?",": ").concat(n.type,"  ").concat(n.description&&"// ".concat(n.description),"\n            ")})),"\n      }\n      ")};a.genInterface=n},fff2:function(e,a,r){"use strict";r("4de4"),r("4160"),r("caad"),r("277d"),r("a15b"),r("baa5"),r("d81d"),r("fb6a"),r("b0c0"),r("7a82"),r("b64b"),r("07ac"),r("2532"),r("159b");var _=r("448a"),n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.SPECIAL_CHARACTERS_MAP_CLOSE=a.SPECIAL_CHARACTERS_MAP_OPEN=a.TYPE_MAP=a.traverseTree=a.schemaToTsType=a.isRef=a.getRef=a.formatGenericInterface=a.formatCode=void 0;var t=n(r("24bc")),s=n(r("5b18")),c=n(r("cc89")),o=r("2d3e");Object.defineProperty(a,"formatGenericInterface",{enumerable:!0,get:function(){return o.formatGenericInterface}});var i={"«":"<","[":"<","{":"<","<":"<"};a.SPECIAL_CHARACTERS_MAP_OPEN=i;var u={"»":">","]":">","}":">",">":">"};a.SPECIAL_CHARACTERS_MAP_CLOSE=u;var p={boolean:"boolean",bool:"boolean",Boolean:"boolean",long:"number",Int64:"number",integer:"number",number:"number",string:"string",file:"Blob",formData:"FormData",Void:"void",object:"object",array:"Array<any>"};a.TYPE_MAP=p;var m=function e(a,r){var _=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generics";r(a),a[_]&&a[_].forEach((function(a){e(a,r,_)}))};a.traverseTree=m;var f=function(e){var a=e.slice(e.lastIndexOf("/")+1);return o.formatGenericInterface(a)};a.getRef=f;var d=function(e){return e&&!!e.$ref};a.isRef=d;var l=function(e){if(!e)return{type:"any",imports:[],isBinary:!1,required:!1,description:""};var a=[],r=function e(r){if(r.$ref){var n=/^\w*$/,t=f(r.$ref);return a.push.apply(a,_(o.flatInterfaceName(t).filter((function(e){return!Object.values(p).includes(e)})).filter((function(e){return n.test(e)})).map((function(e){return o.buildInInterfaces[e]?o.buildInInterfaces[e].name:e})))),t}if(!r.type)return"any";if("array"===r.type&&r.items)return r.items["enum"]?"(".concat(e(r.items),")[]"):"".concat(e(r.items),"[]");if("object"===r.type){var s="";return r.properties?(Object.keys(r.properties).forEach((function(a){s+=r.properties?e(r.properties[a]):""})),s):"object"}return r["enum"]?r["enum"].map((function(e){return'"'.concat(e,'"')})).join(" | "):Array.isArray(r.type)?JSON.stringify(r.type):p[r.type]};return{type:r(e),imports:a,isBinary:"file"===e.type,required:!1,description:""}};a.schemaToTsType=l;var P=function(e){return function(a){return t["default"].format(a,{plugins:[c["default"],s["default"]],printWidth:120,tabWidth:2,parser:"ts"===e?"typescript":"babel",trailingComma:"none"})}};a.formatCode=P}}]);