import React, { ReactElement, FunctionComponent, Children } from 'react';

import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles, createStyles, Theme } from '@mui/material/styles';

import * as I from '../js/I'
import * as C from '../js/C'
import InfoPane from './InfoPane'

interface IPresePane {
    resou: Array<I.NameNumT>,
    openpopup: boolean,
    getI: I.getIT
    PopUp: FunctionComponent
}

interface IResoStatus {
    reso: I.NameNumT,
    getI: I.getIT
}

const defaultIProps = {
    style: { fontSize: 28 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        badge: {
            verticalAlign: "bottom"
        }
    })
);

const ResStatus: FunctionComponent<IResoStatus> = (props) => {
    const u: I.NameNumT = props.reso
    const getI: I.getIT = props.getI
    const Res: FunctionComponent<I.TSvgComponent> = getI(u.name)
    const classes = useStyles();
    return <Paper component="span" className={classes.root}>
        <Badge className={classes.badge} badgeContent={u.num} color="primary">
            <Res props={defaultIProps} />
        </Badge>
    </Paper>
}


const PresePane: FunctionComponent<IPresePane> = (props) => {

    const units: Array<I.NameNumT> = props.resou
    const [open, setOpen] = React.useState(false);
    const openpopup : boolean = props.openpopup

    const handleClickOpen = (props: any) => {
        if (openpopup) setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <React.Fragment>

        <Box onClick={handleClickOpen}>
            {C.range(units.length).map(i => (
                <ResStatus key={i} reso={units[i]} getI={props.getI} />
            ))}
        </Box>

        <InfoPane open={open} onClose={handleClose}>
            <props.PopUp />
        </InfoPane>

    </React.Fragment>
}

export default PresePane;