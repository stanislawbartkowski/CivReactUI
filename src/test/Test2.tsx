import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        CircleShapeView: {
            "vertical-align": "top",
            display: "inline-block",
            height: "64px",
            width: "64px",
            "border-radius": "50%",
            background: "#ddd",
            "line-height": 2,
            color: "#555",
            "text-align": "center"
        },
    })
);

const Test2: React.FC = () => {

    const classes = useStyles();

    return (
        <div>
            Hello
        </div>
    );
}

export default Test2;
