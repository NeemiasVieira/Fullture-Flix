import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './slice'
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";

createSerializableStateInvariantMiddleware({
    isSerializable: false
})


export const store = configureStore({
    reducer: {
        page: pageReducer,
    },
})