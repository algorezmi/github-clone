import {
  errorReducer,
  errorReducerName,
  loadingReducer,
  loadingReducerName,
  searchReducer,
  searchReducerName,
  rescentSearchReducerName,
  rescentSearchReducer,
} from "./ducks/"

const reducers = {
  [errorReducerName]: errorReducer,
  [loadingReducerName]: loadingReducer,
  [searchReducerName]: searchReducer,
  [rescentSearchReducerName]: rescentSearchReducer,
} as const

export default reducers
