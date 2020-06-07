import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Square from './square/Square'

import * as C from '../../../js/C'
import * as I from '../../../js/I'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        row: {
        }
    }),
);


const GameMap: FunctionComponent<I.TCivilizationPropsHighlight> = (props: any) => {

    const classes = useStyles();

    const map = props.data;
    const dim: I.Pos = C.calculatedim(map);

    return (
        <Box>
            <Grid container direction="column" className={classes.root} spacing={0}>
                {C.range(dim.row).map(i => (
                    <Grid className={classes.row} key={i} container direction="row" spacing={0}>
                        {C.range(dim.col).map(j => (
                            <Square key={i + ":" + j}
                                data={C.getSquare(map, C.gtoB({ "row": i, "col": j }, dim))}
                                highlight={C.onhighlightList(C.gtoB({ "row": i, "col": j }, dim), props.highlight)}
                                pos={C.gtoB({ "row": i, "col": j }, dim)}
                            />
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


export default GameMap;