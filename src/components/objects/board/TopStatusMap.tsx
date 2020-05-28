import React, { FunctionComponent } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CivName from './playercontrols/CivName'

import * as I from '../../../js/I'
import civstring from '../../../localize/locale';

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
    titles : {
      margin : 10,
      borderLeft : 5,
    }
  }),
);

const TopStatusMap : FunctionComponent<I.TCivilizationProps> = (props: any) => {

    const classes = useStyles();
    const game = props.data;

    return <Grid className={classes.root} container spacing={3}>
        <Typography className={classes.titles}>{civstring('activeciv')}</Typography>
        <CivName data={{"civ" : game.active}}></CivName>
        <Typography className={classes.titles}>{civstring('gamephase')}</Typography>
        <Paper className={classes.paper}>{game.phase}</Paper>
        <Typography className={classes.titles}>{civstring('roundno')}</Typography>
        <Paper className={classes.paper}>{game.roundno}</Paper>
    </Grid>

}

export default TopStatusMap;