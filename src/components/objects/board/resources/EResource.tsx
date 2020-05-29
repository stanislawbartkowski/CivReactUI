import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Resource from './Resource'
import getResource from './getResource'

import * as C from '../../../../js/C'
import * as I from '../../../../js/I'

interface IResource {
    res: I.ResourceT
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resou: {
            marginLeft: -15,
        },
    }
    ))

const defaultIProps = {
    style: { fontSize: 25 },
}

const EResource: FunctionComponent<IResource> = (props) => {
    const re: I.ResourceT = props.res
    const classes = useStyles();
    const hv = re.hv
    if (hv == null) return <Resource data={re.resource}></Resource>
    const HV: FunctionComponent<I.TSvgComponent> = getResource(hv)
    return <Box component="span" display="flex">
        <Resource data={re.resource} />
        <HV className={classes.resou} props={defaultIProps} />
    </Box>
}

export default EResource