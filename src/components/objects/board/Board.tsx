import React, { ReactElement, FunctionComponent } from 'react';

import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import PlayerControl from './PlayerControl';

import TopStatusMap from './TopStatusMap';
import GameMap from './GameMap'

import * as I from '../../../js/I'


const leftmenufun : FunctionComponent<I.TCivilizationProps> = (props) => {

    return <div>AAAA</div>
}

const Board: FunctionComponent<I.TCivilizationProps> = (props) => {

//    const board = data.data.board;
    const board = props.data;
    const map = board.map;
    const game = board.game;
    const you = board.you
    const main: ReactElement = <GameMap data={map} />
    const leftmenu = <PlayerControl data={you} />
    const topmenu: ReactElement = <TopStatusMap data={game} />
    return (
        <ResponsiveDrawer main={main} leftmenu={leftmenu} toplabel={topmenu} />
    );
}

export default Board;