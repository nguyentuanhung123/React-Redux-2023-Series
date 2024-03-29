import { createStoreHook } from "react-redux"
import { counterReducer } from "./reducer"

export const store = createStoreHook(counterReducer)