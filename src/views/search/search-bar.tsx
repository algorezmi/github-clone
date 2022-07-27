import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Row, Column, Image, Input, Text } from "@github-shared"
import { AppRoute } from "@github/navigation/routes"
import image from "@github/assets/images"
import { R } from "@github/res"
import { ISearchProp } from "./search.prop"
import { Button } from "./search.styles"

export const SearchBar = ({ navigation }: ISearchProp): JSX.Element => {
  const [query, setQuery] = useState("")
  return (
    <Column>
      <Row>
        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.Home, {})}>
          <Image source={image.back} />
        </TouchableOpacity>
        <Input
          placeholder="Search!"
          value={query}
          onChangeText={(newQuery) => setQuery(newQuery)}
        />
      </Row>

      <Row>
        <Button
          onPress={() => {
            navigation.navigate(AppRoute.Users, { query, type: R.string.shared.users_type })
          }}>
          <Text preset="primary">{query.length != 0 ? "People with " + query : ""}</Text>
        </Button>
      </Row>

      <Row>
        <Button
          onPress={() => {
            navigation.navigate(AppRoute.Users, { query, type: R.string.shared.organization_type })
          }}>
          <Text preset="primary">{query.length != 0 ? "organizations with " + query : ""}</Text>
        </Button>
      </Row>
    </Column>
  )
}
