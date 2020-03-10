import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box'
import grey from '@material-ui/core/colors/grey';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";

import * as I from '../../../js/I';
import * as C from '../../../js/C';
import civstring from '../../../localize/locale'
import { resume_board_game } from '../../../store/boardactions/actions';


const boxProps = {
    bgcolor: grey[200],
    m: 1,
    p: { xs: 1 },
    b: 1,
    borderRadius: "borderRadius",
    boxShadow: 1
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            marginLeft: 5
        },
        value: {
            marginLeft: 5,
            fontWeight: 700
        },
        id: {
            '&:hover': {
                background: grey[300],
                cursor: "pointer",
            }
        }

    })
);

const hoveredStyle = {
    cursor: 'initial'
}


const ResumeGame: FunctionComponent<I.TCivilizationProps> = ({ data }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    var descstring = civstring('training');
    if (data.civ.length > 1) {
        descstring = civstring('twoplayers')
    }
    var playstring = data.civ[0]
    if (data.civ.length > 1) {
        playstring = data.civ[0] + " " + data.civ[1]
    }

    const resumegame = (id: String, civ: string) => {
        C.log("resume " + id + " " + civ);
        dispatch(resume_board_game(id,civ));
    }

    return (
        <Box {...boxProps}>
            <Box component="span" className={classes.id} onClick={() => resumegame(data.gameid, data.civ[0])} border={1} p={0.5} borderRadius="borderRadius">{data.gameid}</Box>
            <span className={classes.text}>{descstring}</span>
            <span className={classes.value}>{playstring}</span>
            <span className={classes.text}>{civstring("created")}</span>
            <span className={classes.value}>{C.tstoDate(data.createtime)} </span>
            <span className={classes.text}>{civstring("lastplayed")}</span>
            <span className={classes.value}>{C.tstoDate(data.accesstime)} </span>
            <span className={classes.text}>{civstring("phase")}</span>
            <span className={classes.value}>{data.phase} </span>
            <span className={classes.text}>{civstring("round")}</span>
            <span className={classes.value}>{data.round}</span>
            <span className={classes.value}>{data.endofgame} </span>
        </Box>
    );
}
// data.gameid


export default ResumeGame;
