import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage } from "../../hooks/Auth/fetchToken";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: getTokenFromLocalStorage(),
    },
    reducers: {
        addToken: (state, {payload: response}) => {
            state.token = response;
        },
        removeToken: (state) => {
            state.token = false;
        },
    }
});

export const {
    addToken,
    removeToken,
} = authSlice.actions

export const selectToken = state => state.auth.token;

export default authSlice.reducer;
