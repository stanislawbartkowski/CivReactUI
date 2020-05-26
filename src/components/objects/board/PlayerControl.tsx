import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import * as I from '../../../js/I'

import CivName from './playercontrols/CivName'
import Governance from './playercontrols/Governance'
import PlayerStatus from './PlayerStatus'
import UnitStatus from './units/UnitsStatus'


const PlayerControl: FunctionComponent<I.TCivilizationProps> = (props: any) => {
    const you = props.data;

    return <Grid container>
        <CivName data={you} />
        <Governance data={you} />
        <PlayerStatus data={you} />
        <UnitStatus data={you} />
    </Grid>
}

export default PlayerControl;