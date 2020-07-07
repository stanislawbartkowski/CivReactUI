import axios from '../../axios';

import * as civdataactions from '../../js/restapi';
import * as C from '../../js/C'

export const RESUMEGAMES_WAITING: string = "RESUMEGAMES_WAITING";
export const RESUMEGAMES_READY: string = "RESUMEGAMES_READY";

export const resumegamesWaiting = () => {
    return {
        type: RESUMEGAMES_WAITING
    }
}

const setresumegamesReady = (data: any) => {
    return {
        type: RESUMEGAMES_READY,
        data: data
    }
}

export const resumegamesReady = () => {
    return (dispatch: any) => {
        axios.get('/civdata?what=' + civdataactions.GETGAMES).then(res => {
                C.log("Games received");
                dispatch(setresumegamesReady(res.data));
        });
    }
}
