import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { useDispatch } from "react-redux"
import { queryUsersAction } from "@github/state/ducks/user"
import { Column, ActivityIndicator } from "@github-shared"
import { UserBar } from "@github/views/users/users-bar"
import { IUser } from "@github/services"
import { Card, UserImage, UserName } from "./users.styles"
import { IUsersProp } from "./users.prop"

const Users = ({ navigation, route }: IUsersProp): JSX.Element => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    dispatch(
      queryUsersAction(route.params.type, route.params.query, page, (newUsers: IUser[]) => {
        console.log("Doneeeeeeeeeee!!")
        const fullUsers: IUser[] = [...users, ...newUsers]
        setUsers(fullUsers)
        setLoading(false)
      }),
    )
  }, [dispatch, page, route.params.type, route.params.query, users])

  return (
    <Column>
      <UserBar navigation={navigation} route={route} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users}
          keyExtractor={({ id }, index) => id + " " + index}
          renderItem={({ item }) => {
            return (
              <Card>
                <UserImage source={{ uri: `${item.avatarUrl}` }} />
                <UserName>{item.login}</UserName>
              </Card>
            )
          }}
          onEndReached={() => setPage(page + 1)}
        />
      )}
    </Column>
  )
}

export default Users
