export interface IItem {
  login: string
  id: number
  node_id: string
  avatar_url: string
  type: string
  name: string
  company: string
  score: number
  bio: string
}

export interface ISearchResult {
  total_count: number
  incomplete_results: boolean
  items: IItem[]
}

export interface ISearchRequest {
  searchText: string
}

export interface ISearchPayload {
  q: string
}
