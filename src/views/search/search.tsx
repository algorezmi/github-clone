import React from "react"
import { View } from "react-native"
import { AppRoute } from "@github/navigation/routes"
import { Text } from "@github-shared"
import { Item } from "@github/views/search-suggestion-line"
import { ISearchProps } from "./search.props"
import { styles } from "./search.style"

const Search = (props: ISearchProps) => {
  const isEmptyText = props.text !== ""
  if (isEmptyText) {
    return (
      <View>
        <Item
          type="People"
          text={props.text}
          image={require("../../assets/images/people.png")}
          onOptionPressed={() => props.navigation.navigate(AppRoute.People, { text: props.text })}
        />
        <Item
          type="Organizations"
          text={props.text}
          image={require("../../assets/images/organization.png")}
          onOptionPressed={() =>
            props.navigation.navigate(AppRoute.Organization, { text: props.text })
          }
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
