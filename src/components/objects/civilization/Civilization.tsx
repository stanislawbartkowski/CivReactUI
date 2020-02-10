import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box'
import grey from '@material-ui/core/colors/grey';
import Divider from '@material-ui/core/Divider';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import * as I from '../../../js/I';
import CivilizationName from './civilizationname/CivilizationName'

const boxProps = {
    bgcolor: grey[100],
    m: 1,
    height : 250,
    width : 180,
    p:{ xs: 2, sm: 3, md: 4 },
    b : 1,
    borderRadius: "borderRadius",
    boxShadow : 1,
    position : "relative"
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        CivilizationName : {
            position:"absolute",
            left : 1,
            top:1
        },
        FeatureNames : {
            position : "absolute",
            top : 1,
            left : 70
        },
        DescName : {
            position : "absolute",
            top : 73,
            left : 1,
            fontSize : 12
        },
        Divider : {
            position : "absolute",
            top : 69,
            left : 0,
            width: "100%"
        }

    })
);


const Civilization: FunctionComponent<I.TCivilizationProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Box {...boxProps}> 
            <div className={classes.CivilizationName}> <CivilizationName data={data.civ} /> </div>
            <div className={classes.FeatureNames}> {data.civ} {data.tech} {data.gover} </div>
            <Divider className={classes.Divider} light />
            <div className={classes.DescName} > {data.desc} </div> 
        </Box> 
    );
}

export default Civilization;
