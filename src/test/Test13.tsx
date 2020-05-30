import React from 'react';
import Grid from '@material-ui/core/Grid';

import UnitsStatus from '../components/objects/board/units/UnitsStatus'

import * as C from '../js/C'
import * as I from '../js/I'
import UnitStatus from '../components/objects/board/units/UnitsStatus';
import BuildingPane from '../components/objects/board/buildings/BuildingPane'

const Test13: React.FC = () => {

    const buildings: Array<I.NameNumT> =
        [
            {
                "name": "Temple",
                "num": 5
            },
            {
                "name": "TradingPost",
                "num": 6
            },
            {
                "name": "Library",
                "num": 6
            },
            {
                "name": "Barracks",
                "num": 5
            },
            {
                "name": "Granary",
                "num": 6
            },
            {
                "name": "Shipyard",
                "num": 5
            },
            {
                "name": "Market",
                "num": 5
            },
            {
                "name": "Workshop",
                "num": 6
            },
            {
                "name": "Harbor",
                "num": 10
            }
        ]



    return (
        <BuildingPane data={buildings} />
    );
}

export default Test13;
