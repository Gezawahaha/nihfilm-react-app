import React, { } from 'react';
import { ICStar } from '../../../assets';
import './card.scss';
import {useHistory} from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const CardFilm = ({title, poster_path, vote_average, release_date, original_name, id}) => {

    const history = useHistory();
    
    return (
        <div className="wrapper onclick" 
            onClick={() => history.push({
                pathname:'/detailfilm', 
                state:{movie_id: {id} } 
                })} >
            <img className="image-thumb" src={IMG_API + poster_path} alt="test"/>
            <div className="content-detail">
                <p className="tittle-film">{title}</p>
                <div className="rate-wrap">
                    <img width={20} className="rate-icon" src={ICStar} alt="ratingicon"/>
                    <p className="rating">{vote_average}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFilm;