import * as React from 'react'
import {RMWC} from './Base'

declare namespace Chip {
    export interface ChipIconBaseProps extends RMWC.RMWCTagProps, RMWC.RippleTagProps, React.ChipHTMLAttributes<ChipIcon> {
        leading?: boolean;
        trailing?: boolean;
    }
}
export declare class Chip extends React.Component<RMWC.SimpleBaseProps<Chip>> {}
export declare class ChipText extends React.Component<RMWC.SimpleBaseProps<ChipText>> {}
export declare class ChipIcon extends React.Component<Chip.ChipIconBaseProps> {}
export declare class ChipSet extends React.Component<RMWC.SimpleBaseProps<ChipSet>> {}
