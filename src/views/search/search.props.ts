import { IRootNavigationProp } from "@github/navigation/root-navigator"
import { AppRoute } from "@github/navigation/routes"

export interface ISearchProps {
  navigation: IRootNavigationProp<AppRoute.Search>
  text: string
}
