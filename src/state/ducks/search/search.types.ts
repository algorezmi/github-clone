import { IItem } from "@github/services/networking/endpoints/search/search.com"

export interface IUserState {
  users: IItem[]
  isLoading: boolean
  error: string
}
