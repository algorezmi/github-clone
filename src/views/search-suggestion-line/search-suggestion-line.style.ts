import { StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    marginLeft: 0,
    paddingRight: 0,
    backgroundColor: R.color.statusBar,
  },
  button: {
    width: "100%",
    height: "auto",
    padding: 5,
    marginLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    marginBottom: 0,
    alignSelf: "stretch",
    alignItems: "stretch",
    alignContent: "stretch",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: R.color.statusBar,
  },
  image: {
    width: 30,
    height: 30,
    padding: 2,
  },
  text: {
    width: "100%",
    height: "auto",
    alignSelf: "center",
    marginStart: 2,
    textAlignVertical: "center",
  },
})
