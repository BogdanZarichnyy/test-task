import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsBtnActive } from '../../redux/selectors';

import { Filter } from '../../components/Filter/Filter';
import { UserList } from '../../components/UsersList/UsersList';
import { LoadMore } from '../../components/LoadMore/LoadMore';

import style from './Tweets.module.css';

export const Tweets = () => {
    const isActive = useSelector(selectIsBtnActive);
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className={style.layout}>
            <div className="container">
                <div className={style.wrraper}>

                    <button className={style.btn} type="button" onClick={goToHome}>Back</button>

                    <Filter />

                    <UserList />

                    {isActive && <LoadMore />}
                    
                </div>
            </div>
        </div>
    );
};