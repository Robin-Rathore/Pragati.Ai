// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            console.log("Setting user:", action.payload.user);
            return {
                ...state,
                user: action.payload.user,
            };
        },
        setLogout: (state) => {
            console.log("Logging out user");
            return {
                ...state,
                user: false,
            };
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
