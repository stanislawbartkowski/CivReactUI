import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import * as I from '../../../js/I'

import CivName from './playercontrols/CivName'
import Governance from './playercontrols/Governance'
import PlayerStatus from './PlayerStatus'
import UnitStatus from './units/UnitsStatus'
import ResourcePanel from './resources/ResourcePane'
import CommandPane from './commandpane/CommandPane'
import CommandControl from './command/CommandControl'

const PlayerControl: FunctionComponent<I.TCivilizationProps> = (props: any) => {
    const you = props.data;

    const units: Array<I.NameNumT> = [{ name: "Soldier", num: you.units.list.length }]
    const strength = you.units.units

    return <Grid container direction="column">
        <Grid container direction="row">
            <CivName data={you} />
            <Governance data={you} />
        </Grid>
        <PlayerStatus data={you} />
        <UnitStatus units={units} list={you.units.list} armystrength={strength} />
        <ResourcePanel resources={you.resources} hutvillages={you.hutvillages} />
        <CommandControl />
        <CommandPane data={you.commands} />
    </Grid>
}

export default PlayerControl;