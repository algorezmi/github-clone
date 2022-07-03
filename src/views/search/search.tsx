import React from "react"
import { View } from "react-native"
import { AppRoute } from "@github/navigation/routes"
import { Text } from "@github-shared"
import { Item } from "@github/views/search-suggestion-line"
import { R } from "@github/res"
import { ISearchProps } from "./search.props"
import { styles } from "./search.style"

const Search = (props: ISearchProps) => {
  const isEmptyText = props.text !== ""
  if (isEmptyText) {
    return (
      <View style={styles.empty_container}>
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
        <Text preset="primaryLarger" style={styles.large_text}>
          {R.string.shared.searchTitle}
        </Text>
        <Text style={styles.medium_text}>{R.string.shared.searchDescription}</Text>
      </View>
    )
  }
}

export default Search
