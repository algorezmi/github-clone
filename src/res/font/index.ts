import fonts from "@github/assets/fonts"

// TODO: Should be changed after adding the app fonts
const font = {
  primary: fonts.rubikMedium,
  primaryBold: fonts.rubikBold,
  secondary: fonts.rubikRegular,
  tertiary: fonts.rubikRegular,
} as const

export default font
export { default as fontSize } from "./font.size"
