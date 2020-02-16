import React from 'react';
import Button from '@material-ui/core/Button';
import { useConfirm, ConfirmProvider } from 'material-ui-confirm';
import * as C from '../js/C'


const Test5: React.FC = () => {

    const confirm = useConfirm();

    const handleClickOpenOld = () => {
        confirm({ description: 'This action is permanent!' })
            .then(() => { /* ... */ });
    };

    const handleClickOpen = () => {
        C.confirmAlert("Hello").then(() => { alert("Yes")})
    };

    return (
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open simple dialog
           </Button>
            </div>
    );
}

export default Test5;
