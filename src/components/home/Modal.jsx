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
            isLoading: false
        }
    }

    inputChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler() {

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
                    { this.state.isLoading ? <div className="modal-loading-container"></div>
                        : <div className="modal-file-drop"><img src="../../../assets/clip_icon.svg" alt="Attachment icon"/><span>Agregar archivo </span> o arrastrarlo y soltarlo aquí</div> }
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
                        <button className="modal-submit-button" onClick={this.submitHandler}>Subir Película</button>

                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(Modal)