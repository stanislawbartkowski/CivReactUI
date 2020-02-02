import React, { FunctionComponent } from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import C from '../../../../js/C';
import * as I from '../../../../js/I';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        CircleShapeView: {
            "vertical-align": "top",
            display: "inline-block",
            height: "64px",
            width: "64px",
            "border-radius": "50%",
            background: "#ddd",
            "line-height": "64px",
            "font-size": "30px",
            color: "#555",
            "text-align": "center"
        },

    })
);

const CivilizationName: FunctionComponent<I.TCivilizationProps> = ({ data }) => {
    const classes = useStyles();
    const civ=C.getCivShort(data);

    return (
        <div className={classes.CircleShapeView}>
            {civ}
        </div>
    );
}

export default CivilizationName;
