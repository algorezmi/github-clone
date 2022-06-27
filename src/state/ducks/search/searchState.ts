import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects"
import { IItem, ISearchResult } from "@github/services/networking/endpoints/search/search.com"
import { ExtractActionType, showMessage } from "@github/utils"
import { API, IResponse, ResponseProblem, searchUsersEndpoint } from "@github/services"
import { errify } from "@github/state/ducks/utils"
import { IUserState } from "./search.types"

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: "",
}

const searchUsersAction = createAction(
  "search/doSearch",
  (search: string, onSuccess: (results: ISearchResult) => void, onError: () => void) => ({
    payload: { search, onSuccess, onError },
  }),
)

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getUsers: (state) => {
      return { ...state, isLoading: true }
    },
    getUsersSuccess: (state, action: PayloadAction<IItem[]>) => {
      return { ...state, users: action.payload, isLoading: false }
    },
    getUsersFailiuer: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, isLoading: false }
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

// function* ({
//   payload: { search, onSuccess, onError },
// }: ExtractActionType<typeof searchUsersAction>) {
//   showMessage("here1")
//   const response: IResponse<ISearchResult> = yield call(
//     API.request,
//     searchUsersEndpoint(search),
//     undefined,
//   )

//   if (response.ok) {
//     if (response.data) {
//       // yield call(getUsers)
//       showMessage("here")
//       showMessage(JSON.stringify(response))
//       onSuccess && onSuccess(response.data)
//       return null
//     } else {
//       onError && onError()
//       return {
//         problem: ResponseProblem.unknown,
//       }
//     }
//   } else {
//     showMessage("here fail")
//     onError && onError()
//     return response
//   }
// }

// const dataMapper = ({text}: {text:string}) =>{  return {"q": text}}

// function* prepareSearchRequest({
//   payload: { search, onSuccess, onError },
// }: ExtractActionType<typeof searchUsersAction>) {
//   return {
//     pathParams: { q: text },
//   }
// }
// function* doSearch(){
//   const users = yield await call(()=>fetch('));
//   const resu = yield users.json()
// }

// export const searchReducerName = searchSlice.name

// export { searchUsersAction}
const doSearchRequest = errify(function* ({
  payload: { search, onSuccess, onError },
}: ExtractActionType<typeof searchUsersAction>) {
  yield put(getUsers())
  showMessage("here1")
  API.setup()
  const response = (yield call(
    API.request,
    searchUsersEndpoint(search),
    undefined,
  )) as IResponse<ISearchResult>

  if (response.ok) {
    if (response.data) {
      // yield call(getUsers)
      showMessage("here")
      onSuccess && onSuccess(response.data)
      yield put(getUsersSuccess(response.data.items))
      return null
    } else {
      onError && onError()
      return {
        problem: ResponseProblem.Unknown,
      }
    }
  } else {
    showMessage("here fail")
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

export const { getUsers, getUsersSuccess, getUsersFailiuer } = searchSlice.actions
export const searchReducerName = searchSlice.name
export default searchSlice.reducer

export { searchUsersAction }
