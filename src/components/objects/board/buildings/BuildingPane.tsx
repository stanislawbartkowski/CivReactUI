import React, { ReactElement, FunctionComponent, Children } from 'react';

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import getBuilding from './getBuilding'
import PresePane from '../../../../UI/PresePane'


const BuildingPane: FunctionComponent<I.TCivilizationProps> = (props) => {

    const buildings: Array<I.NameNumT> = props.data

    return <PresePane resou={buildings} openpopup={false} getI={getBuilding} PopUp={() => <div></div>} />

}

export default BuildingPane;