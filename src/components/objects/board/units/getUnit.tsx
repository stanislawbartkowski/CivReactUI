import React, { FunctionComponent } from 'react';

import * as I from '../../../../js/I';
import * as comm from '../../../../js/comm'

import Infantry from '../../../images/Infantry'
import Mounted from '../../../images/Mounted'
import Artillery from '../../../images/Artillery'
import Aircraft from '../../../images/Aircraft'
import Soldier from '../../../images/Soldier'

function getUnit(branch: string): FunctionComponent<I.TSvgComponent> {

    let Res: FunctionComponent<I.TSvgComponent> = Infantry;
    switch (branch) {
        case comm.ARTILLERY:
        case comm.BUYARTILLERY: Res = Artillery; break;
        case comm.AIRCRAFT:
        case comm.BUYAIRCRAFT: Res = Aircraft; break;
        case comm.MOUNTED:
        case comm.BUYMOUNTED: Res = Mounted; break;
        case "Soldier": Res = Soldier; break;
    }

    return Res;
}

export default getUnit;