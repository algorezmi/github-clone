import React, { useEffect } from "react"
import { FlatList } from "react-native-gesture-handler"
import { View } from "react-native"
import { RefreshControl, Text } from "@github-shared"
import { useAppSelector } from "@github/hooks/hooks.types"
import { styles } from "./item-list.styles"
import { IListProps } from "./item-list.props"

const EmptyListMessage = () => <Text style={styles.emptyListStyle}>No Data Found</Text>

const FlatListItemSeparator = () => <View style={styles.seperator} />

const ItemList = (props: IListProps) => {
  const data = useAppSelector((state) => state.search.users)
  const canLoadMore = useAppSelector((state) => state.search.canLoadMore)
  const isRefreshing = useAppSelector((state) => state.search.isLoading)
  useEffect(() => {
    props.callBack()
  }, [props])

  return (
    <View style={styles.outer_container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={(item) => props.renderItem(item)}
        contentContainerStyle={styles.cardcontainer}
        ItemSeparatorComponent={FlatListItemSeparator}
        onEndReachedThreshold={0.0}
        onEndReached={() => {
          if (canLoadMore === true) {
            props.callBack()
          }
        }}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={() => {}} />}
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  )
}

export default ItemList
