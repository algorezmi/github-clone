import styled from "styled-components/native"
import { StyleSheet } from "react-native"
import { R } from "@github/res"
import { FitImage } from "@github-shared"

export const BackButton = styled.TouchableOpacity`
  width: ${R.spacing.giant}px;
  height: ${R.spacing.massive}px;
  margin-left: ${R.spacing.tiny}px;
  padding-vertical: ${R.spacing.smaller}px;
  padding-horizontal: ${R.spacing.medium}px;
`

export const BackImage = styled(FitImage)`
  resize-mode: contain;
`

export const Styles = StyleSheet.create({
  headerTitle: {
    fontFamily: R.font.primary,
    fontSize: R.spacing.large,
    textAlign: "center",
    color: R.color.text,
    marginHorizontal: R.spacing.giant,
  },
})
