import React, { FunctionComponent } from 'react';

import { useSelector } from "react-redux";



import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import PlayerControl from './playercontrol/PlayerControl';

import MainBoard from './mainboard/MainBoard';
import TopStatus from './topstatus/TopStatus';

import * as C from '../../../js/C'


const BoardGame: React.FC = () => {

  const current = useSelector((state: any) => state.gameboard.current);
  const mboard: any = useSelector((state: any) => state.gameboard.board);
  const token = useSelector((state: any) => state.gameboard.token);

  C.trace('MainBoard', current + " " + mboard + " " + token);


  const noboard = (mboard == null) || (token != C.getToken());

  if (noboard) return null;
  else {

    return (
      <ResponsiveDrawer main={MainBoard} leftmenu={PlayerControl} toplabel={TopStatus} />
    );
  }
}

export default BoardGame;