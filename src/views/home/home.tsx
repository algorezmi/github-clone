import React from "react"
import { Row } from "@github-shared"
import { HomeBar } from "@github/views/home/home-bar"
import { IHomeProp } from "./home.prop"

const Home = ({ navigation }: IHomeProp): JSX.Element => {
  return (
    <Row>
      <HomeBar navigation={navigation} />
    </Row>
  )
}

export default Home
