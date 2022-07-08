import React from "react"
import { ResultsList } from "@github/views/results-list"
import { IOrganizationProps } from "./organization.props"

const Organization = (props: IOrganizationProps) => {
  return <ResultsList route={props.route} navigation={props.navigation} type="Organization" />
}
export default Organization
