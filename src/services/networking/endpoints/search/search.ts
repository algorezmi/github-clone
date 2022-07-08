import { IEndpoint } from "@github/services/networking/endpoints/endpoint.types"
import { IResponse } from "@github/services"
import { ISearchResult } from "./search.com"

export const searchUsersEndpoint = (
  search: string,
  page: number,
  searchType: string,
): IEndpoint<undefined, IResponse<ISearchResult>> =>
  Object.freeze({
    path: `search/users?q=${search}+type:${searchType}+in:login&page=${page}&per_page=50`,
    method: "GET",
  })
