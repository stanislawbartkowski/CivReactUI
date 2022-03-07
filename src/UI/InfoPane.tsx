import React, { ReactElement, FunctionComponent, Children } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { makeStyles, createStyles, Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 1,
            margin: 2
        }
    })
);


interface IInfoPaneProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
}

function InfoPane(props: IInfoPaneProps) {
    const classes = useStyles();
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return <Dialog className={classes.root} onClose={handleClose} open={open} >
        <DialogContent>{props.children} </DialogContent>
    </Dialog>
}

export default InfoPane;