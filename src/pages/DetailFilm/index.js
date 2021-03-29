import React,{ useEffect , useState } from 'react';
import { ICBack} from '../../assets';
import './detailFilm.scss';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';
//import { Button } from '../../components';


const DetailFilm = (props) => {
    const history = useHistory();
    const location = useLocation();

    const [moviesDetail , setMoviesDetail ] = useState([]);
    const IMG_API = "https://image.tmdb.org/t/p/w500/";
    const API = useState(`https://api.themoviedb.org/3/movie/${location.state.movie_id.id}?api_key=262181777ce32f0dc038604056fb0e1f&language=en-US`);
    useEffect(() => {
        
        axios.get(API)
        .then(res => {
            setMoviesDetail(res.data);
        });
    }, [API])

    console.log("kontol");
    console.log(moviesDetail);
    return (
        <div className="detail-film-wrapper">
            <button className="btn-wrapper" onClick={() => history.push('/')}>
                <img className="ic-back-detail" src={ICBack} alt="iconnback"/>
                <p className="title-back-white">Back</p>

            </button>
            <img className="img-cover" src={IMG_API + moviesDetail.backdrop_path} alt="dummy" width="300px"/>
            <p className="film-tittle" >{moviesDetail.title}</p>
            <div className="components">
                <p >{moviesDetail.release_date}</p>
                <div className="component-right">
                    
                    
                    <div className="genre">
                        <p>Genres: </p>
                        {(moviesDetail.genres || []).map(genre => (
                            <p key={genre.id}> {`${genre.name},`}</p>
                        ))}
                    </div>
                </div>  
            </div>
            <div>
                <p>{`Duration: ${moviesDetail.runtime} minutes`}</p>
            </div>
            <p className="descripton">{moviesDetail.overview}</p>
            {/* <Button className="" tittle="watch" onClick={() => history.push(moviesDetail.homepage)}/> */}

        </div>
    )
}

export default DetailFilm;
