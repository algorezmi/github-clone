import { ApiResponse } from "apisauce"
import { R } from "@github/res"
import { IGeneralProblem, ResponseProblem } from "./api-types"

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem<T, U>(response: ApiResponse<T, U>): IGeneralProblem {
  switch (response.problem) {
    case "CONNECTION_ERROR":
    case "NETWORK_ERROR":
      return {
        problem: ResponseProblem.cannotConnect,
        message: R.string.errors.networkError,
        temporary: true,
      }
    case "TIMEOUT_ERROR":
      return {
        problem: ResponseProblem.timeout,
        message: R.string.errors.requestTimeout,
        temporary: true,
      }
    case "SERVER_ERROR":
      return {
        problem: ResponseProblem.server,
        message: R.string.errors.serverError,
      }
    case "UNKNOWN_ERROR":
      return {
        problem: ResponseProblem.unknown,
        message: R.string.errors.generalError,
        temporary: true,
      }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return {
            problem: ResponseProblem.unauthorized,
            message: R.string.errors.unauthorizedError,
          }
        case 403:
          return { problem: ResponseProblem.forbidden, message: R.string.errors.forbiddenError }
        case 404:
          return { problem: ResponseProblem.notFound, message: R.string.errors.resourceNotFound }
        default:
          return { problem: ResponseProblem.rejected, message: R.string.errors.rejectError }
      }
    case "CANCEL_ERROR":
    case null:
      return { problem: ResponseProblem.cancelled }
  }
}
