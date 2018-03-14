import * as React from 'react'
import { RMWC } from './Base'

declare namespace Fab {
    export interface FabProps extends RMWC.RMWCTagProps, RMWC.RippleTagProps, React.ButtonHTMLAttributes<Fab> {
        /** Make the Fab smaller*/
        mini?: boolean,
        /** Animates the FAB out of view.  When this class is removed, the FAB will return to view. */
        exited?: boolean,
        /** cssOnly Fab */
        cssOnly?: boolean,
    }
}

export declare class Fab extends React.Component<Fab.FabProps> { }

