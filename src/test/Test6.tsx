import React from 'react';
import Button from '@material-ui/core/Button';
import { useConfirm, ConfirmProvider } from 'material-ui-confirm';
import Grid from '@material-ui/core/Grid';

import * as C from '../js/C'
import Square from '../components/objects/board/Square'


const Test6: React.FC = () => {

    const s = {
        "revealed" : true,
        "terrain" : "Grassland",
        "trade" : 0,
        "production" : 0,
        "resource" : "Wheat",
        "capciv" : "China",
        "civ" : null,
        "city" : null,
        "defence" : 0,
        "numberofArmies" : -1,
        "numberofScouts" : -1,
        "tile" : "RTILECHINA.json",
        "hv" : null,
        "building" : null,
        "wonder" : null,
        "culture" : 0,
        "greatperson" : null,
        "greatpersontype" : null
      }

      const s1 = {
        "revealed" : false
      }

    return (
            <Grid container direction="row" spacing={0}>
                <Square data={s1} />
                <Square data={s} />
            </Grid>
    );
}

export default Test6;
