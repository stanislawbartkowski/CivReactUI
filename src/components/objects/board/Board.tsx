import React, { ReactElement, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';


import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import PlayerControl from './PlayerControl';

import TopStatusMap from './TopStatusMap';
import GameMap from './GameMap'
import GameResources from './GameResources'

import * as I from '../../../js/I'

const Board: FunctionComponent<I.TCivilizationProps> = (props) => {

    const board = props.data;
    const map = board.map;
    const game = board.game;
    const you = board.you
    const main: ReactElement = <Box display="flex" >
        <GameMap data={map} />
        <GameResources data={board} />
    </Box>
    const leftmenu = <PlayerControl data={you} />
    const topmenu: ReactElement = <TopStatusMap data={game} />
    return (
        <ResponsiveDrawer main={main} leftmenu={leftmenu} toplabel={topmenu} />
    );
}

export default Board;