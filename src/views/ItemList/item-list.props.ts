import { EffectCallback, ReactElement } from "react"
import { StyleProp, ViewStyle } from "react-native"

export type ListPreset = "people" | "organizations"
export type DirectionPreset = "verical" | "horizontal"

export interface IListProps {
  preset?: ListPreset
  directionPreset?: DirectionPreset
  renderItem: (item: any) => ReactElement
  callBack: EffectCallback
}

export type Style = StyleProp<ViewStyle>
