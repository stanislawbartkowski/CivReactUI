import React, { FunctionComponent } from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";

import * as C from '../../../../js/C';
import * as I from '../../../../js/I';
import { civClicked } from '../../../../store/civclicked/actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        CircleShapeView: {
            "vertical-align": "top",
            display: "inline-block",
            height: "64px",
            width: "64px",
            "border-radius": "50%",
            background: grey[300],
            "line-height": 2,
            "font-size": 2 * theme.typography.fontSize,
            color: "#555",
            "text-align": "center"
        },

    })
);

const CivilizationName: FunctionComponent<I.TCivilizationProps> = ({ data }) => {
    const classes = useStyles();
    const civ = C.getCivShort(data);
    const dispatch = useDispatch();

    return (
        <Button className={classes.CircleShapeView} onClick={() => dispatch(civClicked(data))} >
            {civ}
        </Button>
    );
}

export default CivilizationName;
