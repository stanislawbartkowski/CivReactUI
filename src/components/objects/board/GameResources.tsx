import React, { ReactElement, FunctionComponent } from 'react';

import Box from '@material-ui/core/Box';
import * as I from '../../../js/I'

import GameUnits from './units/GameUnits'
import ResourcePane from './resources/ResourcePane'

const GameResources: FunctionComponent<I.TCivilizationProps> = (props: any) => {

    const board = props.data;
    const resources = board.resources
    const hvused = board.hutvillagesused

    return <Box>
        <GameUnits data={board} />
        <ResourcePane resources={resources} hutvillages={hvused} />
    </Box>
}


export default GameResources;
