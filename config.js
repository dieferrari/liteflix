const api = {
    headers: {
        api_key: "6f26fd536dd6192ec8a57e94141f8b20"
    },
    movie_endpoints: {
        now_playing: 'https://api.themoviedb.org/3/movie/now_playing',
        upcoming: 'https://api.themoviedb.org/3/movie/upcoming',
        top_rated: 'https://api.themoviedb.org/3/movie/top_rated',
        popular: 'https://api.themoviedb.org/3/movie/popular',
        discover: 'https://api.themoviedb.org/3/discover/movie',
    }
}

module.exports = api;