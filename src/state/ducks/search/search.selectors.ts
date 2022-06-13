import { IUserState } from "./search.types"

export const getisLoading = (state: IUserState) => state.isLoading ?? false
export const searchState = (state: IUserState) => state.users
