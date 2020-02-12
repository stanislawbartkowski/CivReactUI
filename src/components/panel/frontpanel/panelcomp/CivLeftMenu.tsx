import React, { FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import LeftButton from '../../../../UI/LeftButton'
import civstring from '../../../../localize/locale';
import * as actions from '../../../../store/resumegamepanel/actions';

const CivLeftMenu: FunctionComponent = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    // read initial resource  

    return (
        <React.Fragment>
            <LeftButton clicked={() => { history.replace("/"); }}
                text={civstring('newgame')} />

            <LeftButton clicked={
                () => {
                    history.replace("/resumegame");
                    dispatch(actions.resumegamesWaiting())
                    dispatch(actions.resumegamesReady());
                }
            }
                text={civstring('resumegame')}
            />

            <LeftButton clicked={() => history.replace("/joingame")} text={civstring('joingame')} />
        </React.Fragment>

    )
}


export default CivLeftMenu;