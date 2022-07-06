import { IRootNavigationProp } from "@github/navigation/root-navigator"
import { AppRoute } from "@github/navigation/routes"

type SearchTypes = "User" | "Organization"
export interface IResultsListProps {
  route: { params: { text: string } }
  navigation: IRootNavigationProp<AppRoute.Search>
  type: SearchTypes
}
