import React, { Component } from 'react';
import './Footer.scss';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <div className="footer-container">
                <div className="footer-social-container">
                    <img src="../../../assets/facebook_icon.svg" alt="Facebook button"/>
                    <img src="../../../assets/instagram_icon.svg" alt="Instagram button"/> 
                    <img src="../../../assets/twitter_icon.svg" alt="Twitter button"/> 
                    <img src="../../../assets/youtube_icon.svg" alt="Youtube button"/> 
                </div>
                <div className="footer-sections-container">
                    <div className="footer-section">
                        <a href="/todos-los-titulos">Todos los títulos</a>
                        <a href="/prensa">Prensa</a>
                        <a href="/confidencialidad">Confidencialidad</a>
                        <a href="/contacto">Contacto</a>
                    </div>
                    <div className="footer-section">
                        <a href="/cancelar-suscripcion">Cancelar Suscripción</a>
                        <a href="/inversores">Inversores</a>
                        <a href="/legales">Legales</a>
                    </div>
                    <div className="footer-section">
                        <a href="/ayuda">Ayuda</a>
                        <a href="/recursos-humanos">RRHH</a>
                        <a href="/cookies">Cookies</a>
                    </div>
                </div>
                <div className="footer-copyright">© 1997-2018 Liteflix, Inc.</div>
            </div>
        )
    }
}

export default Footer