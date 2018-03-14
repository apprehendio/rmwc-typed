import * as React from 'react'
import { RMWC } from './Base'

declare namespace List {
    export interface ListItemProps extends RMWC.SimpleBaseProps<ListItem>, RMWC.RippleTagProps {
        /** A modifier for a selected state */
        activated?: boolean,
        /** A modifier for an activated state */
        selected?: boolean,
    }

    export interface ListItemStartDetailProps extends RMWC.SimpleBaseProps<ListItemStartDetail> {
        wrap?: boolean
    }

    export interface ListProps extends RMWC.SimpleBaseProps<List> {
        /** Reduces the padding on List items. */
        dense?: boolean,
        /** Gives more space for dual lined list items. */
        twoLine?: boolean,
        /** Makes the list start detail circular for avatars. */
        avatarList?: boolean,
        /** Makes the list non interactive */
        nonInteractive?: boolean
    }

    export interface SimpleListItemProps extends RMWC.SimpleBaseProps<SimpleListItem>, RMWC.RippleTagProps {
        /** Text for the ListItem */
        text?: React.Node,
        /** Secondary Text for the ListItem */
        secondaryText?: React.Node,
        /** A graphic icon for the ListItem. */
        graphic?: React.Node,
        /** A meta icon for the ListItem. */
        meta?: React.Node,
    }
}

export decalre class SimpleListItem extends React.Component<List.SimpleListItemProps> { }
export declare class ListItem extends React.Component<List.ListItemProps> { }
export declare class ListItemGraphic extends React.Component<RMWC.SimpleBaseProps<ListItemGraphic>> { }
export declare class ListItemMeta extends React.Component<RMWC.SimpleBaseProps<ListItemMeta>> { }
export declare class ListItemText extends React.Component<RMWC.SimpleBaseProps<ListItemText>> { }
export declare class ListItemTextSecondary extends React.Component<RMWC.SimpleBaseProps<ListItemTextSecondary>> { }
export declare class ListItemStartDetail extends React.Component<List.ListItemStartDetailProps> { }
export declare class ListItemEndDetail extends React.Component<RMWC.SimpleBaseProps<ListItemEndDetail>> { }
export declare class ListGroup extends React.Component<RMWC.SimpleBaseProps<ListGroup>> { }
export declare class ListGroupSubheader extends React.Component<RMWC.SimpleBaseProps<ListGroupSubheader>> { }
export declare class ListDivider extends React.Component<RMWC.SimpleBaseProps<ListDivider>> { }
export declare class List extends React.Component<List.ListProps> { }
