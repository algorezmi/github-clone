import {
  errorReducer,
  errorReducerName,
  loadingReducer,
  loadingReducerName,
  searchReducer,
  searchReducerName,
} from "./ducks/"

const reducers = {
  [errorReducerName]: errorReducer,
  [loadingReducerName]: loadingReducer,
  [searchReducerName]: searchReducer,
} as const

export default reducers
