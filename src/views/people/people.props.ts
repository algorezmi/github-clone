import { IRootNavigationProp } from "@github/navigation/root-navigator"
import { AppRoute } from "@github/navigation/routes"

export interface IPeopleProps {
  route: { params: { text: string } }
  navigation: IRootNavigationProp<AppRoute.Search>
}
