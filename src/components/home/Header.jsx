import React, { Component } from 'react';
import './Header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            showDropdown: false,
        }
    }

    handleUserDropdown(event) {
        let dropdownNextState = !this.state.showDropdown
        this.setState({ showDropdown: dropdownNextState})
    }

    render() {
        return (
            <div className="header-container">
                <div>
                    <img className="header-logo" src="../../../assets/liteflix_logo.svg" alt="Liteflix logo"/> 
                    <a href="/">Inicio</a>
                    <a href="/series">Series</a>
                    <a href="/peliculas">Películas</a>
                    <a href="/agregados-recientemente">Agregados reciéntemente</a>
                    <a href="/mi-lista">Mi Lista</a>
                    <button className="header-add-button" onClick={this.props.openModalHandler}>
                        <img className="header-plus-icon" src="../../../assets/plus_icon.svg" alt="Add icon"/>
                        <span>Agregar película</span>
                    </button>
                </div>
                <div className="header-secondary-container">
                    <div className="header-search-section">
                    <form>
                        <label>
                        <img src="../../../assets/lens_icon.svg" alt="Lens icon"/> 
                        <input type="text" placeholder="Títulos, géneros, personas" value={this.state.searchValue} readOnly/>
                        </label>
                    </form>
                    </div>
                    <a href="/niños">Niños</a>
                    <button>
                        <img src="../../../assets/bell_icon.svg" alt="Notifications icon"/> 
                    </button>
                    <div className="header-user-container">
                        <img src="../../../assets/user_icon_1.svg" alt="User icon"/>
                        <button onClick={this.handleUserDropdown.bind(this)}>
                            <img src="../../../assets/header_arrow_icon.svg" alt="Arrow icon"/> 
                        </button>
                    </div>
                </div>
                { this.state.showDropdown ? <img className="header-user-dropdown" src="../../../assets/dropdown.svg" alt="User Dropdown menu"/> : null }
            </div>
        )
    }
}

export default Header