
// # Get Película Destacada (La más nueva en Now Playing)
// [GET] https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20

const NOW_PLAYING_MOVIES = {
    "results": [
        {
            "vote_count": 2538,
            "id": 299537,
            "video": false,
            "vote_average": 7.3,
            "title": "Captain Marvel",
            "popularity": 375.593,
            "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
            "original_language": "en",
            "original_title": "Captain Marvel",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
            "adult": false,
            "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
            "release_date": "2019-03-06"
        },
    ],
    "page": 1,
    "total_results": 1000,
    "dates": {},
    "total_pages": 50
}

export default NOW_PLAYING_MOVIES