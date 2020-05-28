import React, { ReactElement, FunctionComponent, Children } from 'react';

import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import Soldier from '../../../images/Soldier'
import ListOfUnits from './ListOfUnits'
import InfoPane from '../../../../UI/InfoPane'

const defaultIProps = {
    style: { fontSize: 28 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        }
    })
);

const UnitStatus: FunctionComponent<I.TCivilizationProps> = (props) => {

    const units = props.data.units
    const unitsno = units.length;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (props: any) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <React.Fragment><Paper onClick={handleClickOpen} className={classes.root}><Badge badgeContent={unitsno} color="primary">
        <Soldier props={defaultIProps} />
    </Badge>
    </Paper>
        <InfoPane open={open} onClose={handleClose}>
            <ListOfUnits data={units} />
        </InfoPane> 
    </React.Fragment>

}

export default UnitStatus;