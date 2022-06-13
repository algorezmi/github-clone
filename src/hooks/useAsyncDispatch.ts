import { Dispatch, useCallback } from "react"
import { useDispatch } from "react-redux"
import { withCallback } from "@github/state"
import { AsyncDispatch } from "./hooks.types"

function useAsyncDispatchFunc<T extends unknown>(dispatch: Dispatch<T>): AsyncDispatch {
  const asyncDispatch = useCallback(
    async (action, throwError: boolean = false) => {
      return new Promise<void>((resolve, reject) => {
        dispatch(withCallback(action, resolve, throwError ? reject : undefined) as T)
      })
    },
    [dispatch],
  )

  return asyncDispatch
}

function useAsyncDispatch<T extends unknown>(): [AsyncDispatch, Dispatch<T>] {
  const dispatch = useDispatch()
  const asyncDispatch = useAsyncDispatchFunc(dispatch)

  return [asyncDispatch, dispatch]
}

export default useAsyncDispatch
export { useAsyncDispatchFunc }
