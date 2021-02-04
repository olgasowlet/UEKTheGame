import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage } from "./Auth/fetchToken";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: getTokenFromLocalStorage(),
    },
    reducers: {
        signIn: (state, {payload: response}) => {
            state.token = response;
        }
    }
});

export const {
    signIn,
} = authSlice.actions

export const selectToken = state => state.auth.token;

export default authSlice.reducer;
