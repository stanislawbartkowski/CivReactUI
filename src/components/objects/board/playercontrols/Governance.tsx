import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                padding: 5,
                textAlign: 'center',
                margin: 5,
            },
        }
        ))
    
    


const Governance: FunctionComponent<I.TCivilizationProps> = (props) => {

    const governance: string = props.data.gover
    const classes = useStyles();

    return <Paper className={classes.paper}>{governance}</Paper>

}

export default Governance
