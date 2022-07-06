import React, { useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { Input } from "@github-shared"
import { Search } from "@github/views/search"
import { R } from "@github/res"
import { ISearchContainerProps } from "./search-container.props"

const SearchContainer = (props: ISearchContainerProps) => {
  const navigation = useNavigation()
  const [searchText, setText] = useState("")
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Input
          placeholder="Type here to translate!"
          onChange={(t) => setText(t)}
          defaultValue={searchText}
        />
      ),
      headerTintColor: R.color.text,
    })
  }, [navigation, searchText])
  return (
    <View style={{ flex: 1, backgroundColor: R.color.background }}>
      <Search text={searchText} navigation={props.navigation} />
    </View>
  )
}

export default SearchContainer
