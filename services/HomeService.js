const axios = require('axios');
const api = require('../config/config');

class HomeService {
    getNowPlayingMovies(){
        return axios.get(`${api.movies_endpoint}now_playing?api_key=${api.headers.api_key}`)
    }

    getUpcomingMovies(){
        return axios.get(`${api.movies_endpoint}upcoming?api_key=${api.headers.api_key}`)
    }

    getTopRatedMovies(){
        return axios.get(`${api.movies_endpoint}top_rated?api_key=${api.headers.api_key}`)
    }

    getPopularMovies(){
        return axios.get(`${api.movies_endpoint}popular?api_key=${api.headers.api_key}`)
    }

    getDramaMovies(){
        return axios.get(`${api.endpoint}discover/movie?api_key=${api.headers.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`)
    }

    getHeroImage(movie_id){
        return axios.get(`${api.movies_endpoint}${movie_id}/images?api_key=${api.headers.api_key}`)
    }
}

module.exports = HomeService