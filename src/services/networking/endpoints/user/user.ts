import { HttpMethod, IDataEndpoint } from "@github/services/networking/endpoints/endpoint.types"

export interface IUser {
  id: number
  login: string
  avatarUrl: string
}

export const userEndPoint = (
  type: string,
  q: string,
  page: number,
): IDataEndpoint<undefined, undefined> => ({
  path: `search/users?&page=${page}&q=${q}+type:${type}`,
  method: HttpMethod.Get,
})
