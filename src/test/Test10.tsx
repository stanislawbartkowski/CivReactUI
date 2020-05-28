import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import ResourcePane from '../components/objects/board/resources/ResourcePane'

import * as C from '../js/C'

const Test10: React.FC = () => {
    const reso = [
        {
          "resource": "Incense",
          "num": 1
        },
        {
          "resource": "Spy",
          "num": 2
        },
        {
          "resource": "Coin",
          "num": 0
        },
        {
          "resource": "Culture",
          "num": 0
        },
        {
          "resource": "Silk",
          "num": 0
        },
        {
          "resource": "Iron",
          "num": 0
        },
        {
          "resource": "Uranium",
          "num": 0
        },
        {
          "resource": "Wheat",
          "num": 4
        }
      ]

      const hv = {
        "Hut" : 1,
        "list" : [ {
          "hv" : "Hut",
          "resource" : "Spy"
        } ]
      }

    return <ResourcePane resources= {reso} hutvillages = {hv}/>
}

export default Test10;