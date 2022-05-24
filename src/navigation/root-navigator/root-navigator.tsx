import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AppRoute } from "@github/navigation/routes"
import { Image } from "@github-shared"
import { HomeScreen } from "@github/views/home"
import { SearchScreen } from "@github/views/search"
import { R } from "@github/res"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={AppRoute.Home} screenOptions={{ headerShown: true }}>
      <RootStack.Group
        screenOptions={{
          headerStyle: { backgroundColor: R.color.statusBar, borderColor: R.color.text },
        }}>
        <RootStack.Screen
          name={AppRoute.Home}
          component={HomeScreen}
          options={({ navigation }) => ({
            title: R.string.title.homeTitle,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate(AppRoute.Search)}>
                <Image source={require("../../assets/images/search.png")} />
              </TouchableOpacity>
            ),
          })}
        />
        <RootStack.Screen name={AppRoute.Search} component={SearchScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator
