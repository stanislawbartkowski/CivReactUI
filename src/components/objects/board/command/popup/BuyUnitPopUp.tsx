import React, { FunctionComponent } from 'react';
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
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import * as actions from '../../../../../store/popupaction/actions'
import * as bactions from '../../../../../store/blockaction/actions'
import * as cactions from '../../../../../store/commandactions/actions'
import * as comm from '../../../../../js/comm'
import * as I from '../../../../../js/I'
import * as C from '../../../../../js/C'
import getUnit from '../../units/getUnit'
import civstring from '../../../../../localize/locale'
import Square from '../../square/Square'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            paddingRight: 25
        }
    },

    ),
);



const PaperComponent: FunctionComponent = (props: PaperProps) => {
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

const defaultIProps = {
    style: { fontSize: 50 },
}


const BuyUnitPopUp: FunctionComponent = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const current: string = useSelector((state: any) => state.popup.current);
    const command: string = useSelector((state: any) => state.popup.command);
    const itemized: Array<any> = useSelector((state: any) => state.popup.itemized);
    const map: Array<any> = useSelector((state: any) => state.popup.map);
    const clickedcurrent: string = useSelector((state: any) => state.command.current);
    const clickedP: I.Pos = useSelector((state: any) => state.command.square);
    let disabledbutton = true


    const open: boolean = current == actions.TRIGGER_POPUP && (
        command == comm.BUYARTILLERY || command == comm.BUYAIRCRAFT || command == comm.BUYINFANTRY || command == comm.BUYMOUNTED)

    let UnitToBuy = null
    let title = <div></div>
    let buttonbuy = ""
    let SquareF = <Typography>{civstring("clickcity")}</Typography>

    if (open) {
        const Res: FunctionComponent<I.TSvgComponent> = getUnit(command)
        UnitToBuy = <Res props={defaultIProps} />
        title = civstring("youareabouttobuyunit")
        buttonbuy = C.commandText(command)
        if (clickedcurrent == cactions.SQUARECLICKED) {
            const square = C.getSquare(map, clickedP)
            SquareF = <Square data={square}></Square>
            disabledbutton = false
        }
    }

    const handleClose = () => {
        dispatch(actions.closepopup())
    };

    return (
        <StyledDialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
            disableBackdropClick
            hideBackdrop
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <Grid container direction="row" >
                    <Grid item className={classes.item}>{UnitToBuy} </Grid>
                    <Grid item>{SquareF} </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" disabled={disabledbutton} >
                    {buttonbuy}
                </Button>
                <Button autoFocus onClick={handleClose} color="primary">
                    {civstring("cancel")}
                </Button>
            </DialogActions>
        </StyledDialog>
    );
}

export default BuyUnitPopUp