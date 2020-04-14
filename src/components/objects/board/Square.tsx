import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import grey from '@material-ui/core/colors/grey';

import Grassland from '../../../resources/images/terrain/grassland.svg'
import Mountain from '../../../resources/images/terrain/mountain.svg'
import Desert from '../../../resources/images/terrain/desert.svg'
import Forest from '../../../resources/images/terrain/forest.svg'
import Water from '../../../resources/images/terrain/water.svg'

import { ReactComponent as Wheat } from '../../../resources/images/resource/wheat.svg'
import { ReactComponent as Coin } from '../../../resources/images/resource/coin.svg'
import { ReactComponent as Incense } from '../../../resources/images/resource/incense.svg'
import { ReactComponent as Iron } from '../../../resources/images/resource/iron.svg'
import { ReactComponent as Silk } from '../../../resources/images/resource/silk.svg'
import { ReactComponent as Culture } from '../../../resources/images/tokens/culture.svg'

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
            let res = Culture;
            let viewBox=""
            switch (data.resource) {
                case "Wheat": res = Wheat; viewBox="0 0 163.575 163.575"; break;
                case "Coin": res = Coin; viewBox="0 0 56 56"; break;
                case "Silk": res = Silk; viewBox="0 0 512 512"; break;
                case "Incense": res = Incense; viewBox="0 0 17.086 17.086"; break;
                case "Iron": res = Iron; viewBox="0 0 512 512"; break;
                case "Culture": res = Culture; viewBox="0 0 58.3575 58.3575"; break;            
            }
            resource = <div>
                <SvgIcon className={classes.Resource} component={res} viewBox={viewBox} {...defaultIProps} />
            </div>;
        }

    }

    const wheat = Wheat;

    return (
        <Box className={cl} component="div" {...defaultProps}>
            {resource}
        </Box>
    );
}

export default Square;
