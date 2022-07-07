import { ImageURISource } from "react-native"
import { searchType } from "./search-suggestion-line"

export interface ISuggestionProps {
  type: searchType
  text: string
  image: ImageURISource
  onOptionPressed: (text: string) => void
}
