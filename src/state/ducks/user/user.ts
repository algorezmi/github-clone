import { createAction } from "@reduxjs/toolkit"
import { call, takeEvery } from "redux-saga/effects"
import { API, IResponse, IUser, userEndPoint } from "@github/services"
import { ExtractActionType } from "@github/utils"

export const queryUsersAction = createAction(
  "counter/add",
  (type: string, query: string, page: number, onSuccess?: (products: IUser[]) => void) => ({
    payload: { onSuccess, type, query, page },
  }),
)

function* queryUsersTask({
  payload: { onSuccess, type, query, page },
}: ExtractActionType<typeof queryUsersAction>) {
  const usersResponse: IResponse<IUser[]> = yield call(() => {
    return API.request(userEndPoint(type, query, page), {})
  })

  if (usersResponse.ok) {
    onSuccess(usersResponse.data.items)
  }
}

export function* userSubscription() {
  yield takeEvery(queryUsersAction.type, queryUsersTask)
}
