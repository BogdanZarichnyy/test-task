import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBtnStatus } from "../slices/filterSlice";

const { REACT_APP_MOCKAPI_URL } = process.env;

export const url = new URL(REACT_APP_MOCKAPI_URL);

export const getUsersThunk = createAsyncThunk("users/get", async (_, thunkAPI) => {
    try {
        url.searchParams.append('completed', false);
        url.searchParams.append('page', thunkAPI.getState().filter.page);
        url.searchParams.append('limit', thunkAPI.getState().filter.limit);
        const response = await fetch(`${url}`).then(response => { return response.json() });
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addUsersThunk = createAsyncThunk("users/add", async (_, thunkAPI) => {
    try {
        url.searchParams.set('page', thunkAPI.getState().filter.page);
        const response = await fetch(`${url}`).then(response => { return response.json() });
        if (response.length === 0 || response.length < thunkAPI.getState().filter.limit) {
            thunkAPI.dispatch(setBtnStatus(false));
        }
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateUserThunk = createAsyncThunk("users/edit", async (user, thunkAPI) => {
    try {
        const response = await fetch(`${REACT_APP_MOCKAPI_URL}/${user.id}`, { method: 'PUT', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' } }).then(response => {return response.json()});
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});