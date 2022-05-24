import React, { useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Input, Screen, Text } from "@github-shared"

const Search = () => {
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
      <Text>Search</Text>
      <Text>Search</Text>
      <Text>Search</Text>
      <Text>Search</Text>
      <Text>Search</Text>
      <Text>Search</Text>
      <Text>Search</Text>
    </Screen>
  )
}

export default Search
