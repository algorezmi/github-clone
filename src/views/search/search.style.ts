import { Dimensions, StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  empty_list: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
    alignContent: "flex-start",
    textAlignVertical: "center",
    backgroundColor: R.color.background,
  },
  empty_container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    alignContent: "center",
    textAlignVertical: "center",
    backgroundColor: R.color.background,
  },
  large_text: {
    flex: 1,
    flexGrow: 1,
    width: "auto",
    textAlignVertical: "bottom",
    fontFamily: R.font.primaryBold,
    fontWeight: "bold",
    paddingEnd: 10,
    paddingStart: 10,
    fontSize: 28,
  },
  medium_text: {
    flex: 1,
    width: "auto",
    flexGrow: 1,
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    fontFamily: R.font.primary,
    fontWeight: "normal",
    paddingEnd: 30,
    paddingStart: 30,
    fontSize: 15,
  },
  history_container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
    alignContent: "flex-start",
    textAlignVertical: "top",
    backgroundColor: R.color.background,
  },
  history_list: {
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
  history_title: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    marginBottom: 10,
    textAlignVertical: "top",
    fontFamily: R.font.primaryBold,
    fontWeight: "bold",
    paddingEnd: 10,
    paddingStart: 10,
    fontSize: 20,
  },
})
