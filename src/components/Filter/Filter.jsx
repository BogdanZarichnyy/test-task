import React from 'react';

import { useDispatch } from 'react-redux';
import { searchUsers } from '../../redux/slices/filterSlice';

import style from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();

    const checkFilter = (event) => {
        dispatch(searchUsers(event.target.value));
    }

    return (
        <select className={style.filter} onChange={checkFilter} defaultValue="0">
            <option value="all">show all</option>
            <option value="follow">follow</option>
            <option value="following">following</option>
        </select>
    );
};