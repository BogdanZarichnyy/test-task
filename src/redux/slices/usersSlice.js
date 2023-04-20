import { createSlice } from "@reduxjs/toolkit";

import { getUsersThunk, addUsersThunk, updateUserThunk } from "../thunks/usersThunk";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: {
            items: [],
            isLoading: false,
            error: null,
        },
    },
    extraReducers: {
            
        [getUsersThunk.pending](state) {
            state.users.isLoading = true;
        },
        [getUsersThunk.fulfilled](state, action) {
            state.users.items = action.payload
            state.users.isLoading = false;
            state.users.error = null;
        },
        [getUsersThunk.rejected](state, action) {
            state.users.isLoading = false;
            state.users.error = action.payload;
        },
        
        [addUsersThunk.pending](state) {
            state.users.isLoading = true;
        },
        [addUsersThunk.fulfilled](state, action) {
            state.users.items = [...state.users.items, ...action.payload];
            state.users.isLoading = false;
            state.users.error = null;
        },
        [addUsersThunk.rejected](state, action) {
            state.users.isLoading = false;
            state.users.error = action.payload;
        },

        [updateUserThunk.pending](state) {
            state.users.isLoading = true;
        },
        [updateUserThunk.fulfilled](state, action) {
            state.users.items = [...state.users.items.filter(user => user.id !== action.payload.id), action.payload];
            state.users.isLoading = false;
            state.users.error = null;
        },
        [updateUserThunk.rejected](state, action) {
            state.users.isLoading = false;
            state.users.error = action.payload;
        },
        
    }
});

export const reducerUsers = usersSlice.reducer;