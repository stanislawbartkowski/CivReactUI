import React, { FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from '../../../../axios';

import LeftButton from '../../../../UI/LeftButton'
import civstring from '../../../../localize/locale';
import * as civdataactions from '../../../../js/restapi';
import * as C from '../../../../js/C'
import * as actions from '../../../../store/actions'

const CivLeftMenu: FunctionComponent = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    // read initial resource  

    return (
        <React.Fragment>
            <LeftButton clicked={() => { history.replace("/"); dispatch({ type: actions.RESOURCE_READY }); }}
                text={civstring('newgame')} />

            <LeftButton clicked={
                () => {
                    history.replace("/resumegame");
                    dispatch({ type: actions.RESUMEGAMES_WAITING });
                    axios.get('/civdata?what=' + civdataactions.GETGAMES).then(res => {
                        C.log("Games received");
                        dispatch({ type: actions.RESUMEGAMES_READY, data: res.data });
                    });
                }
            }
                text={civstring('resumegame')}
            />

            <LeftButton clicked={() => history.replace("/joingame")} text={civstring('joingame')} />
        </React.Fragment>

    )
}


export default CivLeftMenu;