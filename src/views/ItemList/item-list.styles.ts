import { Dimensions, StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexGrow: 1,
    overflow: "hidden",
    backgroundColor: R.color.transparent,
  },
  cardcontainer: {
    overflow: "hidden",
    flexGrow: 1,
    alignItems: "center",
    width: Dimensions.get("window").width,
    borderWidth: 0,
    backgroundColor: R.color.transparent,
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  outer_container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: R.color.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
})
