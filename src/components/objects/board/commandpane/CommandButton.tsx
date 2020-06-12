import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { itemizedCommand, noitemizeCommand } from '../../../../store/itemizeaction/actions'

import Capital from '../../../images/Capital'
import Scout from '../../../images/Scout'
import Army from '../../../images/Army'
import Hand from '../../../images/Hand'
import Artillery from '../../../images/Artillery'
import Infantry from '../../../images/Infantry'
import Mounted from '../../../images/Mounted'
import Trade from '../../../images/Trade'
import Buybuilding from '../../../images/Buybuilding'
import Culture from '../../../images/Culture'
import Sun from '../../../images/Sun'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import civstring from '../../../../localize/locale';

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
    case "BUYARTILLERY": Res = Artillery; break;
    case "BUYINFANTRY": Res = Infantry; break;
    case "BUYMOUNTED": Res = Mounted; break;
    case "SPENDTRADE": Res = Trade; break;
    case "BUYBUILDING": Res = Buybuilding; break;
    case "BUYARMY": Res = Army; break;
    case "DEVOUTTOCULTURE": Res = Culture; break;
    case "HARVESTRESOURCE": Res = Sun; break;
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
    if (!C.implementedCommand(commandid)) {
      const mess: string = civstring("commandnotimplemented", command.toUpperCase());
      C.notimplementedAlert(mess)
      return
    }
    if (C.commandItemized(commandid)) dispatch(itemizedCommand(commandid));
    else dispatch(noitemizeCommand(commandid))
  }

  return <Button onClick={handleClick} className={classes.button} size="small" variant="contained" color="primary" startIcon={<Ico />}>{command}</Button>
}

export default CommandButton
