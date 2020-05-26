import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

const createDynamicMuiTheme = (color: string) => {
    return makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                padding: 5,
                textAlign: 'center',
                color: 'white',
                margin: 5,
                background: color,
                width : 80
            },
        }
        ))
    }


const CivName: FunctionComponent<I.TCivilizationProps> = (props) => {

    const civname: string = props.data.civ
    const color = C.getColor(civname)
    const classes = createDynamicMuiTheme(color)()


    return <Paper className={classes.paper}>{civname}</Paper>

}

export default CivName
