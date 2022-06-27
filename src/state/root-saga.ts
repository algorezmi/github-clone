import { all, call } from "redux-saga/effects"
import { searchSubscription } from "./ducks"

export default function* rootSaga() {
  yield all([call(searchSubscription)])
}
