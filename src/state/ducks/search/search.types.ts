import { IItem } from "@github/services/networking/endpoints/search/search.com"

export type SearchTypes = "User" | "Organization" | ""
export interface IUserState {
  users: IItem[]
  canLoadMore: boolean
  isLoading: boolean
  error: string
  page: number
  itemsCountRecieved: number
  searchType: SearchTypes
  searchText: string
}
