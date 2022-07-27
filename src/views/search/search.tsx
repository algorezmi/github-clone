import React from "react"
import { Container, Text } from "@github-shared"
import { SearchBar } from "@github/views/search/search-bar"
import { ISearchProp } from "./search.prop"
import { SearchScreen } from "./search.styles"

const Search = ({ navigation }: ISearchProp): JSX.Element => {
  return (
    <Container>
      <SearchBar navigation={navigation} />
      <SearchScreen>
        <Text>Search Results!</Text>
      </SearchScreen>
    </Container>
  )
}

export { Search }
