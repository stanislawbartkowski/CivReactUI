import React, { ReactElement, FunctionComponent } from 'react';

import Box from '@material-ui/core/Box';
import * as I from '../../../js/I'

import GameUnits from './units/GameUnits'
import ResourcePane from './resources/ResourcePane'
import BuildingPane from './buildings/BuildingPane'

const GameResources: FunctionComponent<I.TCivilizationProps> = (props: any) => {

    const board = props.data;
    const resources = board.resources
    const hvused = board.hutvillagesused
    const buildings = board.buildings

    return <Box>
        <GameUnits data={board} />
        <ResourcePane resources={resources} hutvillages={hvused} />
        <BuildingPane data={buildings} />
    </Box>
}


export default GameResources;
