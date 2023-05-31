import { configureStore } from "@reduxjs/toolkit"
import milkReducer from "./milkSlice"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    milk: milkReducer,
  }
})
