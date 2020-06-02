import React, { FunctionComponent } from 'react';
import Badge from '@material-ui/core/Badge';

import * as I from '../../../../js/I';

const defaultFProps = {
    style: { fontSize: 30},
}

const Figure: FunctionComponent<I.ITradeProd> = (props) => {

    const Figure: FunctionComponent<I.TSvgComponent> = props.tradeprod

    return <Badge className={props.className} badgeContent={props.num} color="primary">
        <Figure props={defaultFProps} />
    </Badge>

}

export default Figure