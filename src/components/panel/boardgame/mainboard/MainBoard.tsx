import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Square from '../../../objects/board/Square'

import * as C from '../../../../js/C'
import * as I from '../../../../js/I'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

const MainBoard: FunctionComponent = () => {

  const current = useSelector((state: any) => state.gameboard.current);
  const mboard = useSelector((state: any) => state.gameboard.board);
  const token = useSelector((state: any) => state.gameboard.token);

  C.trace('MainBoard', current + " " + mboard + " " + token);

  const classes = useStyles();

  const noboard = (mboard == null) || (token != C.getToken());

  if (noboard) return null;
  else {
    const board = mboard.board;
    const dim: I.Pos = C.calculatedim(board.map);

    return (
      <Grid container className={classes.root} spacing={0}>
        {C.range(dim.row).map(i => (
          <Grid container direction="row" spacing={0}>
            {C.range(dim.col).map(j => (
              <Square data={"i=" + i + " j=" + j} />
            ))}
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default MainBoard;