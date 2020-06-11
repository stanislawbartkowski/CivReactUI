import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { itemizedCommand, noitemizeCommand } from '../../../../store/itemizeaction/actions'

import Capital from '../../../images/Capital'
import Scout from '../../../images/Scout'
import Army from '../../../images/Army'
import Hand from '../../../images/Hand'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

type CommandGame = { command: string };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

function getButtonIcon(command: string): FunctionComponent<I.TSvgComponent> {

  let Res: FunctionComponent<I.TSvgComponent> = Capital
  switch (command) {
    case "SETSCOUT": Res = Scout; break
    case "SETARMY": Res = Army; break
    case "ENDOFPHASE": Res = Hand; break;
    case "SETCAPITAL": Res = Capital; break;
  }

  return Res;
}

const CommandButton: FunctionComponent<CommandGame> = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const commandid = props.command;
  const command: string = C.commandText(commandid)
  const Ico: FunctionComponent<I.TSvgComponent> = getButtonIcon(commandid)

  const handleClick = () => {
    if (C.commandItemized(commandid)) dispatch(itemizedCommand(commandid));
    else dispatch(noitemizeCommand(commandid))
  }

  return <Button onClick={handleClick} className={classes.button} size="small" variant="contained" color="primary" startIcon={<Ico />}>{command}</Button>
}

export default CommandButton
