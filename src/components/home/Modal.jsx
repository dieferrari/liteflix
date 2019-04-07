import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './Modal.scss'

const styles = theme => ({
    dialog: {
        padding: "0px !important",
    },
});

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie_name: "",
            category: "Seleccionar Categoría",
            category_list: ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Documentales"],
            isLoading: false,
            loadingPercentage: 0,
            loadingError: false,
            submitButtonIsActive: false,
            uploadedSuccessfully: false,
        }
    }

    inputChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    uploadHandler() {
        const self = this;
        this.setState({ isLoading: true})

        let interval = setInterval( function() { // simulating loader progress
            if (self.state.loadingPercentage < 100 && self.state.loadingPercentage > 80) self.setState({ loadingPercentage: self.state.loadingPercentage + 100 - self.state.loadingPercentage, submitButtonIsActive: true })
            if (self.state.loadingPercentage < 100) {
                if ( Math.floor(Math.random() * 20) + 1 === 1) { // 0.05 probability of error on every loader progress
                    clearInterval(interval)
                    self.setState({ 
                        loadingError: true,
                        loadingPercentage: 100,
                    })
                } else self.setState({ loadingPercentage: self.state.loadingPercentage + Math.floor(Math.random() * 20) + 1, interval })
            }
            else clearInterval(interval)
        }, 600)
    }

    cancelActionHandler() {
        clearInterval(this.state.interval)
        this.setState({
            isLoading: false,
            loadingPercentage: 0,
            submitButtonIsActive: false,
        })
    }

    tryAgainActionHandler() {
        this.setState({
            loadingError: false,
            loadingPercentage: 0,
        })
        this.uploadHandler()
    }

    submitHandler() {
        if (this.state.submitButtonIsActive) this.setState({ uploadedSuccessfully: true })
    }

    resetAndCloseModalHandler() {
        this.props.closeModalHandler()
        this.resetModal()
    }

    resetModal() {
        this.setState({
            movie_name: "",
            category: "Seleccionar Categoría",
            isLoading: false,
            loadingPercentage: 0,
            loadingError: false,
            submitButtonIsActive: false,
            uploadedSuccessfully: false,
        })
    }

    render() {
        const { showModal, closeModalHandler, classes } = this.props
        return (
            <Dialog 
                open={showModal}	
                onClose={closeModalHandler}
                maxWidth="lg"
            >
                <DialogContent
                    classes={{
                        root: classes.dialog
                    }}
                >   
                    { this.state.uploadedSuccessfully ?
                        <div className="modal-success-container">
                            <img  onClick={this.resetAndCloseModalHandler.bind(this)} className="modal-close-icon" src="../../../assets/x_icon.svg" alt="Close icon"/>
                            <img src="../../../assets/liteflix_logo.svg" alt="Liteflix logo"/> 
                            <h3>Felicitaciones!</h3>
                            <p><span>{this.state.movie_name}</span> fue correctamente subido a la categoría <span>{this.state.category_list[this.state.category]}</span></p>

                            <button onClick={this.resetAndCloseModalHandler.bind(this)}>Cerrar</button>
                        </div>

                        : <div className="modal-content-container">
                            <img onClick={this.resetAndCloseModalHandler.bind(this)} className="modal-close-icon" src="../../../assets/x_icon.svg" alt="Close icon"/>
                            { this.state.isLoading || this.state.loadingError ? 
                                <div className="modal-loading-container">
                                    { this.state.loadingError ? <div className="modal-loading-status-error"><span>Error!</span> no se pudo cargar la película</div> 
                                        : this.state.loadingPercentage < 100 ? 
                                            <div className="modal-loading-status">Cargando {this.state.loadingPercentage}%</div> 
                                            :  <div className="modal-loading-status modal-loading-status-completed">{this.state.loadingPercentage}% Cargado</div> 
                                    }
                                    <div className="modal-loading-bar-container">
                                        <div className={ this.state.loadingError ? "modal-loading-bar modal-loading-bar-error" : "modal-loading-bar"} style={{ width: `${this.state.loadingPercentage}%` }}></div>
                                    </div>

                                    { this.state.loadingError ? <div className="modal-loading-action" onClick={this.tryAgainActionHandler.bind(this)}>Reintentar</div>
                                        : <div className="modal-loading-action" onClick={this.cancelActionHandler.bind(this)}>Cancelar</div>
                                    }

                                </div>
                                : <div className="modal-file-drop" onClick={this.uploadHandler.bind(this)}><img src="../../../assets/clip_icon.svg" alt="Attachment icon"/><span>Agregar archivo </span> o arrastrarlo y soltarlo aquí</div> 
                            }
                            
                            <div className="modal-form">
                                <label>
                                    Nombre de la película
                                    <input 
                                        type="text" 
                                        name="movie_name" 
                                        placeholder="Escribir nombre" 
                                        value={this.state.movie_name} 
                                        onChange={this.inputChangeHandler.bind(this)}
                                        className={ this.state.movie_name !== "" ? "modal-input-filled" : "" }
                                    />
                                </label>
                                <label
                                    className={ this.state.category !== "Seleccionar Categoría" ? "modal-label-selected modal-label-select" : "modal-label-select" }
                                >
                                    Categoría
                                    <select
                                        name="category" 
                                        value={this.state.category} 
                                        onChange={this.inputChangeHandler.bind(this)}
                                        className={ this.state.category !== "Seleccionar Categoría" ? "modal-select-selected" : ""}
                                    >
                                        <option disabled defaultValue>Seleccionar Categoría</option>
                                        { this.state.category_list.length > 0 ? this.state.category_list.map( (category, index) => (
                                            <option value={index} key={category}>{this.state.category_list[index]}</option>
                                            )) 
                                        : null }
                                        
                                    </select>

                                </label>
                            </div>

                            <button 
                                className={this.state.submitButtonIsActive ? "modal-submit-button modal-submit-button-success" : "modal-submit-button"} 
                                onClick={this.submitHandler.bind(this)}
                                >Subir Película
                            </button>

                        </div>
                    }                    
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(Modal)