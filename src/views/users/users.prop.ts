import { AppRoute } from "@github/navigation/routes"
import { IRootRoutProp, IRootNavigationProp } from "@github/navigation/types"

export interface IUsersProp {
  navigation: IRootNavigationProp<AppRoute.Users>
  route: IRootRoutProp<AppRoute.Users>
}
