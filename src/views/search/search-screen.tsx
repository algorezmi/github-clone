import React, { useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Input, Screen } from "@github-shared"
import Search from "./search"
import { ISearchScreenProps } from "./search-screen.props"

const SearchScreen = (props: ISearchScreenProps) => {
  const [searchText, setText] = useState("")
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Input
          placeholder="Type here to translate!"
          onChange={(text) => setText(text)}
          defaultValue={searchText}
        />
      ),
      headerTintColor: "#fff",
    })
  }, [navigation, searchText])
  return (
    <Screen preset="scrollStack">
      <Search text={searchText} navigation={props.navigation} />
    </Screen>
  )
}

export default SearchScreen
