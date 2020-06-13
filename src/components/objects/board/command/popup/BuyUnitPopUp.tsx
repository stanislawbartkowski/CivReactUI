import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";


import * as actions from '../../../../../store/popupaction/actions'
import * as comm from '../../../../../js/comm'
import * as I from '../../../../../js/I'


function PaperComponent(props: PaperProps) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const StyledDialog = withStyles({
    root: {
        pointerEvents: "none"
    },
    paper: {
        pointerEvents: "auto"
    }
})((props: any) => <Dialog hideBackdrop {...props} />);


function BuyUnitPopUp() {

    const current: string = useSelector((state: any) => state.popup.current);
    const command: string = useSelector((state: any) => state.popup.command);
    const itemized: Array<any> = useSelector((state: any) => state.popup.itemized);
    const clickedcurrent = useSelector((state: any) => state.command.current);
    const clickedP: I.Pos = useSelector((state: any) => state.command.square);

    const open: boolean = current == actions.TRIGGER_POPUP && command == comm.BUYARTILLERY

    const handleClose = () => {
    };

    return (
        <div>
            <StyledDialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                disableBackdropClick
                hideBackdrop
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Subscribe
        </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </StyledDialog>
        </div>
    );
}

export default BuyUnitPopUp