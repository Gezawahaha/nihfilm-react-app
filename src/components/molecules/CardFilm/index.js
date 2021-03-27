import React from 'react';
import { LoginBg } from '../../../assets';
import './card.scss';

const CardFilm = () => {
    return (
        <div className="wrapper">
            <img className="image-thumb" src={LoginBg} alt="test"/>
            <div className="content-detail">
                <p className="tittle-film">The Horizone</p>
                <p className="year">2017</p>
            </div>
        </div>
    )
}

export default CardFilm;
