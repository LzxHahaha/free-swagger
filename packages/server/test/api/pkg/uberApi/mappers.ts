// generated by free-swagger
// @ts-nocheck
/* eslint-disable */
import axios, { AxiosResponse } from "axios";

export const UpdateMapper = (
  params: { [key: string]: never },
  {
    id
  }: {
    id: string;
  }
) =>
  axios.request<string, AxiosResponse<string>>({
    url: `/crawler/v1/mapper/${id}`,
    method: "put",
    params: {},
    data: {}
  });
