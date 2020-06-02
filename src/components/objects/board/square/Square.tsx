import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';

import Grassland from '../../../../resources/images/terrain/grassland.svg'
import Mountain from '../../../../resources/images/terrain/mountain.svg'
import Desert from '../../../../resources/images/terrain/desert.svg'
import Forest from '../../../../resources/images/terrain/forest.svg'
import Water from '../../../../resources/images/terrain/water.svg'
import City from '../../../../resources/images/cities/city.svg'
import Capital from '../../../../resources/images/cities/capital.svg'

import getResource from '../resources/getResource'
import Production from '../../../images/Production'
import Trade from '../../../images/Trade'
import Shield from '../../../images/Shield'
import Culture from '../../../images/Culture'
import Army from '../../../images/Army'
import Scout from '../../../images/Scout'

import CityProd from './CityProd'
import ProdTradeStack from './ProdTradeStack'
import Figure from './Figure'

import * as I from '../../../../js/I';
import * as C from '../../../../js/C';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 0,
    border: 0.1,
    style: { width: 65, height: 50 },
    position: "relative"
};


const defaultIProps = {
    style: { fontSize: 13 },
}

const useCityStyles = (color: string) => makeStyles((theme: Theme) =>
    createStyles({
        City: {
            backgroundSize: "60% 90%",
            backgroundImage: `url(${City})`,
            backgroundColor: color,
            backgroundRepeat: "no-repeat"
        },
        Capital: {
            backgroundSize: "60% 100%",
            backgroundImage: `url(${Capital})`,
            backgroundColor: color,
            backgroundRepeat: "no-repeat"
        },
    }
    )
)

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
        },
        production: {
            right: "0px",
            bottom: "7px",
            position: "absolute"
        },
        trade: {
            left: "4px",
            bottom: "7px",
            position: "absolute"
        },
        defence: {
            position: "absolute",
            top: "2px",
            right: "2px",
            fontSize: "70%",
        },
        cityproduction: {
            position: "absolute",
            bottom: "2px",
            right: "2px",
            fontSize: "70%",
        },
        cityculture: {
            position: "absolute",
            bottom: "15px",
            right: "2px",
            fontSize: "70%",
        },
    },

    ),
);

const useFigureStyles = (color: string) => makeStyles((theme: Theme) =>
    createStyles({
        army: {
            right: "8px",
            bottom: "7px",
            position: "absolute",
            color: color
        },
        scout: {
            left: "1px",
            bottom: "7px",
            position: "absolute",
            color: color
        },
    }
    )
)

const Square: FunctionComponent<I.TCivilizationProps> = ({ data }) => {

    const classes = useStyles();
    const cityclasses = useCityStyles(C.getCityColor(data.civ))()
    const figureclasses = useFigureStyles(C.getColor(data.civ))()
    let cl: string = "";
    let resource = null;
    let prod = null
    let trade = null
    let defence = null
    let culture = null
    let armies = null
    let scouts = null
    if (!data.revealed) cl = classes.NotRevealed
    else 
    if (data.city != null) {
        if (data.city == "Capital" || data.city == "WalledCapital") cl = cityclasses.Capital
        else cl = cityclasses.City
        defence = <CityProd num={data.defence} tradeprod={Shield} className={classes.defence} />
        prod = <CityProd num={data.production} tradeprod={Production} className={classes.cityproduction} />
        culture = <CityProd num={data.culture} tradeprod={Culture} className={classes.cityculture} />
    }
    else {
        switch (data.terrain) {
            case "Grassland": cl = classes.Grassland; break;
            case "Mountain": cl = classes.Mountain; break;
            case "Forest": cl = classes.Forest; break;
            case "Desert": cl = classes.Desert; break;
            case "Water": cl = classes.Water; break;
        }

        if (data.resource) {
            let Res = getResource(data.resource)
            resource = <div><Res className={classes.Resource} props={defaultIProps} /></div>
        }
        if (data.production > 0) {
            prod = <ProdTradeStack num={data.production} tradeprod={Production} className={classes.production} />
        }
        if (data.trade > 0) {
            trade = <ProdTradeStack num={data.trade} tradeprod={Trade} className={classes.trade} />
        }
        if (data.numberofArmies > 0) {
            armies = <Figure num={data.numberofArmies} tradeprod={Army} className={figureclasses.army} />
        }
        if (data.numberofScouts > 0) {
            scouts = <Figure num={data.numberofScouts} tradeprod={Scout} className={figureclasses.scout} />
        }
    }

    return (
        <Box className={cl} component="div" {...defaultProps}>
            {resource}
            {prod}
            {trade}
            {defence}
            {culture}
            {armies}
            {scouts}
        </Box>
    );
}

export default Square;
