import React, { useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { Button, Screen, Text } from "@github-shared"
import { R } from "@github/res"
import { useLoadingDispatch } from "@github/hooks"
import { showMessage } from "@github/utils"
import { searchUsersAction } from "@github/state"

const Organization = (props: { route: { params: { text: string } } }) => {
  const [loading, loadingDispatch] = useLoadingDispatch()
  const { text } = props.route.params
  const getInfo = useCallback(() => {
    loadingDispatch(searchUsersAction(text))
      .then((response) => {
        showMessage("success" + response)
      })
      .catch((error) => {
        console.log(error)
        showMessage("fail" + error)
      })
      .finally(() => {
        showMessage("finally")
      })
  }, [loadingDispatch, text])

  return (
    <Screen preset="scrollStack">
      <View style={styles.empty_container}>
        <Button onPress={getInfo}>
          <Text>press</Text>
        </Button>
        {loading ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <View>
            <Text>Done</Text>
          </View>
        )}
      </View>
    </Screen>
  )
}

export default Organization

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
