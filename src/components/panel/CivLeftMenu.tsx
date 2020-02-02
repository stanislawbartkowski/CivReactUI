import React, { FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";

import LeftButton from '../../UI/LeftButton'
import civstring from '../../localize/locale';


const CivLeftMenu: FunctionComponent = () => {

    const history = useHistory();

    return (
        <React.Fragment>
            <LeftButton clicked={() => history.replace("/")} text={civstring('newgame')} />
            <LeftButton clicked={() => history.replace("/resumegame")} text={civstring('resumegame')} />
            <LeftButton clicked={() => history.replace("/joingame")} text={civstring('joingame')} />
        </React.Fragment>

    )
}


export default CivLeftMenu;