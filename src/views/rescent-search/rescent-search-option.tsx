import React from "react"
import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Image, Text } from "@github-shared"
import { IRescentProps } from "./rescent-search-option.props"
import { styles } from "./rescent-search-option.style"

const RescentSearchOption = (props: IRescentProps) => {
  var buttonText = `${props.text}"`
  // notifyMessage(buttonText)
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => props.onSelected(props.text)}>
        {buttonText}
      </Text>
      <TouchableOpacity style={styles.image} onPress={() => props.onOptionPressed(props.text)}>
        <Image style={styles.image} source={require("../../assets/images/cancel.png")} />
      </TouchableOpacity>
    </View>
  )
}

export default RescentSearchOption
