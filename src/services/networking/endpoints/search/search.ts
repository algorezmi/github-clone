import {
  HttpMethod,
  IParamsPayloadEndpoint,
} from "@github/services/networking/endpoints/endpoint.types"
import { ISearchPayload } from "./search.com"

export const searchUsersEndpoint: IParamsPayloadEndpoint<{}, {}, ISearchPayload> = {
  path: "search/users",
  method: HttpMethod.Get,
} as const
