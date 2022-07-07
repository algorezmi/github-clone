import React from "react"
import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Image, Text } from "@github-shared"
import { ISuggestionProps } from "./search-suggestion-line.props"
import { styles } from "./search-suggestion-line.style"

export type searchType = "People" | "Organizations"
const Item = (props: ISuggestionProps) => {
  var buttonText = `${props.type} with "${props.text}"`
  // notifyMessage(buttonText)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.onOptionPressed(props.text)
        }}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item
