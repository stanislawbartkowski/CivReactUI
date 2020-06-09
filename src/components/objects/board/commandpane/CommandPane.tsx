import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CommandButton from './CommandButton'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

const CommandPane: FunctionComponent<I.TCivilizationProps> = (props) => {

  const command: Array<any> = props.data;

  return <Box><Grid container>
    {C.range(command.length).map(i => (
      <CommandButton key={i} command={command[i].command} />
    ))}
  </Grid>
  </Box>
}

export default CommandPane