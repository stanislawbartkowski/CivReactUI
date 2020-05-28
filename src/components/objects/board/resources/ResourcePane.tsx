import React, { FunctionComponent } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

import InfoPane from '../../../../UI/InfoPane'
import * as C from '../../../../js/C'
import * as I from '../../../../js/I'
import Resource from './Resource'
import ListOfResources from './ListOfResources'


interface IResourcePane {
    resources: any,
    hutvillages: any
}

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: 11,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }),
)(Badge);


function extractHv(hv: Array<any>): Array<any> {

    const numofhuts = hv.filter(e => e.hv == "Hut").length
    const numofvillages = hv.filter(e => e.hv == "Village").length

    let res = []
    if (numofhuts > 0) res.push({ "resource": "Hut", "num": numofhuts })
    if (numofvillages > 0) res.push({ "resource": "Village", "num": numofvillages })
    return res
}

function hvToList(hv: Array<any>): Array<I.ResourceT> {

    const res: Array<I.ResourceT> = hv.map(e => ({ "hv": e.hv, "resource": e.resource }))
    return res;
}

const ResourcePane: FunctionComponent<IResourcePane> = (props) => {

    const resou: Array<any> = props.resources
    const hv: Array<any> = props.hutvillages.list
    const hvlist: Array<I.ResourceT> = hvToList(hv)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (props: any) => {
        if (hvlist.length > 0) setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const resouf = resou.filter(e => e.num > 0).concat(extractHv(hv))

    return <React.Fragment>
        <Box onClick={handleClickOpen} >
            {C.range(resouf.length).map(i => (
                <StyledBadge badgeContent={resouf[i].num} color="primary">
                    <Resource key={i} data={resouf[i].resource} />
                </StyledBadge>
            ))}
        </Box>
        <InfoPane open={open} onClose={handleClose}>
            <ListOfResources list={hvlist} />
        </InfoPane>

    </React.Fragment>
}

export default ResourcePane