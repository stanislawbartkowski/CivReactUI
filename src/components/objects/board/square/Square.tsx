import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
        City: {
            backgroundSize: "90% 90%",
            backgroundImage: `url(${City})`,
            backgroundColor: "#d1e8d1"
        },
        Capital: {
            backgroundSize: "60% 100%",
            backgroundImage: `url(${Capital})`,
            backgroundColor: "#d1e8d1",
            backgroundRepeat: "no-repeat"
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
        item: {
            height: "10px"
        },
        defence: {
            position: "absolute",
            top: "8px",
            right: "5px"
        },
        cityproduction: {
            position: "absolute",
            bottom: "8px",
            right: "5px"
        }

    },

    ),
);

interface ITradeProd {
    num: number,
    tradeprod: FunctionComponent,
    className: string
}

const defaultTProps = {
    style: { fontSize: 10 },
}

const propCityIcon = {
    style: { fontSize: 14 },
}

const ProdTradeStack: FunctionComponent<ITradeProd> = (props) => {
    const num = props.num
    const classes = useStyles();
    const TradeProd: FunctionComponent<I.TSvgComponent> = props.tradeprod
    return <Grid direction="column" className={props.className} >
        {C.range(num).map(i => (
            <Grid item xs={5} className={classes.item}><TradeProd key={i} props={defaultTProps} /></Grid>
        ))} </Grid>
}

const CityProd: FunctionComponent<ITradeProd> = (props) => {
    const num = props.num
    const classes = useStyles();
    const TradeProd: FunctionComponent<I.TSvgComponent> = props.tradeprod

    return <Badge badgeContent={num} className={props.className} color="primary">
        <TradeProd props={propCityIcon} />
    </Badge>
}


const Square: FunctionComponent<I.TCivilizationProps> = ({ data }) => {

    const classes = useStyles();
    let cl: string = "";
    let resource = null;
    let prod = null
    let trade = null
    let defence = null
    if (!data.revealed) cl = classes.NotRevealed
    if (data.city != null) {
        if (data.city == "Capital" || data.city == "WalledCapital") cl = classes.Capital
        else cl = classes.City
        defence = <CityProd num={data.defence} tradeprod={Shield} className={classes.defence} />
        prod = <CityProd num={data.production} tradeprod={Production} className={classes.cityproduction} />
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

    }

    return (
        <Box className={cl} component="div" {...defaultProps}>
            {resource}
            {prod}
            {trade}
            {defence}
        </Box>
    );
}

export default Square;
