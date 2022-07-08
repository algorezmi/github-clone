import React, { useCallback } from "react"
import { FlatList, View } from "react-native"
import { AppRoute } from "@github/navigation/routes"
import { Text } from "@github-shared"
import { Item } from "@github/views/search-suggestion-line"
import { R } from "@github/res"
import { useAppDispatch, useAppSelector } from "@github/hooks"
import { removeOneFromRescent, updateRescentList } from "@github/state"
import { RescentSearchOption } from "@github/views/rescent-search"
import { ISearchProps } from "./search.props"
import { styles } from "./search.style"

const Search = (props: ISearchProps) => {
  const rescent = useAppSelector((state) => state.rescent.searches)
  const dispatch = useAppDispatch()
  const removeRescentSearchRecord = useCallback(
    (text: string) => {
      dispatch(removeOneFromRescent(text))
    },
    [dispatch],
  )
  const addRescentSearchRecord = useCallback(
    (text: string) => {
      dispatch(updateRescentList(text))
    },
    [dispatch],
  )

  if (props.text !== "") {
    return (
      <View style={styles.empty_container}>
        <Item
          type="People"
          text={props.text}
          image={require("../../assets/images/people.png")}
          onOptionPressed={(text) => {
            addRescentSearchRecord(text)
            props.navigation.navigate(AppRoute.People, { text: text })
          }}
        />
        <Item
          type="Organizations"
          text={props.text}
          image={require("../../assets/images/organization.png")}
          onOptionPressed={(text) => {
            addRescentSearchRecord(text)
            props.navigation.navigate(AppRoute.Organization, { text })
          }}
        />
      </View>
    )
  } else {
    if (rescent.length > 0) {
      return (
        <View style={styles.history_container}>
          <Text preset="primaryLarger" style={styles.history_title}>
            {R.string.shared.searchHistory}
          </Text>
          <FlatList
            data={rescent}
            style={styles.history_list}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.cardcontainer}
            renderItem={({ item }) => (
              <RescentSearchOption
                text={item}
                onOptionPressed={() => {
                  removeRescentSearchRecord(item)
                }}
                onSelected={() => {
                  props.setText(item)
                }}
              />
            )}
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
}

export default Search
