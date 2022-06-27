import { StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  empty_container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: R.color.background,
  },
  text: {
    flex: 1,
    width: "100%",
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: R.color.background,
    color: R.color.text,
  },
})
