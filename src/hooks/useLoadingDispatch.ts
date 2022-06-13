import { Dispatch, useCallback, useEffect, useRef, useState } from "react"
import { AsyncDispatch } from "./hooks.types"
import useAsyncDispatch from "./useAsyncDispatch"

function useLoadingDispatchFunc(dispatch: AsyncDispatch): [boolean, AsyncDispatch] {
  const [loading, setLoading] = useState(false)
  const isUnmountedRef = useRef(false)

  useEffect(() => {
    return () => {
      isUnmountedRef.current = true
    }
  }, [])

  const loadingDispatch = useCallback(
    (action, throwError: boolean = false) => {
      setLoading(true)
      return new Promise<void>((resolve, reject) => {
        return dispatch(action, true)
          .then(resolve)
          .catch(() => {
            throwError && reject()
          })
          .finally(() => {
            if (isUnmountedRef.current) {
              return
            }

            setLoading(false)
          })
      })
    },
    [dispatch],
  )

  return [loading, loadingDispatch]
}

function useLoadingDispatch<T extends unknown>(): [
  boolean,
  AsyncDispatch,
  AsyncDispatch,
  Dispatch<T>,
] {
  const [asyncDispatch, dispatch] = useAsyncDispatch()
  const [loading, loadingDispatch] = useLoadingDispatchFunc(asyncDispatch)
  return [loading, loadingDispatch, asyncDispatch, dispatch]
}

export default useLoadingDispatch
export { useLoadingDispatchFunc }
