import React, { FunctionComponent } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

import Infantry from '../../../images/Infantry'
import Mounted from '../../../images/Mounted'
import Artillery from '../../../images/Artillery'
import Aircraft from '../../../images/Aircraft'

const defaultIProps = {
    style: { fontSize: 48 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        number: {
           fontSize : 9,
           color : "black",
           fontWeight : 700,
           lineHeight: "normal",
        },
        paper: {
            padding: 1,
            textAlign: 'center',
            margin: 5, 
            width: 60,
        }
    }),
);

const Unit: FunctionComponent<I.TCivilizationProps> = (props) => {

    const classes = useStyles();
    const unit = props.data
    const name = unit.name
    const list = unit.strength


    let Res: FunctionComponent<I.TSvgComponent> = Infantry;
    switch (name) {
        case "Artillery": Res = Artillery; break;
        case "Aircraft": Res = Aircraft; break;
        case "Mounted": Res = Mounted; break;
    }
    const unitimage = <Res props={defaultIProps} />

    const strength = <Grid item direction="column" spacing={4}>
        {C.range(list.length).map(i => (
            <Typography className={classes.number}>{list[i]}</Typography>
        ))} </Grid>


    return <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
            {strength}
            {unitimage}
        </Grid>
    </Paper>


}

export default Unit;