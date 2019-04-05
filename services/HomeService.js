const axios = require('axios');
const api = require('../config/config');

class HomeService {

    getMovies(category){
        if (category === 'drama') return axios.get(`${api.endpoint}discover/movie?api_key=${api.headers.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`)
        return axios.get(`${api.movies_endpoint}${category}?api_key=${api.headers.api_key}`)
    }

    getHeroImage(movie_id){
        return axios.get(`${api.movies_endpoint}${movie_id}/images?api_key=${api.headers.api_key}`)
    }
}

module.exports = HomeService