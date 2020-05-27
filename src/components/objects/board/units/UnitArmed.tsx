import React, { FunctionComponent } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

import UnitLevel0 from '../../../images/UnitLevel0'
import UnitLevel1 from '../../../images/UnitLevel1'
import UnitLevel2 from '../../../images/UnitLevel2'
import UnitLevelStar from '../../../images/UnitLevelStar'
import Unit from './Unit'


interface IPlayerInfoProps extends I.TCivilizationProps {
    level: number
}


const defaultIProps = {
    style: { fontSize: 10 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderBottom: "1px outset blue",
            paddingLeft: 10,
            paddingRight: 10,
            lineHeight: "normal"
        },
        number: {
            paddingTop : 3,
            fontSize: 12,
            color: "black",
            fontWeight: 500,
            textAlign: "right",
            marginLeft: "auto",

        },
    }),
);

const UnitArmed: FunctionComponent<IPlayerInfoProps> = (props) => {

    const classes = useStyles();
    const unit = props.data
    const level: number = props.level
    const strength: number = unit.strength[level]


    let Res: FunctionComponent<I.TSvgComponent> = UnitLevel0;
    switch (level) {
        case 1: Res = UnitLevel1; break;
        case 2: Res = UnitLevel2; break;
        case 3: Res = UnitLevelStar; break;
    }

    const Upper = <Grid container className={classes.root}><Grid><Res props={defaultIProps} /></Grid> <Grid className={classes.number}>{strength}</Grid></Grid>

    return <Grid >
        {Upper}
        <Unit data={unit} />
    </Grid>

}

export default UnitArmed;