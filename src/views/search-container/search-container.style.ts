import { StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginEnd: 0,
    alignSelf: "stretch",
    alignItems: "stretch",
    alignContent: "stretch",
    justifyContent: "space-evenly",
    backgroundColor: R.color.statusBar,
  },
  textInput: {
    height: 35,
    width: "90%",
    textAlignVertical: "center",
    alignSelf: "center",
    color: R.color.text,
    borderBottomWidth: 1,
    borderBottomColor: R.color.ripple,
  },
  closeButton: {
    width: 16,
    height: 55,
    marginEnd: 0,
    resizeMode: "center",
    alignSelf: "center",
    alignContent: "flex-end",
  },
})
