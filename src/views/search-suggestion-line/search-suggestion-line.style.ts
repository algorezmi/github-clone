import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
