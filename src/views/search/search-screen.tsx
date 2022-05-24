import React, { useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Input, Screen } from "@github-shared"
import Search from "./search"

const SearchScreen = () => {
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
      <Search text={searchText} />
    </Screen>
  )
}

export default SearchScreen
