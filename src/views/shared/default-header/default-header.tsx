import React, { memo, useCallback, useMemo } from "react"
import { StackNavigationOptions } from "@react-navigation/stack"
import useNavigationOptions from "@github/hooks/useNavigationOptions"
import { R } from "@github/res"
import { BackButton, BackImage, Styles } from "./default-header.styles"
import { IDefaultHeaderProps } from "./default-header.props"

const DefaultHeader = ({ title, goBack }: IDefaultHeaderProps) => {
  const renderBackIcon = useCallback(
    () => (
      <BackButton onPress={goBack}>
        <BackImage source={R.image.back} />
      </BackButton>
    ),
    [goBack],
  )

  const navigationOptions = useMemo((): Partial<StackNavigationOptions> => {
    return {
      headerShown: true,
      headerTitle: title,
      headerLeft: renderBackIcon,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: R.color.statusBar,
      },
      headerTitleStyle: Styles.headerTitle,
    }
  }, [title, renderBackIcon])

  useNavigationOptions(navigationOptions)

  return null
}

export default memo(
  DefaultHeader,
  (prev, next) => prev.title === next.title && prev.goBack === next.goBack,
)
