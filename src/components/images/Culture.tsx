import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCulture } from '../../resources/images/tokens/culture.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Culture : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCulture} viewBox="0 0 58.3575 58.3575" {...props} />)

export default Culture;
