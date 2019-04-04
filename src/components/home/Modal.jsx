import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import './Modal.scss'

const styles = theme => ({
    input: {}
});

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie_name:"",
        }
    }

    inputChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const { showModal, closeModalHandler, classes } = this.props
        return (
            <Dialog 
                open={showModal}	
                onClose={closeModalHandler}
                maxWidth="lg"
            >
                <DialogContent>
                    <div className="modal-file-drop"><img src="../../../assets/clip_icon.svg" alt="Attachment icon"/><span>Agregar archivo</span> o arrastrarlo y soltarlo aquí</div>
                    <form action="">
                    
                        <Input
                            
                            name="movie_name"
                            value={this.state.movieName}
                            placeholder="Escribir nombre"
                            className={classes.input}
                            onChange={(this.inputChangeHandler.bind(this))}
                        />


                    </form>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(Modal)