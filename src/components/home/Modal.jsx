import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


const styles = theme => ({

});

class Modal extends Component {


    render() {
        const { showModal, closeModalHandler } = this.props
        return (
            <Dialog 
                open={showModal}	
                onClose={closeModalHandler}
            >
                <DialogContent>
                    HOLIS
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(Modal)