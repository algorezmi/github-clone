import { IRootNavigationProp } from "@github/navigation/root-navigator"
import { AppRoute } from "@github/navigation/routes"
import { SearchTypes } from "@github/state"

export interface IResultsListProps {
  route: { params: { text: string } }
  navigation: IRootNavigationProp<AppRoute.Search>
  type: SearchTypes
}
