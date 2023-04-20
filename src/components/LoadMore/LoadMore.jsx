import React from 'react';
import { useDispatch } from 'react-redux';

import { addUsersThunk } from '../../redux/thunks/usersThunk';
import { setPage } from '../../redux/slices/filterSlice';

import style from './LoadMore.module.css';

export const LoadMore = () => {
    const dispatch = useDispatch();

    const loadMoreUsers = async () => {
        await dispatch(setPage(1));
        await dispatch(addUsersThunk());
    }
    
    return (
        <button className={style.btn} type="button" onClick={loadMoreUsers}>Load More</button>
    );
}