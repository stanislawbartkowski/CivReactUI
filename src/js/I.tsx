export {}

import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface TSvgComponent {
    props: SvgIconProps,
    className? : string
}

export interface TCivilizationProps  {
    data: any,
    className? : string,
}  

export type Pos = { row : number, col : number };

export type ResourceT = { resource: string, hv: string };

