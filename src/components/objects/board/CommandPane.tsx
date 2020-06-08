import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';

import {itemizedCommand} from '../../../store/itemizeaction/actions'
import {commandNone} from '../../../store/commandactions/actions'

import civstring from '../../../localize/locale'
import Capital from '../../images/Capital'

import * as I from '../../../js/I'
import * as C from '../../../js/C'

type CommandGame = { command: string };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

function getButtonIcon (command: string) : FunctionComponent<I.TSvgComponent> {

    let Res: FunctionComponent<I.TSvgComponent> = Capital

    return Res;
}

const CommandButton: FunctionComponent<CommandGame> = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const commandid = props.command;
    const command : string = C.commandText(commandid)
    const Ico : FunctionComponent<I.TSvgComponent> = getButtonIcon(command)

    const handleClick = () => {
      dispatch(itemizedCommand(commandid));
      dispatch(commandNone());
    }

    return <Button onClick={handleClick} className={classes.button} size="small" variant="contained" color="primary" startIcon={<Ico/>}>{command}</Button>
}


const CommandPane: FunctionComponent<I.TCivilizationProps> = (props) => {

    const command: Array<any> = props.data;

    return <Box><Grid container>
        {C.range(command.length).map(i => (
            <CommandButton key={i} command={command[i].command}/>
        ))}
    </Grid>
    </Box>

}

export default CommandPane