import { createAction, createSlice } from "@reduxjs/toolkit"
import { put, takeLatest } from "redux-saga/effects"
import { ISearchResult } from "@github/services/networking/endpoints/search/search.com"
import { ExtractActionType, showMessage } from "@github/utils"

const searchUsersAction = createAction("search/doSearch", (text: string) => ({
  payload: { text },
}))
const searchSlice = createSlice({
  name: "search",
  initialState: {
    users: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    getUsers: (state) => {
      state.isLoading = true
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload
      state.isLoading = false
    },
    getUsersFailiuer: (state, action) => {
      state.users = []
      state.error = action.payload
      state.isLoading = false
    },
  },
})

// function* doSearchRequest(response: IResponse<ISearchResult>) {
//   if (!response.ok) {
//       const message = "not results"
//       yield put(showErrorAction({ message }))
//   }
//   return response
// }

async function getUsersInfo(text: string): Promise<ISearchResult> {
  try {
    const response = await fetch("https://api.github.com/search/user?q=" + text, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    return response.json()
  } catch (error) {
    return {} as ISearchResult
  }
}

export function* doSearch({ payload: { text } }: ExtractActionType<typeof searchUsersAction>) {
  showMessage("here")
  try {
    yield put(getUsers())
    yield getUsersInfo(text)
      .then((response) => {
        return put(getUsersSuccess({ users: response }))
      })
      .catch((error) => {
        return put(getUsersFailiuer({ error }))
      })
  } catch (error) {
    showMessage("here fail")
    yield put(getUsersFailiuer(false))
  }
}
// function* doSearch(){
//   const users = yield await call(()=>fetch('));
//   const resu = yield users.json()
// }
// const doSearch = SagaManager.apiGenerator({
//   endpoint: searchUsersEndpoint,
// })
// export const searchReducerName = searchSlice.name

// export { searchUsersAction}

export function* searchSubscription() {
  yield takeLatest(searchUsersAction.type, doSearch)
}

export const { getUsers, getUsersSuccess, getUsersFailiuer } = searchSlice.actions
export const searchReducerName = searchSlice.name
export default searchSlice.reducer

export { searchUsersAction }
