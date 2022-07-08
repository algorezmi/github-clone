import { Dimensions, StyleSheet } from "react-native"
import { R } from "@github/res"

export const styles = StyleSheet.create({
  cardview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: R.color.background,
    elevation: 3,
    width: Dimensions.get("window").width - 20,
    maxHeight: 100,
    minHeight: 50,
    flexWrap: "wrap",
    margin: 1,
    marginTop: 10,
    borderRadius: 4,
  },
  imagecontainer: {
    flex: 1,
    height: 50,
    borderRadius: 4,
  },
  cardimage: {
    flex: 1,
    opacity: 0.8,
    height: 50,
    width: 50,
    backgroundColor: "#000",
  },
  cardinfo: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 2,
  },
  cardtitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: R.color.text,
  },
  cardtext: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textdate: {
    color: "#5e5e71",
  },
  texthour: {
    color: "#5e5e71",
  },
})
