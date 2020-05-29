import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import EResource from './EResource'

import * as C from '../../../../js/C'
import * as I from '../../../../js/I'

interface IListOfResources {
    list: Array<I.ResourceT>
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
