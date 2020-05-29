import React, { ReactElement, FunctionComponent, Children } from 'react';

import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import Soldier from '../../../images/Soldier'
import ListOfUnits from './ListOfUnits'
import InfoPane from '../../../../UI/InfoPane'
import getUnit from './getUnit'

interface IArmyStatus {
    units: Array<I.ArmyBranchT>
    list: Array<any>
    armystrength: Array<any>
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

const ArmyStatus: FunctionComponent<I.ArmyBranchT> = (props) => {
    const u: I.ArmyBranchT = props
    const Res: FunctionComponent<I.TSvgComponent> = getUnit(u.name)
    const classes = useStyles();
    return <Paper component="span" className={classes.root}>
        <Badge className={classes.badge} badgeContent={u.num} color="primary">
            <Res props={defaultIProps} />
        </Badge>
    </Paper>
}


const UnitStatus: FunctionComponent<IArmyStatus> = (props) => {

    const units: Array<I.ArmyBranchT> = props.units
    const list: Array<any> = props.list
    const unitsno: number = list.length
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (props: any) => {
        if (unitsno > 0) setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <React.Fragment>

        <Box onClick={handleClickOpen}>
            {C.range(units.length).map(i => (
                <ArmyStatus key={i} {...units[i]} />
            ))}
        </Box>

        <InfoPane open={open} onClose={handleClose}>
            <ListOfUnits units={list} strength={props.armystrength} />
        </InfoPane>

    </React.Fragment>

}

export default UnitStatus;