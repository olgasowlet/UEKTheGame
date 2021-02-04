import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage } from "./Auth/SignIn/action";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: getTokenFromLocalStorage(),
    },
    reducers: {
        fetchUserToken: () => {

        },
        signIn: (state, {payload: response}) => {
            state.token = response;
        }
    }
});

export const {
    fetchUserToken,
    signIn,
} = authSlice.actions

export const selectToken = state => state.token;

export default authSlice.reducer;
