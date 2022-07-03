import React, { useCallback } from "react"
import { View } from "react-native"
import { R } from "@github/res"
import { showMessage } from "@github/utils"
import { searchUsersAction, resetUsersState } from "@github/state"
import { IItem } from "@github/services"
import { useAppDispatch, useAppSelector } from "@github/hooks/hooks.types"
import { DefaultHeader } from "@github-shared/default-header"
import { ItemList } from "@github/views/ItemList"
import { CardItem } from "@github/views/cardItem"
import { IOrganizationProps } from "./organization.props"
import { styles } from "./organization.style"

const renderItemComponent = (item: { item: IItem }) => {
  return <CardItem image={item.item.avatar_url} name={item.item.login} />
}

const Organization = (props: IOrganizationProps) => {
  const dispatch = useAppDispatch()
  const { text } = props.route.params
  const page = useAppSelector((state) => state.search.page)
  const getInfo = useCallback(() => {
    dispatch(
      searchUsersAction(
        text,
        page,
        () => {
          return null
        },
        () => {
          showMessage(R.string.errors.generalError)
          return null
        },
      ),
    )
  }, [page, text, dispatch])
  const cleareState = useCallback(() => {
    dispatch(resetUsersState())
    {
      props.navigation.goBack()
    }
  }, [dispatch, props.navigation])

  return (
    <View style={styles.empty_container}>
      <DefaultHeader
        title={R.string.title.organizationTitle}
        goBack={() => {
          cleareState()
        }}
      />
      <ItemList
        renderItem={(item) => renderItemComponent(item)}
        callBack={getInfo}
        preset="organizations"
        directionPreset="verical"
      />
    </View>
  )
}
export default Organization
