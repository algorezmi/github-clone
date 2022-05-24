import React from "react"
import { ImageURISource, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Image, Text } from "@github-shared"

interface IProps {
  type: searchType
  text: String
  image: ImageURISource
  onOptionPressed: Function
}
export type searchType = "People" | "Organizations"
const Item = (props: IProps) => {
  var buttonText = `${props.type} with "${props.text}"`
  // notifyMessage(buttonText)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.onOptionPressed(props.type)
        }}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    padding: 0,
    marginLeft: 0,
    flex: 1,
    paddingRight: 0,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 40,
    padding: 5,
    marginLeft: 0,
    flex: 1,
    paddingRight: 0,
    alignSelf: "stretch",
    alignItems: "stretch",
    alignContent: "stretch",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "black",
  },
  image: {
    width: 30,
    height: 30,
    padding: 2,
  },
  text: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    marginStart: 2,
    textAlignVertical: "center",
  },
})
