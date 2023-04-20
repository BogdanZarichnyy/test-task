import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = state => state.users.users.items;
export const selectIsLoading = state => state.users.users.isLoading;
export const selectError = state => state.users.error;
export const selectFilter = state => state.filter.filter;
export const selectPage = state => state.filter.page;
export const selectLimit = state => state.filter.limit;
export const selectIsBtnActive = state => state.filter.isBtnActive;

export const selectFilteredUsers = createSelector([selectUsers, selectFilter], (users, filter) => {
    if (filter === 'follow') {
        return users.filter(user => (user.isFollow === false));
    } else if (filter === 'following') {
        return users.filter(user => (user.isFollow === true));
    } else return users;
});