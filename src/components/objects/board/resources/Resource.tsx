import React, { FunctionComponent } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as I from '../../../../js/I'
import getResource from './getResource'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resou: {
            padding: 1,
            textAlign: 'center',
            margin: 5,
            width: 45,
            "border-radius": "50%",
            border: "1px outset blue",
        },
    }
    ))

const defaultIProps = {
    style: { fontSize: 26 },
}

const Resource: FunctionComponent<I.TCivilizationProps> = (props) => {

    const name = props.data;
    const classes = useStyles();

    const Res: FunctionComponent<I.TSvgComponent> = getResource(name)

    return <Box className={classes.resou}>
        <Res props={defaultIProps} />
    </Box>
}

export default Resource