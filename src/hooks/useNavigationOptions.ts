import { useLayoutEffect } from "react"
import {
  NavigationProp,
  NavigationState,
  ParamListBase,
  useNavigation,
} from "@react-navigation/core"

const useNavigationOptionsFunc = <
  P extends ParamListBase,
  R extends keyof P,
  Options,
  T extends NavigationProp<P, R, NavigationState<P>, Options>,
>(
  navigation: T,
  options: Partial<Options>,
): void => {
  useLayoutEffect(() => {
    navigation.setOptions(options)
  }, [navigation, options])
}

const useNavigationOptions = <P extends ParamListBase, Options, T extends NavigationProp<P>>(
  options: Partial<Options>,
): T => {
  const navigation = useNavigation<T>()
  useNavigationOptionsFunc(navigation, options)
  return navigation
}

export default useNavigationOptions
