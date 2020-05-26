import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';

import Grassland from '../../../resources/images/terrain/grassland.svg'
import Mountain from '../../../resources/images/terrain/mountain.svg'
import Desert from '../../../resources/images/terrain/desert.svg'
import Forest from '../../../resources/images/terrain/forest.svg'
import Water from '../../../resources/images/terrain/water.svg'

import Wheat from '../../images/Wheat'
import Coin from '../../images/Coin'
import Incense from '../../images/Incense'
import Iron from '../../images/Iron'
import Silk from '../../images/Silk'
import Culture from '../../images/Culture'

import * as I from '../../../js/I';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 0,
    border: 0.1,
    style: { width: 60, height: 45 },
    position: "relative"
};


const defaultIProps = {
    style: { fontSize: 13 },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        NotRevealed: {
            borderColor: grey[300],
            backgroundSize: "100% 100%",
            backgroundColor: grey[300]
        },
        Grassland: {
            backgroundSize: "100% 100%",
            backgroundImage: `url(${Grassland})`,
            backgroundColor: "DarkSeaGreen"
        },
        Mountain: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Mountain})`,
            backgroundColor: "DarkOliveGreen"
        },
        Desert: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Desert})`,
            backgroundColor: "LightGoldenRodYellow"
        },
        Water: {
            backgroundSize: "100% 100%",
            backgroundImage: `url(${Water})`,
            backgroundColor: "lightblue"
        },
        Forest: {
            backgroundSize: "100% 100%",
            backgroundImage: `url(${Forest})`,
            backgroundColor: "ForestGreen"
        },
        Resource: {
            left: "44px",
            top: "30px",
            position: "absolute"
        }
    })
);


const Square: FunctionComponent<I.TCivilizationProps> = ({ data }) => {

    const classes = useStyles();
    let cl: string = "";
    let resource = null;
    if (!data.revealed) cl = classes.NotRevealed
    else {
        switch (data.terrain) {
            case "Grassland": cl = classes.Grassland; break;
            case "Mountain": cl = classes.Mountain; break;
            case "Forest": cl = classes.Forest; break;
            case "Desert": cl = classes.Desert; break;
            case "Water": cl = classes.Water; break;
        }
        if (data.resource) {
            let Res : FunctionComponent<I.TSvgComponent> = Culture;
            switch (data.resource) {
                case "Wheat": Res = Wheat; break;
                case "Coin": Res = Coin; break;
                case "Silk": Res = Silk; break;
                case "Incense": Res = Incense; break;
                case "Iron": Res = Iron; break;
                case "Culture": Res = Culture; break;            
            }
            resource = <div><Res className={classes.Resource} props={defaultIProps}/></div>
        }

    }

    return (
        <Box className={cl} component="div" {...defaultProps}>
            {resource}
        </Box>
    );
}

export default Square;
