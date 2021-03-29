import React,{ useEffect , useState } from 'react';
import CardFilm from '../../components/molecules/CardFilm';
import axios from 'axios';
import './home.scss';
import { Input } from '../../components';
import {  ICSearch } from '../../assets';


const Greating = (Login) => {
    let greatName ='';
    let great ='';

    if(Login !== true ){
        greatName = `Hi Geza, Nice to meet u`;
        great = 'Ready to Nihfilm and Chill ?'
    }else{
        greatName ='Hi There !';
        great ='Already Have an Account ?';
    }

    return (
        <p className="greating">{greatName}<br/>{great}</p>
    );
};


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=262181777ce32f0dc038604056fb0e1f&query=";


const Home = () => {
    

    const [movies , setMovies ] = useState([]);
    const [isLogin] = useState(false);

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        axios.get(SEARCH_API+search )
        .then(res => {
           setMovies(res.data.results);
        });

    };
    

    useEffect(  () => {
        
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=262181777ce32f0dc038604056fb0e1f`)
        .then(res => {
           setMovies(res.data.results);
        });

    }, []);



    return (
        <div className="home-page-wrapper">
            <div className="wrapper-search-greating">
                {Greating(isLogin)}
                <form className="search-box" onSubmit={handleSubmitClick} >

                    <Input className="form-control" type="search" placeholder="search here" onChange={handleChange} value={search}/>
                    <img className="search-icon" src={ICSearch} alt="search" id="search" />
                </form>
            </div>
            <div className="wrapper-film" >
                {movies.map(movie => (
                    <CardFilm  key={movie.id} {...movie} reales="2019" />  
                ))}
                              
            </div>
        </div>
    )
}

export default Home;
