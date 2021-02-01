import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage } from "./Auth/SignIn/action";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: getTokenFromLocalStorage(),
    },
    reducers: {
    }
});

export const selectToken = state => state.token;

export default authSlice.reducer;
