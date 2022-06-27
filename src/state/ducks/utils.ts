import { put } from "redux-saga/effects"
import { IErrorResponse, ResponseProblem } from "@github/services/networking"
import { R } from "@github/res"
import { showErrorAction } from "./error"

function* handleActionError(error: IErrorResponse) {
  if (error.problem === ResponseProblem.Cancelled) {
    return
  }

  // Code Exception
  if (!error.problem || !error.message) {
    yield put(showErrorAction({ message: R.string.errors.exceptionError }))
    return
  }

  if (error.statusCode !== 403 && error.statusCode !== 406) {
    if (error.serverMessage && error.serverMessage.length > 3) {
      yield put(showErrorAction({ message: error.serverMessage }))
    } else if (error.message && error.message.length > 3) {
      yield put(showErrorAction({ message: error.message }))
    }
  } else {
    // yield call(handleInvalidLicenseError, error)
  }
}

// Wrapper for sagas to provide global error handling. Also, it's useful
// if we need to check for authentication status, retries and logging errors
export function errify<TAction>(
  handler: (action: TAction) => Generator<never, IErrorResponse | null>,
) {
  return function* (action: TAction): Generator {
    try {
      const error: IErrorResponse | null = yield handler(action)
      if (error) {
        yield handleActionError(error)
      }
    } catch (err) {
      yield handleActionError(err)
    }
  }
}
