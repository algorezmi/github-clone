import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Column } from "@github-shared"

export const SearchScreen = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10px;
`

export const Button = styled(TouchableOpacity)`
  align-items: center;
  margin-top: 10px;
  margin-left: 5px;
  align-items: flex-start;
  flex: 1;
`
