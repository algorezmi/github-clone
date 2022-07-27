import { BottomTabNavigationProp, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { RouteProp } from "@react-navigation/native"
import { AppRoute } from "@github/navigation/routes"

export type ITabParamList = {
  [AppRoute.Search]: undefined
  [AppRoute.Home]: undefined
}

export type ITabRoute = keyof ITabParamList

export type ITabNavigationProp<R extends ITabRoute> = BottomTabNavigationProp<ITabParamList, R>
export type ITabRoutProp<R extends ITabRoute> = RouteProp<ITabParamList, R>

export type TabBarIconProps = Parameters<Required<BottomTabNavigationOptions>["tabBarIcon"]>[0] & {
  name: ITabRoute
}
