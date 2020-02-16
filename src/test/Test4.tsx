import React from 'react';
import Button from '@material-ui/core/Button';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import cs

const Test4: React.FC = () => {

    const handleClickOpen = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
        };



    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
           </Button>
        </div>
    );
}

export default Test4;
