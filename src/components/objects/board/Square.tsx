import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import { borders } from '@material-ui/system';

import Grassland from '../../../resources/images/terrain/grassland.svg'


import * as I from '../../../js/I';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 0,
    border: 0.1,
    style: { width: 60, height: 45 },
    position : "relative"
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        NotRevealed: {
            borderColor: grey[300],
            backgroundSize: "100% 100%",
            backgroundColor : grey[300]
        },
        Grassland : {
            backgroundImage: `url(${Grassland})`,
            backgroundColor: "DarkSeaGreen"
          }
    })
);


const Square: FunctionComponent<I.TCivilizationProps> = ({ data }) => {

    const classes = useStyles();
    let cl : string = "";
    if (!data.revealed) cl = classes.NotRevealed
    else {
        if (data.terrain == "Grassland") cl = classes.Grassland
    }

    return (
        <Box className={cl} component="div" {...defaultProps}>
            {"xxxx"}
        </Box>
    );
}

export default Square;
