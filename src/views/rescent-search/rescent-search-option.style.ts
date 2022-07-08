import { StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignSelf: "stretch",
    alignItems: "stretch",
    alignContent: "stretch",
    justifyContent: "flex-start",
    backgroundColor: R.color.statusBar,
  },
  image: {
    width: 30,
    height: 30,
    padding: 10,
    resizeMode: "center",
    alignSelf: "center",
    alignContent: "flex-end",
  },

  text: {
    flex: 1,
    width: "auto",
    height: 50,
    alignSelf: "flex-start",
    marginStart: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlignVertical: "center",
  },
})
