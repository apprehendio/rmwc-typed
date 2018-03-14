import * as React from 'react'
import { RMWC } from './Base'

declare namespace Menu {
    export interface MenuProps extends RMWC.SimpleBaseProps<Menu> {
        /** Whether or not the Menu is open. */
        open?: boolean,
        /** Callback that fires when the Menu closes. */
        onClose?: (evt: Event) => any,
        /** Callback that fires when a Menu item is selected. */
        onSelected?: (evt: Event) => any,
        /** Manually position the menu to one of the corners */
        achorCorner?: string,
    }
}

export declare class MenuItem extends React.Component<RMWC.SimpleBaseProps<MenuItem>> { }
export declare class Menu extends React.Component<Menu.MenuProps> { }
