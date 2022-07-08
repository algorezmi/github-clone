import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AppRoute } from "@github/navigation/routes"
import { Image } from "@github-shared"
import { HomeScreen } from "@github/views/home"
import { R } from "@github/res"
import { PeopleResults } from "@github/views/people"
import { OrganizationResults } from "@github/views/organization"
import SearchContainer from "@github/views/search-container/search-container"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={AppRoute.Home} screenOptions={{ headerShown: true }}>
      <RootStack.Group
        screenOptions={{
          headerTitleStyle: { width: "auto" },
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
            headerTintColor: R.color.text,
          })}
        />
        <RootStack.Screen
          options={({}) => ({
            headerLeftContainerStyle: { width: "6%" },
          })}
          name={AppRoute.Search}
          component={SearchContainer}
        />
        <RootStack.Screen
          name={AppRoute.People}
          component={PeopleResults}
          options={({}) => ({
            title: R.string.title.peopleTitle,
            headerTintColor: R.color.text,
          })}
        />
        <RootStack.Screen
          name={AppRoute.Organization}
          component={OrganizationResults}
          options={({}) => ({
            title: R.string.title.organizationTitle,
            headerTintColor: R.color.text,
          })}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator
