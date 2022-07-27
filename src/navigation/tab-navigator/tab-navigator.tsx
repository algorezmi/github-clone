import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppRoute } from "@github/navigation/routes"
import image from "@github/assets/images"
import { FitImage } from "@github-shared"
import Home from "@github/views/home/home"
import { Search } from "@github/views/search/search"
import { ITabParamList, TabBarIconProps } from "./tab-navigator.types"
import { styles } from "./tab-naviagator.styles"

const Tab = createBottomTabNavigator<ITabParamList>()

const tabBarIconSelector = (name) => {
  switch (name) {
    case AppRoute.Search:
      return image.search
    case AppRoute.Home:
      return image.home
  }
}

const TabBarIcon = ({ name }: TabBarIconProps) => {
  const iconSource = tabBarIconSelector(name)
  return <FitImage source={iconSource} style={styles.activeTabBarIcon} />
}

const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName={AppRoute.Home}
      screenOptions={({ route: { name } }) => ({
        headerShown: false,
        tabBarIcon: (props) => <TabBarIcon {...props} name={name} />,
      })}>
      <Tab.Screen name={AppRoute.Home} component={Home} />
      <Tab.Screen name={AppRoute.Search} component={Search} />
    </Tab.Navigator>
  )
}

export default TabNavigator
