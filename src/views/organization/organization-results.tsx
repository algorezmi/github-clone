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

var shown = false

const FlatListItemSeparator = () => {
  return <View style={styles.seperator} />
}
const renderItemComponent = (item: IItem) => {
  if (!shown) {
    console.log("\n\n\n\n\n\n" + JSON.stringify(item))
    shown = true
  }
  return <CardItem image={item.avatar_url} name={item.login} />
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
          showMessage(response.items[0].login.toString())
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
      ) : (
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  list: {
    flex: 1,
    flexGrow: 1,
    overflow: "hidden",
  },
  cardcontainer: {
    overflow: "hidden",
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: Dimensions.get("window").width,
    borderWidth: 0,
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
})
