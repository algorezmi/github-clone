import { IItem } from "@github/services/networking/endpoints/search/search.com"

export interface IUserState {
  users: IItem[]
  canLoadMore: boolean
  isLoading: boolean
  error: string
  page: number
}
