import React, { ReactElement, FunctionComponent, Children } from 'react';
import Box from '@material-ui/core/Box';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'

import UnitsStatus from './UnitsStatus'

const GameUnits: FunctionComponent<I.TCivilizationProps> = (props) => {

    const board = props.data
    const units = board.units.units
    const killedunits = board.killedunits

    return <Box>
        <UnitsStatus units={units} list={[]} armystrength={[]} />
        <UnitsStatus units={killedunits.units} list={killedunits.list} armystrength={[]} />
    </Box>

}

export default GameUnits;