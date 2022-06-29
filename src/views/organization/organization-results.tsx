import React, { useCallback, useState } from "react"
import { Dimensions, FlatList, StyleSheet, View } from "react-native"
import { useDispatch } from "react-redux"
import { Button, Text } from "@github-shared"
import { R } from "@github/res"
import { showMessage } from "@github/utils"
import { searchUsersAction } from "@github/state"
import { IItem, ISearchResult } from "@github/services"
import { IOrganizationProps } from "./organization.props"
import CardItem from "./card_item"

const FlatListItemSeparator = () => {
  return <View style={styles.seperator} />
}

const renderItemComponent = (item: { item: IItem }) => {
  return <CardItem image={item.item.avatar_url} name={item.item.login} />
}

const Organization = (props: IOrganizationProps) => {
  const dispatch = useDispatch()
  const { text } = props.route.params
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [data, setResults] = useState<IItem[]>([])
  const getInfo = useCallback(() => {
    setLoading(true)
    dispatch(
      searchUsersAction(
        text,
        (response: ISearchResult) => {
          setResults(response.items)
          setLoading(false)
          setLoaded(true)
        },
        () => {
          showMessage("failed")
          setLoading(false)
        },
      ),
    )
  }, [dispatch, text, setResults])

  return (
    <View style={styles.outer_container}>
      {loaded ? null : (
        <Button onPress={getInfo}>
          <Text>press</Text>
        </Button>
      )}
      {loading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (data.length && data[0].login !== null && data[0].login !== "") > 0 ? (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => renderItemComponent(item)}
          contentContainerStyle={styles.cardcontainer}
          ItemSeparatorComponent={FlatListItemSeparator}
          removeClippedSubviews={true}
          refreshing
        />
      ) : (
        <Text style={styles.emptyListStyle}>No Data Found</Text>
      )}
    </View>
  )
}

export default Organization

const styles = StyleSheet.create({
  empty_container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexGrow: 1,
    backgroundColor: R.color.background,
  },
  image: {
    width: 100,
    height: 100,
    padding: 2,
  },
  text: {
    width: "80%",
    height: 20,
    alignSelf: "center",
    marginStart: 2,
    textAlignVertical: "center",
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    padding: 0,
    marginLeft: 0,
    flex: 1,
    paddingRight: 0,
    backgroundColor: R.color.transparent,
  },
  outer_container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: R.color.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
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
})
