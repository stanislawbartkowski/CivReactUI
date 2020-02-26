import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import * as C from '../../../../js/C'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const MainBoard: FunctionComponent = () => {

    const current = useSelector((state: any) => state.gameboard.current);
    const board = useSelector((state: any) => state.gameboard.board);

    C.trace('MainBoard', current + " " + board);

    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
    };

    return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container>
                <Grid item>
                  <FormLabel>spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    value={spacing.toString()}
                    onChange={handleChange}
                    row
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      );
}

export default MainBoard;