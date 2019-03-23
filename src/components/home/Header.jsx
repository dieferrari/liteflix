import React, { Component } from 'react';
import './Header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    
    render() {
        return (
            <div className="header">
                <img className="header-logo" src="../../../assets/liteflix_logo.svg" alt="Liteflix logo"/> 
                <a href="/">Inicio</a>
                <a href="/series">Series</a>
                <a href="/peliculas">Películas</a>
                <a href="/agregados-recientemente">Agregados reciéntemente</a>
                <a href="/mi-lista">Mi Lista</a>
                <button>
                    <img className="header-plus-icon" src="../../../assets/plus_icon.svg" alt="Plus icon"/>
                    <span>Agregar película</span>
                </button>
            </div>
        )
    }
}

export default Header