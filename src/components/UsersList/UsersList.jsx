import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredUsers } from '../../redux/selectors';
import { getUsersThunk } from '../../redux/thunks/usersThunk';

import { UserItem } from '../UserItem/UserItem';

import style from './UsersList.module.css';

export const UserList = () => {
    const filteredUsersList = useSelector(selectFilteredUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunk());
    }, [dispatch]);
    
    return (
        <ol className={style.list}>
            {filteredUsersList.length === 0 ?
                null
            :
                [...filteredUsersList].sort((prevItem, item) => prevItem.id - item.id).map(item => 
                    <UserItem key={item.id} userItem={item} />
                )}
        </ol>
    );
}