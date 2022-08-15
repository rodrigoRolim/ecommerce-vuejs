import qs from "qs";
import { PathLike } from "fs";
import envs from "./endpoint.config";

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  timeout: 30000,
  baseURL: envs.ApiUrlBase,
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}
