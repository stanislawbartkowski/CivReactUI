import React, { ReactElement, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';


import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import PlayerControl from './PlayerControl';

import TopStatusMap from './TopStatusMap';
import GameMap from './GameMap'
import GameResources from './GameResources'

import * as I from '../../../js/I'
import * as C from '../../../js/C'

const Board: FunctionComponent<I.TCivilizationPropsHighlight> = (props) => {

    const board = props.data;
    const map = C.getMap(board)
    const game = C.getGame(board)
    const you = C.getYou(board)
    const main: ReactElement = <Box display="flex" >
        <GameMap data={map} highlight={props.highlight} />
        <GameResources data={board} />
    </Box>
    const leftmenu = <PlayerControl data={you} game={game} map={map} />
    const topmenu: ReactElement = <TopStatusMap data={game} />
    return (
        <ResponsiveDrawer main={main} leftmenu={leftmenu} toplabel={topmenu} />
    );
}

export default Board;