import React, { FunctionComponent } from 'react';

import Badge from '@material-ui/core/Badge';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import Soldier from '../../../images/Soldier'

const defaultIProps = {
    style: { fontSize: 28 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const UnitStatus: FunctionComponent<I.TCivilizationProps> = (props) => {

    const units = props.data.units.list
    const unitsno = units.length;
    const classes = useStyles();

    return <div className={classes.root}><Badge badgeContent={unitsno} color="primary">
        <Soldier props={defaultIProps} />
    </Badge>
    </div>

}

export default UnitStatus;