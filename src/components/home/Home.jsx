import React, { Component } from 'react';

import './Home.scss';
import Header from './Header';
import MainInfo from './MainInfo'; 
import Carousel from './Carousel';
import Modal from './Modal';

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
			newestMovie: {},
			mainCoverUrl: '',
			showModal: false,
        };
    }

    componentDidMount() {
		this.getStartingData()
	}
	
	getStartingData() {
		Promise.all([this.fetchMovies("now_playing"), this.fetchMovies("upcoming"), this.fetchMovies("top_rated"), this.fetchMovies("popular"), this.fetchMovies("drama")]).then( moviesData => {
			let newestMovieIndex = 0;

			moviesData[0].forEach( (movie, index) => { // finding the newst movie in Now Playing category
				if (movie.release_date > moviesData[0][newestMovieIndex].release_date && !!movie.backdrop_path) newestMovieIndex = index
			});
			
			this.fetchHero(moviesData[0][newestMovieIndex].id)
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
				newestMovie: moviesData[0][newestMovieIndex]
			})
		})

	}

	async fetchMovies(category){
		try {
			const response = await fetch(`${config.api_root}${category}`)
			const json = await response.json()
			return json.results
		} catch (err) {
			console.log(err);
		}
	}

	async fetchHero(movie_id){
		try {
			const response = await fetch(`${config.api_root}${movie_id}/images`)
			const json = await response.json()
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

	openModalHandler() {
		this.setState({showModal: true})
	}

	closeModalHandler() {
		this.setState({showModal: false})
	}

    render() {
        return (
			<div className="app-container">
				<div className="main-container" style={{ backgroundImage: `url(${this.state.mainCoverUrl})` }}>
					<Header openModalHandler={this.openModalHandler.bind(this)}/>
					<MainInfo mainMovieInfo={this.state.newestMovie}/>
					<Modal
						showModal={this.state.showModal}
						closeModalHandler={this.closeModalHandler.bind(this)}
					/>
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

export default Home