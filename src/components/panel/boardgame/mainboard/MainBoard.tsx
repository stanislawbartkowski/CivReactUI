import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GameMap from '../../../objects/board/GameMap'

import * as C from '../../../../js/C'
import * as I from '../../../../js/I'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

const MainBoard: FunctionComponent = (board: any) => {

  const current = useSelector((state: any) => state.gameboard.current);
  const mboard = useSelector((state: any) => state.gameboard.board);
  const token = useSelector((state: any) => state.gameboard.token);

  C.trace('MainBoard', current + " " + mboard + " " + token);

  const classes = useStyles();

  const noboard = (mboard == null) || (token != C.getToken());

  if (noboard) return null;
  else {
    const map = mboard.board.map;
    return (
      <GameMap data={map}></GameMap>
    );
  }
}

export default MainBoard;