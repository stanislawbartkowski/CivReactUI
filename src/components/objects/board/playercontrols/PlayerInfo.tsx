import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import civstring from '../../../../localize/locale';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: 1,
            textAlign: 'center',
            margin: 1,
        },
    }
    ))

interface PlayerInfoProps  {
        label : string
        info : string
}  
    
const PlayerInfo: FunctionComponent<PlayerInfoProps> = (props) => {

    const label: string = civstring(props.label);
    const info : string = props.info;
    const classes = useStyles();

    return <Paper className={classes.paper}>{label} {info}</Paper>

}

export default PlayerInfo;