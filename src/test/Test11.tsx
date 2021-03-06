import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import CommandPane from '../components/objects/board/commandpane/CommandPane'

import * as C from '../js/C'

const Test11: React.FC = () => {

  const command = [
    {
      "command": "SETCAPITAL"
    },
    {
      "command": "SETSCOUT"
    },
    {
      "command": "SETARMY"
    },
    {
      "command": "ENDOFPHASE"
    },
    {
      "command": "BUYARTILLERY"
    },
    {
      "command": "BUYINFANTRY"
    },
    {
      "command": "BUYMOUNTED"
    },
    {
      "command": "SPENDTRADE"
    },
    {
      "command": "HARVESTRESOURCE"
    },
    {
      "command": "BUYBUILDING"
    },
    {
      "command": "BUYARMY"
    },
    {
      "command": "DEVOUTTOCULTURE"
    },
    {
      "command": "ENDOFPHASE"
    }

  ];

  return <CommandPane data={command} />
}

export default Test11;