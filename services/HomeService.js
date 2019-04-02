const axios = require('axios');
const api = require('../config');

class HomeService {
    getNowPlayingMovies(){
        return axios.get(`${api.movie_endpoints.now_playing}?api_key=${api.headers.api_key}`)
    }
}

module.exports = HomeService