import React from 'react';
import Grid from '@material-ui/core/Grid';

import UnitsStatus from '../components/objects/board/units/UnitsStatus'

import * as C from '../js/C'
import * as I from '../js/I'
import UnitStatus from '../components/objects/board/units/UnitsStatus';

const Test12: React.FC = () => {

    const units: Array<I.NameNumT> =
        [
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



    return (
        <UnitStatus units={units} list={[]} armystrength={[]} />
    );
}

export default Test12;
