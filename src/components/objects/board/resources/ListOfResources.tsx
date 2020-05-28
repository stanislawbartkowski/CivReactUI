import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import Resource from './Resource'
import * as C from '../../../../js/C'
import * as I from '../../../../js/I'

interface IListOfResources {
    list: Array<I.ResourceT>
}

interface IResource {
    res: I.ResourceT
}

const EResource: FunctionComponent<IResource> = (props) => {
    const re: I.ResourceT = props.res
    return <Resource data={re.resource}></Resource>
}

const ListOfResources: FunctionComponent<IListOfResources> = (props) => {

    const list: Array<I.ResourceT> = props.list

    return <Box>
        {C.range(list.length).map(i => (
            <EResource res={list[i]} />
        ))}
    </Box>

}

export default ListOfResources
