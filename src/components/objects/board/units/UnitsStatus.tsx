import React, { ReactElement, FunctionComponent, Children } from 'react';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import ListOfUnits from './ListOfUnits'
import getUnit from './getUnit'
import PresePane from '../../../../UI/PresePane'

interface IArmyStatus {
    units: Array<I.NameNumT>
    list: Array<any>
    armystrength: Array<any>
}


const UnitStatus: FunctionComponent<IArmyStatus> = (props) => {

    const units: Array<I.NameNumT> = props.units
    const list: Array<any> = props.list
    const unitsno: number = list.length
    const openpopup = list.length > 0

    return <PresePane resou={props.units} openpopup={openpopup} getI={getUnit}
        PopUp={() => <ListOfUnits units={list} strength={props.armystrength} />}
    />

}

export default UnitStatus;