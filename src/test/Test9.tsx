import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Unit from '../components/objects/board/units/Unit'
import UnitArmed from '../components/objects/board/units/UnitArmed'

import * as C from '../js/C'

const Test9: React.FC = () => {

    const s = {
        "name": "Infantry",
        "strength": [
            2,
            3,
            4,
            5
        ]
    };

    const s1 = {
        "name": "Mounted",
        "strength": [
            3,
            4,
            5,
            6
        ]
    };

    const s2 = {
        "name": "Artillery",
        "strength": [
            5,
            5,
            6,
            7
        ]
    };

    const s3 = {
        "name": "Aircraft",
        "strength": [
            9,
            9,
            9,
            9
        ]
    };

    return (
        <Grid container direction="row" spacing={0}>
            <Unit data={s} />
            <Unit data={s1} />
            <Unit data={s2} />
            <Unit data={s3} />

            <UnitArmed data={s} level={0}/>
            <UnitArmed data={s1} level={1} />
            <UnitArmed data={s2} level={2}/>
            <UnitArmed data={s3} level={3}/>

        </Grid>
    );
}

export default Test9;
