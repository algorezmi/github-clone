import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { put, takeLatest } from "redux-saga/effects"
import { IItem } from "@github/services/networking/endpoints/search/search.com"
import { ExtractActionType, showMessage } from "@github/utils"
import { IResponse, searchUsersEndpoint } from "@github/services"
import { SagaManager } from "@github/state"
import { IUserState } from "./search.types"

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: "",
}
const searchUsersAction = createAction("search/doSearch", (text: string) => ({
  payload: { text },
}))
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true
    },
    getUsersSuccess: (state, action: PayloadAction<IItem[]>) => {
      state.users = action.payload
      state.isLoading = false
    },
    getUsersFailiuer: (state, action: PayloadAction<string>) => {
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

// async function getUsersInfo(text: string): Promise<ISearchResult> {
//   try {
//     const response = await axios.request<ISearchResult>({
//       url: "https://api.github.com/search/users?q=" + text,
//       method: "get",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//     showMessage(JSON.stringify(response))
//     return response.data
//   } catch (error) {
//     showMessage(error + "")
//     return {} as ISearchResult
//   }
// }

function* postSearchRequest(response: IResponse<{}>) {
  showMessage("here1")
  if (response.ok) {
    // yield call(getUsers)
    showMessage("here")
    showMessage(JSON.stringify(response.data))
    yield put(getUsersSuccess([]))
  } else {
    showMessage("here fail")
    yield put(getUsersFailiuer(response.error + ""))
  }
  return response
}

// const dataMapper = ({text}: {text:string}) =>{  return {"q": text}}

function* prepareSearchRequest({ payload: { text } }: ExtractActionType<typeof searchUsersAction>) {
  return {
    pathParams: { q: text },
  }
}
// function* doSearch(){
//   const users = yield await call(()=>fetch('));
//   const resu = yield users.json()
// }
const doSearchRequest = SagaManager.apiGenerator({
  endpoint: searchUsersEndpoint,
  prepare: prepareSearchRequest,
  post: postSearchRequest,
})
// export const searchReducerName = searchSlice.name

// export { searchUsersAction}

export function* searchSubscription() {
  yield takeLatest(searchUsersAction.type, doSearchRequest)
}

export const { getUsers, getUsersSuccess, getUsersFailiuer } = searchSlice.actions
export const searchReducerName = searchSlice.name
export default searchSlice.reducer

export { searchUsersAction }
