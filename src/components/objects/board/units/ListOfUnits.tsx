import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import UnitArmed from './UnitArmed'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

type ListUnitsT = {
    units: Array<any>,
    strength: Array<any>
}

const ListOfUnits: FunctionComponent<ListUnitsT> = (props) => {

    const list: Array<any> = props.units
    const strength: Array<any> = props.strength

    return <Grid container direction="row" spacing={0}>
        {C.range(list.length).map(i => (
            <Paper><UnitArmed data={list[i]} level={C.getStrength(strength, list[i].name)}></UnitArmed></Paper>
        ))} </Grid>
}

export default ListOfUnits;