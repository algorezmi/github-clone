import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects"
import { IItem, ISearchResult } from "@github/services/networking/endpoints/search/search.com"
import { ExtractActionType } from "@github/utils"
import { API, IResponse, ResponseProblem, searchUsersEndpoint } from "@github/services"
import { errify } from "@github/state/ducks/utils"
import { IUserState } from "./search.types"

const initialState: IUserState = {
  users: [],
  canLoadMore: true,
  error: "",
  page: 1,
  isLoading: true,
  itemsCountRecieved: 0,
}

const searchUsersAction = createAction(
  "search/doSearch",
  (
    search: string,
    page: number,
    searchType: string,
    onSuccess: (results: ISearchResult) => void,
    onError: () => void,
  ) => ({
    payload: { search, page, searchType, onSuccess, onError },
  }),
)

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getUsers: (state) => {
      return { ...state, isLoading: true }
    },
    updateItemsRecievedCount: (state, action: PayloadAction<number>) => {
      return { ...state, itemsCountRecieved: state.itemsCountRecieved + action.payload }
    },
    updateCanLoadMore: (state, action: PayloadAction<number>) => {
      if (action.payload >= state.itemsCountRecieved) {
        return { ...state, canLoadMore: true, page: state.page + 1, isLoading: false }
      } else {
        return { ...state, canLoadMore: false }
      }
    },
    getUsersSuccess: (state, action: PayloadAction<IItem[]>) => {
      return { ...state, users: [...state.users, ...action.payload] }
    },
    getUsersFailiuer: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, canLoadMore: true }
    },
    resetUsersState: () => {
      return initialState
    },
  },
})

const doSearchRequest = errify(function* ({
  payload: { search, page, searchType, onSuccess, onError },
}: ExtractActionType<typeof searchUsersAction>) {
  yield put(getUsers())
  API.setup()
  const response = (yield call(
    API.request,
    searchUsersEndpoint(search, page, searchType),
    undefined,
  )) as IResponse<ISearchResult>

  if (response.ok) {
    if (response.data) {
      yield put(updateItemsRecievedCount(response.data.items.length))
      onSuccess && onSuccess(response.data)
      yield put(getUsersSuccess(response.data.items))
      yield put(updateCanLoadMore(response.data.total_count))
      return null
    } else {
      onError && onError()
      return {
        problem: ResponseProblem.Unknown,
      }
    }
  } else {
    onError && onError()
    return {
      ...response,
      problem: ResponseProblem.Unknown,
    }
  }
})

export function* searchSubscription() {
  yield takeLatest(searchUsersAction.type, doSearchRequest)
}

export const {
  getUsers,
  updateItemsRecievedCount,
  updateCanLoadMore,
  getUsersSuccess,
  getUsersFailiuer,
  resetUsersState,
} = searchSlice.actions
export const searchReducerName = searchSlice.name
export default searchSlice.reducer

export { searchUsersAction }
