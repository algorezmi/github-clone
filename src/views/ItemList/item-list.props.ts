import { EffectCallback, ReactElement } from "react"
import { StyleProp, ViewStyle } from "react-native"
import { SearchTypes } from "@github/state"

export type DirectionPreset = "verical" | "horizontal"

export interface IListProps {
  preset: SearchTypes
  directionPreset?: DirectionPreset
  renderItem: (item: any) => ReactElement
  callBack: EffectCallback
  searchText: string
}

export type Style = StyleProp<ViewStyle>
