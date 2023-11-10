import { configureStore, combineReducers } from "@reduxjs/toolkit"
import todoReducer from "../slices/todoSlice"

const rootReducer = combineReducers({
  todo: todoReducer
})
export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
