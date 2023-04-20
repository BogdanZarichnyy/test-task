import React from 'react';
import style from './Home.module.css';
import { useNavigate } from 'react-router-dom';

import homeImg from '../../images/home.jpg';

export const Home = () => {
    const navigate = useNavigate();
    
    const goToTweets = () => {
        navigate('/tweets');
    }
        
    return (
        <div className={style.layout}>
            <img className={style.img} src={homeImg} alt="home" width={1280}/>  
            <div className="container">
                <button className={style.btn} type="button" onClick={goToTweets}>Go to Tweets page</button>    
            </div>
        </div>
    );
};