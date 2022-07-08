import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { AppRoute } from "@github/navigation/routes"

export type IRootParamList = {
  [AppRoute.Home]: undefined
  [AppRoute.Search]: undefined
  [AppRoute.People]: { text: string }
  [AppRoute.Organization]: { text: string }
}

type IRootRoute = keyof IRootParamList

export type IRootNavigationProp<R extends IRootRoute> = StackNavigationProp<IRootParamList, R>
export type IRootRoutProp<R extends IRootRoute> = RouteProp<IRootParamList, R>
