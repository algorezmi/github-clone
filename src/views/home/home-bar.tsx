import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Row, Text, Image } from "@github-shared"
import { AppRoute } from "@github/navigation/routes"
import image from "@github/assets/images"
import { IHomeProp } from "./home.prop"
import { Container } from "./home.styles"

export const HomeBar = ({ navigation }: IHomeProp): JSX.Element => {
  return (
    <Row>
      <Text preset="primaryLarger" style={{ padding: 5 }}>
        Home
      </Text>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.Search, {})}>
          <Image source={image.search} />
        </TouchableOpacity>
      </Container>
    </Row>
  )
}
