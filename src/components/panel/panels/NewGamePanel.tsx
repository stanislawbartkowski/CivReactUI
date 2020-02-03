import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";

import * as C from '../../../js/C'
import Civilization from '../../objects/civilization/Civilization'

const NewGamePanel: FunctionComponent = () => {
    const current = useSelector((state: any) => state.current);
    C.trace('NewGamePanel', current);
    var content: Object = 'Waiting';
    if (C.readyGR()) {
        const civs: Array<any> = C.GRCivs()
        content = civs.map(civ =>
            <span>
                <Civilization key={civ.civ} data={civ}></Civilization>
            </span>
        )
    };
    return (
        <div>
            {content}
        </div>
    );
}

export default NewGamePanel;