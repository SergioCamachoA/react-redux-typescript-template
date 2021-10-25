import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface User {
  name: string
  surname: string
}

const initialState: User[] = [{ name: "first name", surname: "last name" }]

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<User>) => {
      state.unshift(action.payload)
    },
    removeLastAdded: (state) => {
      state.shift()
    },
  },
})

export const { add, removeLastAdded } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
