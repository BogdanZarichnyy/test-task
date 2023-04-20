import { combineReducers } from '@reduxjs/toolkit';
import { reducerUsers } from './slices/usersSlice';
import { reducerFilter } from './slices/filterSlice';

export const rootReducer = combineReducers({
    users: reducerUsers,
    filter: reducerFilter,
});