import React, { ReactElement } from 'react';

import { useSelector, ReactReduxContext } from "react-redux";
import Board from '../../objects/board/Board'

import * as C from '../../../js/C'
import * as I from '../../../js/I'
import * as iactions from '../../../store/itemizeaction/actions';

const BoardGame: React.FC = () => {

  const current = useSelector((state: any) => state.gameboard.current);
  const mboard = useSelector((state: any) => state.gameboard.board);
  const token = useSelector((state: any) => state.gameboard.token);

  const itemizecurrent = useSelector((state: any) => state.itemize.current);
  const command = useSelector((state: any) => state.itemize.command);
  const itemized = useSelector((state: any) => state.itemize.itemized);
  const highlight: Array<I.Pos> = itemizecurrent == iactions.ITEMIZE_COMMAND ? C.itemizetoHighlight(command, itemized) : []

  C.trace('BoardGame', current + " " + mboard + " " + token);
  C.trace('BoardGame', "itemize:" + itemizecurrent)
  C.trace('BoardGame', "command:" + command)

  const noboard = (mboard == null) || (token != C.getToken());

  if (noboard) return null;
  else return <Board data={mboard} highlight={highlight} />
}

export default BoardGame;