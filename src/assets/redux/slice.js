import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Home",
    value2: {}
    }

    export const countSlice = createSlice({
        name: "page",
        initialState,
        reducers:{
            getMovieDetails: (state, action) => {
                state.value2 = action.payload
            }
        }
    })

    export const {getMovieDetails} = countSlice.actions;

    export default countSlice.reducer