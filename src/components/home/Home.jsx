import React, { Component } from 'react';
import './Home.scss';
import Header from './Header'; 

import NOW_PLAYING_MOVIES from '../../../seed/now_playing';
import UPCOMING_MOVIES from '../../../seed/upcoming';
import TOP_RATED_MOVIES from '../../../seed/top_rated';
import POPULAR_MOVIES from '../../../seed/popular';
import DRAMA_MOVIES from '../../../seed/drama';





class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
			nowPlayingMovies: {},
			upcomingMovies: {},
			topRatedMovies: {},
			popularMovies: {},
			dramaMovies: {},
			mainCoverUrl: ''
        };
    }

    componentDidMount() {
		this.getStartingData()
	}
	
	getStartingData() {
		this.setState({
			nowPlayingMovies: NOW_PLAYING_MOVIES.results,
			upcomingMovies: UPCOMING_MOVIES.results,
			topRatedMovies: TOP_RATED_MOVIES.results,
			popularMovies: POPULAR_MOVIES.results,
			dramaMovies: DRAMA_MOVIES.results,
			mainCoverUrl: this.getImageUrl(NOW_PLAYING_MOVIES.results[0])
		})
	}

	getImageUrl(movie, type='backdrop', size= 'original') {
		const base_url = 'https://image.tmdb.org/t/p/';
		const img_path = movie[`${type}_path`]

		return base_url + size + img_path
	}

    render() {
        return (
			<div>
				<div className="main-container" style={{ backgroundImage : `url(${this.state.mainCoverUrl})` }}>
					<Header/>
				</div>
			</div>
        )
    }
}

export default Home;