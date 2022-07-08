import { ApisauceInstance, create, Monitor } from "apisauce"
import axiosRetry from "axios-retry"
import { R } from "@github/res"
import { ENV } from "@github/config"
import { IApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import { getGeneralApiProblem } from "./api-problem"
import { IResponse, ResponseProblem, IApiResponse, IPayload } from "./api-types"
import { IEndpoint, IMapper } from "./endpoints"
import { parse } from "./api-utils"

type TokenType = string | null

export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  private apisauce!: ApisauceInstance

  /**
   * Configurable options.
   */
  private static config: IApiConfig

  /**
   * Current user session token.
   */
  private static token: TokenType = null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static DEFAULT_MAPPER: IMapper<any> = (data: IPayload) => data

  public constructor(config: IApiConfig = DEFAULT_API_CONFIG) {
    Api.config = config
    this.setup()
  }

  /**
   * Call the endpoint and returns the response data if call is made successfully or error object otherwise.
   *
   * @example
   * let response: IResponse<IRegisterResponse> = yield call(api.request, RegisterEndpoint, {
   *     firstName: "Tester",
   *     lastName: "Tester",
   *     email: "test@gmail.com",
   *     password: "123456",
   *     purpose: "Travel",
   *  })
   *
   *   if (response.ok) {
   *     let data = response.data
   *     // data of type `IRegisterResponse` contains the data exist in the payload api response.
   *   } else {
   *     // `response` represents error object that contains problem code, error message and temporary flag.
   *   }
   *
   * @param endpoint endpoint to request
   * @param data parameters for `GET` requests and data to upload for `POST` requests
   * @param mapper (optional) function to map the api payload data to another object.
   *               Useful if we want to change object keys or make any transforms on the values.
   * @return response of type `IResponse<TResponse>` that may be actual
   */
  public request = async <TData, TResponse>(
    endpoint: IEndpoint<TData, TResponse>,
    data: TData,
    mapper = endpoint.mapper,
  ): Promise<IResponse<TResponse>> => {
    const { path, pathParams } = endpoint
    const fullPath = pathParams ? parse(path, ...pathParams) : path
    switch (endpoint.method) {
      case "GET":
        return await this.get<TData, TResponse>(fullPath, data, mapper)
      case "POST":
        return await this.post<TData, TResponse>(fullPath, data, mapper)
      case "PUT":
        return await this.put<TData, TResponse>(fullPath, data, mapper)
      case "DELETE":
        return await this.delete<TData, TResponse>(fullPath, data, mapper)
    }
  }

  private get = async <TParams, TResponse>(
    endpoint: string,
    params?: TParams,
    mapper?: IMapper<TResponse>,
  ): Promise<IResponse<TResponse>> => {
    const reqMapper = mapper ? mapper : Api.DEFAULT_MAPPER
    const response: IApiResponse = await this.apisauce.get(endpoint, params, {
      headers: { ...this.tokenHeader },
    })
    return this.handleApiResponse(response, reqMapper)
  }

  private post = async <TData, TResponse>(
    endpoint: string,
    bodyData: TData,
    mapper?: IMapper<TResponse>,
  ): Promise<IResponse<TResponse>> => {
    const reqMapper = mapper ? mapper : Api.DEFAULT_MAPPER
    const response: IApiResponse = await this.apisauce.post(endpoint, bodyData, {
      headers: { ...this.tokenHeader },
    })
    return this.handleApiResponse(response, reqMapper)
  }

  private put = async <TData, TResponse>(
    endpoint: string,
    bodyData: TData,
    mapper?: IMapper<TResponse>,
  ): Promise<IResponse<TResponse>> => {
    const reqMapper = mapper ? mapper : Api.DEFAULT_MAPPER
    const response: IApiResponse = await this.apisauce.put(endpoint, bodyData, {
      headers: { ...this.tokenHeader },
    })
    return this.handleApiResponse(response, reqMapper)
  }

  private delete = async <TData, TResponse>(
    endpoint: string,
    bodyData: TData,
    mapper?: IMapper<TResponse>,
  ): Promise<IResponse<TResponse>> => {
    const reqMapper = mapper ? mapper : Api.DEFAULT_MAPPER
    const response: IApiResponse = await this.apisauce.delete(endpoint, bodyData, {
      headers: { ...this.tokenHeader },
    })
    return this.handleApiResponse(response, reqMapper)
  }
  public addMonitor(monitor: Monitor) {
    this.apisauce?.addMonitor(monitor)
  }

  public getURL(endpoint: string): string {
    return Api.config.url + "/" + endpoint
  }

  public setURL(baseURL: string): void {
    Api.config.url = baseURL
  }

  public getToken(): TokenType {
    return Api.token
  }

  public setToken(token: TokenType): void {
    Api.token = token
  }

  public removeToken(): void {
    Api.token = null
  }

  public setup(baseURL: string = ENV.baseURL): void {
    Api.config.url = baseURL
    this.apisauce = create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-VERSION": 1,
      },
    })

    // Exponential Back-off Retry Mechanism
    // https://developers.google.com/analytics/devguides/reporting/core/v3/errors#backoff
    axiosRetry(this.apisauce.axiosInstance, {
      retries: 2,
      retryDelay: (retryNumber) => {
        const delay = retryNumber * Api.config.minimumTimeout
        return delay
      },
    })
  }

  private get tokenHeader() {
    return Api.token ? { Authorization: `Bearer ${Api.token}` } : {}
  }

  private handleApiResponse<TResponse>(
    response: IApiResponse,
    mapper: IMapper<TResponse>,
  ): IResponse<TResponse> {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      return {
        ok: false,
        ...problem,
        errors: response.data?.errors,
        //TO-DO put a default value to serverMessage instead of ""
        serverMessage:
          response.data?.message ||
          (typeof response.data?.messages === "string"
            ? response.data.messages
            : response.data?.messages && Object.keys(response.data?.messages).length > 0
            ? response.data?.messages[Object.keys(response.data.messages)[0]][0]
            : ""),
        statusCode: response.status,
        error: response.originalError.message,
        errorHeading: response.status === 403 ? response.data?.heading : undefined,
        errorMessage: response.status === 403 ? response.data?.message : undefined,
      }
    }
    const data = mapper(response.data)
    const statusCode = response.status
    return data
      ? { ok: true, data, statusCode }
      : {
          ok: false,
          problem: ResponseProblem.badData,
          message: R.string.errors.badDataError,
          temporary: true,
        }
  }
}

export default new Api()
