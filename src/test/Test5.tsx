import React from 'react';
import Button from '@material-ui/core/Button';
import { useConfirm, ConfirmProvider } from 'material-ui-confirm';
import * as C from '../js/C'


const Test5: React.FC = () => {

    const handleClickOpen = () => {
        C.confirmAlert("Hello").then(() => { alert("Yes")})
    };

    const handleClickInfo = () => {
        C.infoAlert("aaa","bbb")
    };

    return (
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Confirm dialog
           </Button>
           <Button variant="outlined" color="primary" onClick={handleClickInfo}>
                    Info dialog
           </Button>
            </div>
    );
}

export default Test5;
