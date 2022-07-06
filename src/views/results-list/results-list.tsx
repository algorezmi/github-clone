import React, { useCallback, useEffect, useRef } from "react"
import { View } from "react-native"
import { R } from "@github/res"
import { showMessage } from "@github/utils"
import { resetUsersState, searchUsersAction } from "@github/state"
import { IItem } from "@github/services"
import { useAppDispatch } from "@github/hooks/hooks.types"
import { ItemList } from "@github/views/ItemList"
import { CardItem } from "@github/views/cardItem"
import { IResultsListProps } from "./results-list.props"
import { styles } from "./results-list.style"

const renderItemComponent = (item: { item: IItem }) => {
  return <CardItem image={item.item.avatar_url} name={item.item.login} />
}

const Organization = (props: IResultsListProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(resetUsersState())
  }, [dispatch])
  const { text } = props.route.params
  const page = useRef(1)
  const getInfo = useCallback(() => {
    dispatch(
      searchUsersAction(
        text,
        page.current,
        props.type,
        () => {
          page.current = page.current + 1
          return null
        },
        () => {
          showMessage(R.string.errors.generalError)
          return null
        },
      ),
    )
  }, [text, dispatch, props.type])

  return (
    <View style={styles.empty_container}>
      <ItemList
        renderItem={(item) => renderItemComponent(item)}
        callBack={getInfo}
        preset={props.type}
        directionPreset="verical"
        searchText={text}
      />
    </View>
  )
}
export default Organization
