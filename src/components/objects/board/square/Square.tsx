import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';


// Terrains
import Grassland from '../../../../resources/images/terrain/grassland.svg'
import Mountain from '../../../../resources/images/terrain/mountain.svg'
import Desert from '../../../../resources/images/terrain/desert.svg'
import Forest from '../../../../resources/images/terrain/forest.svg'
import Water from '../../../../resources/images/terrain/water.svg'
import City from '../../../../resources/images/cities/city.svg'
import Capital from '../../../../resources/images/cities/capital.svg'

// Buildings
import Academy from '../../../../resources/images/buildings/academy.svg'
import Aqueduct from '../../../../resources/images/buildings/aqueduct.svg'
import Bank from '../../../../resources/images/buildings/bank.svg'
import Barracks from '../../../../resources/images/buildings/barracks.svg'
import Cathedral from '../../../../resources/images/buildings/cathedral.svg'
import Granary from '../../../../resources/images/buildings/granary.svg'
import Harbor from '../../../../resources/images/buildings/harbor.svg'
import Ironmine from '../../../../resources/images/buildings/ironmine.svg'
import Library from '../../../../resources/images/buildings/library.svg'
import Market from '../../../../resources/images/buildings/market.svg'
import Shipyard from '../../../../resources/images/buildings/shipyard.svg'
import Temple from '../../../../resources/images/buildings/temple.svg'
import Tradingpost from '../../../../resources/images/buildings/tradingpost.svg'
import University from '../../../../resources/images/buildings/university.svg'
import Workshop from '../../../../resources/images/buildings/workshop.svg'



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

interface ISquare extends I.TCivilizationProps {
    highlight?: boolean
    pos? : I.Pos
}


const defaultProps = {
    bgcolor: 'background.paper',
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
        // Terrains
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
        // Buildings
        Academy: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Academy})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Aqueduct: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Aqueduct})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Bank: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Bank})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Barracks: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Barracks})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Cathedral: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Cathedral})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Granary: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Granary})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Harbor: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Harbor})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Ironmine: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Ironmine})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Library: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Library})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Market: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Market})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Shipyard: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Shipyard})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Temple: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Temple})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Tradingpost: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Tradingpost})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        University: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${University})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        Workshop: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${Workshop})`,
            backgroundColor: "#f5f3e8",
            backgroundRepeat: "no-repeat"
        },
        // Resource
        Resource: {
            left: "44px",
            top: "30px",
            position: "absolute"
        },
        // Capacity
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
        culture: {
            left: "4px",
            top: "0px",
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

const Square: FunctionComponent<ISquare> = ({ data, highlight, pos }) => {

    const classes = useStyles();
    const cityclasses = useCityStyles(C.getCityColor(data.civ))()
    const figureclasses = useFigureStyles(C.getColor(data.civ))()
    let cl: string = "";
    let resourceSquare: string = ""
    let resource = null;
    let prod = null
    let trade = null
    let defence = null
    let culture = null
    let armies = null
    let scouts = null
    let tradeNumber: number = 0
    let productionNumber: number = 0
    let cultureNumber: number = 0
    if (!data.revealed) cl = classes.NotRevealed
    else
        if (data.city != null) {
            if (data.city == "Capital" || data.city == "WalledCapital") cl = cityclasses.Capital
            else cl = cityclasses.City
            defence = <CityProd num={data.defence} tradeprod={Shield} className={classes.defence} />
            prod = <CityProd num={data.production} tradeprod={Production} className={classes.cityproduction} />
            culture = <CityProd num={data.culture} tradeprod={Culture} className={classes.cityculture} />
        }
        else
            if (data.building != null) {
                const building = C.getBuilding(data.building)
                productionNumber = building.tokens.Production
                tradeNumber = building.tokens.Trade
                cultureNumber = building.tokens.Culture
                if (building.tokens.Coin > 0) resourceSquare = "Coin"

                switch (data.building) {
                    case "Academy": cl = classes.Academy; break;
                    case "Aqueduct": cl = classes.Aqueduct; break;
                    case "Bank": cl = classes.Bank; break;
                    case "Barracks": cl = classes.Barracks; break;
                    case "Cathedral": cl = classes.Cathedral; break;
                    case "Granary": cl = classes.Granary; break;
                    case "Harbor": cl = classes.Harbor; break;
                    case "Ironmine": cl = classes.Ironmine; break;
                    case "Library": cl = classes.Library; break;
                    case "Market": cl = classes.Market; break;
                    case "Shipyard": cl = classes.Shipyard; break;
                    case "Temple": cl = classes.Temple; break;
                    case "Tradingpost": cl = classes.Tradingpost; break;
                    case "University": cl = classes.University; break;
                    case "Workshop": cl = classes.Workshop; break;
                } // switch
            }
            else {
                switch (data.terrain) {
                    case "Grassland": cl = classes.Grassland; break;
                    case "Mountain": cl = classes.Mountain; break;
                    case "Forest": cl = classes.Forest; break;
                    case "Desert": cl = classes.Desert; break;
                    case "Water": cl = classes.Water; break;
                }

                resourceSquare = data.resource
                productionNumber = data.production
                tradeNumber = data.trade
                cultureNumber = data.culture
                if (data.numberofArmies > 0) {
                    armies = <Figure num={data.numberofArmies} tradeprod={Army} className={figureclasses.army} />
                }
                if (data.numberofScouts > 0) {
                    scouts = <Figure num={data.numberofScouts} tradeprod={Scout} className={figureclasses.scout} />
                }
            }

    if (productionNumber > 0) {
        prod = <ProdTradeStack num={productionNumber} tradeprod={Production} className={classes.production} />
    }
    if (tradeNumber > 0) {
        trade = <ProdTradeStack num={tradeNumber} tradeprod={Trade} className={classes.trade} />
    }
    if (cultureNumber > 0) {
        culture = <ProdTradeStack num={cultureNumber} tradeprod={Culture} className={classes.culture} />
    }
    if (resourceSquare != "" && resourceSquare != null) {
        let Res = getResource(resourceSquare)
        resource = <div><Res className={classes.Resource} props={defaultIProps} /></div>
    }


    const bradius = highlight ? "35%" : "0%"

    return (
        <Box className={cl} component="div" {...defaultProps} borderRadius={bradius}>
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
