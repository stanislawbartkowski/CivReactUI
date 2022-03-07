export { }

import { FunctionComponent} from 'react'

import { SvgIconProps } from '@mui/material/SvgIcon';

export interface TSvgComponent {
    props?: SvgIconProps,
    className?: string
}

export interface TCivilizationProps {
    data: any,
    className?: string,
}

export interface TCivilizationPropsHighlight extends TCivilizationProps {
    highlight? : Array<Pos>
}

export interface ITradeProd {
    num: number,
    tradeprod: FunctionComponent,
    className: string
}

export type Pos = { row: number, col: number };

export type ResourceT = { resource: string, hv: string };

export type NameNumT = { name: string, num: number }

export type getIT = (name:string) => FunctionComponent<TSvgComponent>

