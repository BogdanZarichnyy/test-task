import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: {
        filter: '',
        page: 1,
        limit: 8,
        isBtnActive: true
    },
    reducers: {
        searchUsers: {
            reducer( state, action) {
                state.filter = action.payload;
            },
            prepare(filter) {
                return {
                    payload: filter,
                }
            }
        },
        setPage: {
            reducer( state, action) {
                state.page = state.page + action.payload;
            },
            prepare(page) {
                return {
                    payload: page,
                }
            }
        },
        setLimit: {
            reducer( state, action) {
                state.limit = action.payload;
            },
            prepare(limit) {
                return {
                    payload: limit,
                }
            }
        },
        setBtnStatus: {
            reducer( state, action) {
                state.isBtnActive = action.payload;
            },
            prepare(isBtnActive) {
                return {
                    payload: isBtnActive,
                }
            }
        }
    }
});

export const { searchUsers, setPage, setLimit, setBtnStatus } = filterSlice.actions;
export const reducerFilter = filterSlice.reducer;