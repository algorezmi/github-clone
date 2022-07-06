import React from "react"
import { ResultsList } from "@github/views/results-list"
import { IPeopleProps } from "./people.props"

const People = (props: IPeopleProps) => {
  return <ResultsList route={props.route} navigation={props.navigation} type="User" />
}

export default People
