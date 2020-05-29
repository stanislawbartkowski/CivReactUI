import React from 'react';
import Grid from '@material-ui/core/Grid';

import Unit from '../components/objects/board/units/Unit'
import UnitArmed from '../components/objects/board/units/UnitArmed'

import * as C from '../js/C'

const Test11: React.FC = () => {

    const units = {
        "units": {
            "units": [
                {
                    "name": "Artillery",
                    "num": 14
                },
                {
                    "name": "Infantry",
                    "num": 14
                },
                {
                    "name": "Mounted",
                    "num": 14
                },
                {
                    "name": "Aircraft",
                    "num": 8
                }
            ]
        }
    }

    return (
        <Grid container direction="row" spacing={0}>

        </Grid>
    );
}

export default Test11;
