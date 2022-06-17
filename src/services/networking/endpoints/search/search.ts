import {
  HttpMethod,
  IParamsPayloadEndpoint,
} from "@github/services/networking/endpoints/endpoint.types"
import { ISearchResult } from "./search.com"

export const searchUsersEndpoint = (
  text: string,
): IParamsPayloadEndpoint<ISearchResult, { text: string }, Required<ISearchResult>> => ({
  path: "search/users?q=" + text,
  method: HttpMethod.Get,
})
