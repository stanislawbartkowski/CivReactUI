import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import UnitArmed from './UnitArmed'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

const ListOfUnits: FunctionComponent<I.TCivilizationProps> = (props) => {

    const list: Array<any> = props.data

    return <Grid container direction="row" spacing={0}>
        {C.range(list.length).map(i => (
            <Paper><UnitArmed data={list[i]} level={0}></UnitArmed></Paper>
        ))} </Grid>

}

export default ListOfUnits;