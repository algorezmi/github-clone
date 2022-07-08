import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRescentSearchState } from "./rescent-search.types"

const initialState: IRescentSearchState = {
  searches: [],
}

const rescentSearchSlice = createSlice({
  name: "rescent",
  initialState,
  reducers: {
    updateRescentList: (state, action: PayloadAction<string>) => {
      var myClone = [
        ...state.searches.filter((item) => {
          return item != action.payload
        }),
      ]
      if (myClone.length >= 5) {
        myClone = [...myClone.slice(0, 4)]
      }
      return { ...state, searches: [action.payload, ...myClone] }
    },
    removeOneFromRescent: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searches: [
          ...state.searches.filter((Item) => {
            return Item !== action.payload
          }),
        ],
      }
    },
  },
})

export const { updateRescentList, removeOneFromRescent } = rescentSearchSlice.actions
export const rescentSearchReducerName = rescentSearchSlice.name
export default rescentSearchSlice.reducer
