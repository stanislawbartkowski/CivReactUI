import React, { FunctionComponent } from 'react';

import * as I from '../../../../js/I';

import Academy from '../../../images/Academy'
import Aqueduct from '../../../images/Aqueduct'
import Bank from '../../../images/Bank'
import Barracks from '../../../images/Barracks'
import Cathedral from '../../../images/Cathedral'
import Granary from '../../../images/Granary'
import Harbor from '../../../images/Harbor'
import Ironmine from '../../../images/Ironmine'
import Library from '../../../images/Library'
import Market from '../../../images/Market'
import Shipyard from '../../../images/Shipyard'
import Temple from '../../../images/Temple'
import TradingPost from '../../../images/TradingPost'
import University from '../../../images/University'
import Workshop from '../../../images/Workshop'

function getBuilding(building: string): FunctionComponent<I.TSvgComponent> {

    let Res: FunctionComponent<I.TSvgComponent> = Academy;
    switch (building) {
        case "Aqueduct": Res = Aqueduct; break;
        case "Bank": Res = Bank; break;
        case "Barracks": Res = Barracks; break;
        case "Cathedral": Res = Cathedral; break;
        case "Granary": Res = Granary; break;
        case "Harbor": Res = Harbor; break;
        case "Ironmine": Res = Ironmine; break;
        case "Library": Res = Library; break;
        case "Market": Res = Market; break;
        case "Shipyard": Res = Shipyard; break;
        case "Temple": Res = Temple; break;
        case "Tradingpost": Res = TradingPost; break;
        case "University": Res = University; break;
        case "Workshop": Res = Workshop; break;
    }

    return Res;
}

export default getBuilding;