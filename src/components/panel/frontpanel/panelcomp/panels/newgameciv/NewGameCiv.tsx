import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as C from '../../../../../../js/C';


const NewGameCiv: FunctionComponent = () => {
    const current = useSelector((state: any) => state.clickciv.current);
    const civ = useSelector((state: any) => state.clickciv.civ);

    C.trace('NewGameCiv', current + " " + civ);

    return null;
}

export default NewGameCiv;
