import React, { ReactElement } from 'react';

import { useSelector, ReactReduxContext } from "react-redux";
import Board from '../../objects/board/Board'

import * as C from '../../../js/C'

const BoardGame: React.FC = () => {

  const current = useSelector((state: any) => state.gameboard.current);
  const mboard = useSelector((state: any) => state.gameboard.board);
  const token = useSelector((state: any) => state.gameboard.token);

  C.trace('MainBoard', current + " " + mboard + " " + token);

  const noboard = (mboard == null) || (token != C.getToken());

  if (noboard) return null;
  else return <Board data={mboard} />
}

export default BoardGame;