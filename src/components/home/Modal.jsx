import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './Modal.scss'

const styles = theme => ({
    dialog: {
        padding: "0px 35px 27px 35px",
    },
});

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie_name: "",
            category: "Seleccionar Categoría",
            category_lists: {
                labels: ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Documentales"],
                values: ["accion", "aventuras", "ciencia_ficcion", "comedia", "documentales"],
            },
            isLoading: false,
            loadingPercentage: 0,
            loadingError: false,
            submitButtonIsActive: false,
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
        console.log("SUBMIT!")
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
                                { this.state.category_lists.values.length > 0 ? this.state.category_lists.values.map( (category_value, index) => (
                                    <option value={category_value} key={category_value}>{this.state.category_lists.labels[index]}</option>
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

                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(Modal)