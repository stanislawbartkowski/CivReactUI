import React, { FunctionComponent } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as I from '../../../js/I'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 5,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin : 5
    },
  }),
);

const TopStatusMap : FunctionComponent<I.TCivilizationProps> = (data: any) => {

    const classes = useStyles();
    const game = data.data


    return <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper}>{game.active}</Paper>
        <Paper className={classes.paper}>{game.phase}</Paper>
        <Paper className={classes.paper}>{game.roundno}</Paper>
    </Grid>

}

export default TopStatusMap;