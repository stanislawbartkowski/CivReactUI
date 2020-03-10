import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Square from '../../../objects/board/Square'

import * as C from '../../../../js/C'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

const MainBoard: FunctionComponent = () => {

    const current = useSelector((state: any) => state.gameboard.current);
    const board = useSelector((state: any) => state.gameboard.board);

    C.trace('MainBoard', current + " " + board);

    const classes = useStyles();
  
    return (
        <Grid container className={classes.root} spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                      <Square data="text"/>
                    ))}
        </Grid>
      );
}

export default MainBoard;