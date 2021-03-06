import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";

import * as C from '../../../../js/C';
import * as I from '../../../../js/I';
import { civClicked } from '../../../../store/civclicked/actions'
import { start_board_training } from '../../../../store/boardactions/actions'

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
    const civname: string = data
    const civ: string = C.getCivShort(civname);
    const dispatch = useDispatch();

    return (
        <Button className={classes.CircleShapeView} onClick={() => dispatch(civClicked(data, {
            titlestart: "titlestarttraining",
            doyouwanttostart: "doyouwanttostarttrainig",
            action: () => { dispatch(start_board_training(civname)); }
        }))} >
            {civ}
        </Button>
    );
}

export default CivilizationName;
