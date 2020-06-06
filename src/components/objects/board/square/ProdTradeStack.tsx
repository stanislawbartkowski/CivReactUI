import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import * as I from '../../../../js/I';
import * as C from '../../../../js/C';

const defaultTProps = {
    style: { fontSize: 10 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            height: "10px"
        }
    },

    ),
);

const ProdTradeStack: FunctionComponent<I.ITradeProd> = (props) => {
    const num = props.num
    const classes = useStyles();
    const TradeProd: FunctionComponent<I.TSvgComponent> = props.tradeprod
    return <Grid direction="column" className={props.className} >
        {C.range(num).map(i => (
            <Grid key={i} item xs={5} className={classes.item}><TradeProd props={defaultTProps} /></Grid>
        ))} </Grid>
}

export default ProdTradeStack