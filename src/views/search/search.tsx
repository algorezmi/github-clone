import React from "react"
import { StyleSheet, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { R } from "@github/res"
import { AppRoute } from "@github/navigation/routes"
import { Text } from "@github-shared"
import Item from "./item"

interface IProps {
  text: String
}

const Search = (props: IProps) => {
  const isEmptyText = props.text !== ""
  const navigation = useNavigation()
  if (isEmptyText) {
    return (
      <View>
        <Item
          type="People"
          text={props.text}
          image={require("../../assets/images/people.png")}
          onOptionPressed={() => navigation.navigate(AppRoute.People)}
        />
        <Item
          type="Organizations"
          text={props.text}
          image={require("../../assets/images/organization.png")}
          onOptionPressed={() => navigation.navigate(AppRoute.Organization)}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.empty_container}>
        <Text style={styles.text} preset="primaryLarger">
          Find your stuff
        </Text>
        <Text style={styles.text} preset="secondary">
          Search all of github
        </Text>
      </View>
    )
  }
}

export default Search

const styles = StyleSheet.create({
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
