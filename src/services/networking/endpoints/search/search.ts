import {
  HttpMethod,
  IEmptyDataEndpoint,
} from "@github/services/networking/endpoints/endpoint.types"
import { ISearchResult } from "./search.com"

export const searchUsersEndpoint: IEmptyDataEndpoint<ISearchResult> = {
  path: "search/user?q=ss",
  method: HttpMethod.Get,
} as const
