import React, { ReactElement }  from 'react';

import { useSelector, ReactReduxContext } from "react-redux";

import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import PlayerControl from '../../objects/board/PlayerControl';

import TopStatusMap from '../../objects/board/TopStatusMap';
import GameMap from '../../objects/board/GameMap'


import * as C from '../../../js/C'



const BoardGame: React.FC = () => {

  const current = useSelector((state: any) => state.gameboard.current);
  const mboard: any = useSelector((state: any) => state.gameboard.board);
  const token = useSelector((state: any) => state.gameboard.token);

  C.trace('MainBoard', current + " " + mboard + " " + token);

  const noboard = (mboard == null) || (token != C.getToken());

  if (noboard) return null;
  else {
    const map = mboard.board.map;
    const game = mboard.board.game;
    const main : ReactElement = <GameMap data={map} />
    const leftmenu : ReactElement = <PlayerControl />
    const topmenu : ReactElement = <TopStatusMap data={game} />
    return (
      <ResponsiveDrawer main={main} leftmenu={leftmenu} toplabel={topmenu} />
    );
  }
}

export default BoardGame;