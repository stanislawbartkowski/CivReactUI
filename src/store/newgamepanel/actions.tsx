import axios from '../../axios';

import * as civdataactions from '../../js/restapi';
import * as C from '../../js/C'

export const RESOURCE_WAITING: string = "RESOURCE_WAITING";
export const RESOURCE_READY: string = "RESOURCE_READY";

const setresourceReady = () => {
    return {
        type: RESOURCE_READY
    }
}

export const resourceReady = () => {

    return (dispatch: any) => {
        axios.get('/civdata?what=' + civdataactions.LISTOFRES).then(res => {
            C.log("Rest received")
            C.setGR(res.data);
            dispatch(setresourceReady());
        });
    }
}

