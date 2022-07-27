import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppRoute } from "@github/navigation/routes"
import Users from "@github/views/users/users"
import { TabNavigator } from "@github/navigation/tab-navigator"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={AppRoute.Tabs}
      mode="card"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={AppRoute.Tabs} component={TabNavigator} />
      <RootStack.Screen name={AppRoute.Users} component={Users} />
    </RootStack.Navigator>
  )
}

export default RootNavigator
