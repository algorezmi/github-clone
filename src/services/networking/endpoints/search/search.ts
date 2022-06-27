import { IEndpoint } from "@github/services/networking/endpoints/endpoint.types"
import { IResponse } from "@github/services"
import { ISearchResult } from "./search.com"

export const searchUsersEndpoint = (
  search: string,
): IEndpoint<undefined, IResponse<ISearchResult>> =>
  Object.freeze({ path: `search/users?q=${search}`, method: "GET" })

// export const SearchMapper: IMapper<IOkResponse<ISearchResult>> = (result: ISearchResult) => {
//   if(result){
//     return {
//       ok: true,
//       data: {
//         total_count: result.total_count,
//         incomplete_results: result.incomplete_results,
//         items:result.items
//       },
//       statusCode: 200
//     }
//   }else{
//     return{
//     ok: false,
//     data: {
//       total_count: 0,
//       incomplete_results: false,
//       items:[]
//     },
//     statusCode: 200
//   }
//   }
// }
