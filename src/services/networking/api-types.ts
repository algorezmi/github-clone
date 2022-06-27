import { ApiResponse } from "apisauce"
import { IObject } from "@github/utils"

export type IPayload = IObject

export type IApiOkResponse = IObject

export interface IApiErrorResponse {
  message: string
  messages: [string]
  errors: [string]
  heading: string
}

export type IApiResponse = ApiResponse<IApiOkResponse, IApiErrorResponse>

export enum ResponseProblem {
  Timeout = "timeout", // Times up.
  CannotConnect = "cannot-connect", // Cannot connect to the server for some reason.
  Server = "server", // The server experienced a problem. Any 5xx error.
  Unauthorized = "unauthorized", // We're not allowed because we haven't identified ourself. This is 401.
  Forbidden = "forbidden", // We don't have access to perform that request. This is 403.
  NotFound = "not-found", // Unable to find that resource.  This is a 404.
  Rejected = "rejected", // All other 4xx series errors.
  Unknown = "unknown", // Something truly unexpected happened. Most likely can try again. This is a catch all.
  BadData = "bad-data", // The data we received is not in the expected format.
  Cancelled = "cancelled", // Request is cancelled
}

interface IApiProblem {
  problem: Exclude<ResponseProblem, ResponseProblem.Cancelled>
  message: string
  temporary?: boolean
}

export type IGeneralProblem = IApiProblem | { problem: ResponseProblem.Cancelled }

export interface IOkResponse<T> {
  ok: true
  data?: T
  statusCode?: number
}

export type IErrorResponse = IGeneralProblem & {
  ok: false
  errors?: [string]
  error?: string
  serverMessage?: string
  statusCode?: number
  errorHeading?: string
  errorMessage?: string
}

export type IResponse<T> = IOkResponse<T> | IErrorResponse
