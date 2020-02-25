import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import { civNone } from '../../../../../../store/civclicked/actions';
import CivilizationName from '../../../../../objects/civilization/civilizationname/CivilizationName';
import civstring from '../../../../../../localize/locale';


import * as C from '../../../../../../js/C';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        CivName: {
            float: "left",
            paddingRight : 15
        }
    })
);

const NewGameCiv: FunctionComponent = () => {
    const current = useSelector((state: any) => state.clickciv.current);
    const civ = useSelector((state: any) => state.clickciv.civ);
    const open = useSelector((state: any) => state.clickciv.open);
    const dispatch = useDispatch();
    const classes = useStyles();

    C.trace('NewGameCiv', current + " " + civ);
    C.trace('NewGameCiv', "open:" + open);

    const handleClose = () => {
        dispatch(civNone());
    };

    if (civ == null) {
        return null;
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{civstring("titlestarttraining")}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <span className={classes.CivName} > <CivilizationName data={civ} /> </span>
                    <span>{civstring("doyouwanttostarttrainig", civ)}</span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    {civstring("ok")}
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    {civstring("cancel")}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewGameCiv;
