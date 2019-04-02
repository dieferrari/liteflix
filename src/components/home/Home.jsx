import React, { Component } from 'react';

import './Home.scss';
import Header from './Header';
import MainInfo from './MainInfo'; 
import Carousel from './Carousel';
import Modal from './Modal';

import NOW_PLAYING_MOVIES from '../../../seed/now_playing';
import UPCOMING_MOVIES from '../../../seed/upcoming';
import TOP_RATED_MOVIES from '../../../seed/top_rated';
import POPULAR_MOVIES from '../../../seed/popular';
import DRAMA_MOVIES from '../../../seed/drama';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
			nowPlayingMovies: [],
			upcomingMovies: [],
			topRatedMovies: [],
			popularMovies: [],
			dramaMovies: [],
			mainCoverUrl: '',
			showModal: false,
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
			mainCoverUrl: this.getImageUrl(NOW_PLAYING_MOVIES.results[0]),
		})
	}

	// fetchNowPlayingMovies(){
	// 	fetch('https://localhost:3001/api/movies/now_playing')
	// 	.then(response => response.json())
	// }

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
					<MainInfo mainMovieInfo={this.state.nowPlayingMovies[0]}/>
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