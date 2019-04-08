import React, { PureComponent } from 'react';
import './Carousel.scss';

class Carousel extends PureComponent {

    render() {
        const { sectionTitle, data, liteflixPopular } = this.props;
        const moviesImgUrl = [];
        data.forEach( movie => {
            moviesImgUrl.push(this.props.getImageUrl(movie, "poster"))
        })
        
        return (
            <div>
                <h4 className={ liteflixPopular ? "liteflix-popular-title": "liteflix-popular-title"}>{sectionTitle}</h4>
            <div className="carousel-container">
                

                <div className="row">
                    <div className={ liteflixPopular ? "row-inner row-inner-big" : "row-inner" }>

                        { data.length ?
                             
                            data.map( (movie, index) => (
                                <div className={ liteflixPopular ? "tile tile-big" : "tile" } key={movie.id}>
                                    <div className="tile-media">
                                        <img className={ liteflixPopular ? "tile-img tile-img-big" : "tile-img" } src={moviesImgUrl[index]} alt="" />
                                    </div>
                                    <div className="tile-details">
                                        <div className={ liteflixPopular ? "tile-description tile-description-big" : "tile-description" }>
                                            <img className="tile-play-icon" src="../../../assets/play_circle_icon.svg" alt="Play icon" />
                                            <div className="tile-description-title">{movie.title}</div>
                                            <div>98% de coincidencia
                                                <div className="tile-adult-badge">+16</div>
                                                <div>1h 30 min</div>
                                            </div> 
                                            <div>Suspenso</div>          
                                        </div>
                                        <div className={ liteflixPopular ? "tile-description-interactions tile-description-interactions-big": "tile-description-interactions" }>
                                            <img src="../../../assets/like_icon.svg" alt="Like icon" />
                                            <img src="../../../assets/plus_circle_icon.svg" alt="Add icon" />
                                        </div>
                                        <img className={ liteflixPopular ? "tile-arrow-down tile-arrow-down-big" : "tile-arrow-down" } src="../../../assets/carousel_arrow_icon.svg" alt="Arrow icon"/>
                                        
                                    </div>
                                </div>    
                            ))
                             
                            : null  
                        }
                        
                    </div>
                </div>

            </div>
            </div>
        )
    }
}

export default Carousel