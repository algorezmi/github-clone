import React, { useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { Image } from "@github-shared"
import { Search } from "@github/views/search"
import { R } from "@github/res"
import { ISearchContainerProps } from "./search-container.props"
import { styles } from "./search-container.style"

const SearchContainer = (props: ISearchContainerProps) => {
  const navigation = useNavigation()
  const [searchText, setText] = useState("")
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.parent}>
          <TextInput
            placeholder="Type here to translate!"
            onChangeText={(t) => setText(t)}
            style={styles.textInput}
            value={searchText}
            placeholderTextColor={R.color.ripple}
            defaultValue={searchText}
          />
          {/* {searchText !== ""}? */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setText("")
            }}>
            <Image style={styles.closeButton} source={require("../../assets/images/cancel.png")} />
          </TouchableOpacity>
          {/* :<View /> */}
        </View>
      ),
      headerTintColor: R.color.text,
    })
  }, [navigation, searchText])
  return (
    <View style={{ flex: 1, backgroundColor: R.color.background }}>
      <Search text={searchText} navigation={props.navigation} setText={setText} />
    </View>
  )
}

export default SearchContainer
