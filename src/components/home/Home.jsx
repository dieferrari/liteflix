import React, { Component } from 'react';
import './Home.scss';
import Header from './Header';
import MainInfo from './MainInfo'; 
import Carousel from './Carousel';

import NOW_PLAYING_MOVIES from '../../../seed/now_playing';
import TOP_RATED_MOVIES from '../../../seed/top_rated';
import POPULAR_MOVIES from '../../../seed/popular';
import DRAMA_MOVIES from '../../../seed/drama';

import config from '../../../config/config';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
			nowPlayingMovies: [],
			upcomingMovies: [],
			topRatedMovies: [],
			popularMovies: [],
			dramaMovies: [],
			mainCoverUrl: ''
        };
    }

    componentDidMount() {
		this.getStartingData()
	}
	
	getStartingData() {
		Promise.all([this.fetchMovies("now_playing"), this.fetchMovies("upcoming"), this.fetchMovies("top_rated"), this.fetchMovies("popular"), this.fetchMovies("drama")]).then( moviesData => {
			this.fetchHero(moviesData[0][0].id)
			.then( heroImages => {
				this.setState({
					mainCoverUrl: this.getImageUrl(heroImages[0], "file")
				})
			})

			this.setState({
				nowPlayingMovies: moviesData[0],
				upcomingMovies: moviesData[1],
				topRatedMovies: moviesData[2],
				popularMovies: moviesData[3],
				dramaMovies: moviesData[4],
			})
		})

	}

	async fetchMovies(category){
		try {
			const response = await fetch(`${config.api_root}${category}`)
			const json = await response.json()
			console.log(json)
			return json.results
		} catch (err) {
			console.log(err);
		}
	}

	async fetchHero(movie_id){
		try {
			const response = await fetch(`${config.api_root}${movie_id}/images`)
			const json = await response.json()
			console.log(json)
			return json.backdrops
		} catch (err) {
			console.log(err);
		}
	}

	getImageUrl(movie, type='backdrop', size= 'original') {
		const base_url = 'https://image.tmdb.org/t/p/';
		const img_path = movie[`${type}_path`]

		return base_url + size + img_path
	}

    render() {
        return (
			<div className="app-container">
				<div className="main-container" style={{ backgroundImage: `url(${this.state.mainCoverUrl})` }}>
					<Header/>
					<MainInfo mainMovieInfo={this.state.nowPlayingMovies[0]}/>
				</div>
				<Carousel
					sectionTitle={"Próximamente"}
					data={this.state.upcomingMovies}
					getImageUrl={this.getImageUrl.bind(this)}
				/>
				<Carousel
					sectionTitle={"Mejores Rankeadas"}
					data={this.state.topRatedMovies}
					getImageUrl={this.getImageUrl.bind(this)}
				/>
				<Carousel
					sectionTitle={"Populares de Liteflix"}
					data={this.state.popularMovies}
					getImageUrl={this.getImageUrl.bind(this)}
					liteflixPopular={true}
				/>
				<Carousel
					sectionTitle={"Drama"}
					data={this.state.dramaMovies}
					getImageUrl={this.getImageUrl.bind(this)}
				/>
			</div>
        )
    }
}

export default Home;