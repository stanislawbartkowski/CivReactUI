import React, { FunctionComponent } from 'react';

import * as I from '../../../../js/I';

import Infantry from '../../../images/Infantry'
import Mounted from '../../../images/Mounted'
import Artillery from '../../../images/Artillery'
import Aircraft from '../../../images/Aircraft'
import Soldier from '../../../images/Soldier'

function getUnit (branch: string) : FunctionComponent<I.TSvgComponent> {

    let Res: FunctionComponent<I.TSvgComponent> = Infantry;
    switch (branch) {
        case "Artillery": Res = Artillery; break;
        case "Aircraft": Res = Aircraft; break;
        case "Mounted": Res = Mounted; break;
        case "Soldier" : Res = Soldier; break;
    }

    return Res;
}

export default getUnit;