import React from 'react';
import Button from '@material-ui/core/Button';
import { useConfirm, ConfirmProvider } from 'material-ui-confirm';
import Grid from '@material-ui/core/Grid';

import * as C from '../js/C'
import Square from '../components/objects/board/square/Square'


const Test6: React.FC = () => {

    const s = {
        "revealed" : true,
        "terrain" : "Grassland",
        "trade" : 0,
        "production" : 0,
        "resource" : "Iron",
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
        "revealed" : true,
        "terrain" : "Mountain",
        "trade" : 0,
        "production" : 0,
        "resource" : "Culture",
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

      const s2 = {
        "revealed" : true,
        "terrain" : "Forest",
        "trade" : 0,
        "production" : 0,
        "resource" : "Coin",
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

      const s3 = {
        "revealed" : true,
        "terrain" : "Desert",
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

      const s4 = {
        "revealed" : true,
        "terrain" : "Water",
        "trade" : 2,
        "production" : 0,
        "resource" : "Silk",
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

      const s5 = {
        "revealed" : true,
        "terrain" : "Water",
        "trade" : 1,
        "production" : 2,
        "resource" : "Incense",
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


      const s6 = {
        "revealed": true,
        "terrain": "Desert",
        "trade": 1,
        "production": 5,
        "resource": null,
        "capciv": "China",
        "civ": "China",
        "city": "WalledCapital",
        "defence": 16,
        "numberofArmies": -1,
        "numberofScouts": -1,
        "tile": "RTILECHINA.json",
        "hv": null,
        "building": null,
        "wonder": null,
        "culture": 3,
        "greatperson": null,
        "greatpersontype": null
      }


      const sempty = {
        "revealed" : false
      }

    return (
            <Grid container direction="row" spacing={0}>
                <Square data={s1} />
                <Square data={s} />
                <Square data={s2} />
                <Square data={s3} />
                <Square data={s4} />
                <Square data={s5} />
                <Square data={sempty} />
                <Square data={s6} />
            </Grid>
    );
}

export default Test6;
