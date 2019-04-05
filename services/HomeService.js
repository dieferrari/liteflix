const axios = require('axios');
const api = require('../config/config');

class HomeService {
    getNowPlayingMovies(){
        return axios.get(`${api.movie_endpoint}now_playing?api_key=${api.headers.api_key}`)
    }

    getUpcomingMovies(){
        return axios.get(`${api.movie_endpoint}upcoming?api_key=${api.headers.api_key}`)
    }

    getHeroImage(movie_id){
        return axios.get(`${api.movie_endpoint}${movie_id}/images?api_key=${api.headers.api_key}`)
    }
}

module.exports = HomeService