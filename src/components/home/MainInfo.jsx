import React, { PureComponent } from 'react';
import './MainInfo.scss';


class MainInfo extends PureComponent {
    
    render() {
        const original_title = this.props.mainMovieInfo && this.props.mainMovieInfo.original_title 
        const overview = this.props.mainMovieInfo && this.props.mainMovieInfo.overview
        return (
            <div className="main-info">
                <h3>ORIGINAL DE <strong>LITEFLIX</strong></h3>
                <h1>{original_title}</h1>
                <div className="main-buttons-container">
                    <button>
                        <img src="../../../assets/play_icon.svg" alt="Play icon"/>
                        <span>Reproducir</span>
                    </button>
                    <button>
                        <img src="../../../assets/plus_icon.svg" alt="Plus icon"/>
                        <span>Mi Lista</span>
                    </button>
                </div>
                <p><strong>Ver temporada 1</strong><br/>{overview}</p>
            
            </div>
        )
    }
}

export default MainInfo