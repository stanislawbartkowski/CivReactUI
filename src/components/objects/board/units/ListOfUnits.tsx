import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import UnitArmed from './UnitArmed'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

const ListOfUnits: FunctionComponent<I.TCivilizationProps> = (props) => {

    const units = props.data
    const list: Array<any> = units.list
    const strength: Array<any> = units.units

    return <Grid container direction="row" spacing={0}>
        {C.range(list.length).map(i => (
            <Paper><UnitArmed data={list[i]} level={C.getStrength(strength,list[i].name)}></UnitArmed></Paper>
        ))} </Grid>
}

export default ListOfUnits;