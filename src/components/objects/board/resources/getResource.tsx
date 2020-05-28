import React, { FunctionComponent } from 'react';

import * as I from '../../../../js/I';

import Wheat from '../../../images/Wheat'
import Coin from '../../../images/Coin'
import Incense from '../../../images/Incense'
import Iron from '../../../images/Iron'
import Silk from '../../../images/Silk'
import Culture from '../../../images/Culture'
import Uranium from '../../../images/Uranium'
import Spy from '../../../images/Spy'
import Hut from '../../../images/Hut'
import Village from '../../../images/Village'

function getResource (res: string) : FunctionComponent<I.TSvgComponent> {

    let Res : FunctionComponent<I.TSvgComponent> = Culture;
    switch (res) {
        case "Wheat": Res = Wheat; break;
        case "Coin": Res = Coin; break;
        case "Silk": Res = Silk; break;
        case "Incense": Res = Incense; break;
        case "Iron": Res = Iron; break;
        case "Culture": Res = Culture; break;
        case "Uranium" : Res = Uranium; break;
        case "Spy" : Res = Spy; break;
        case "Hut" : Res = Hut; break;
        case "Village" : Res = Village; break;
    }

    return Res;
}

export default getResource;