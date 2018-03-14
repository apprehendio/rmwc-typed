import * as React from 'react'
import {RMWC} from './Base'

declare namespace Provider {
    export interface ProviderBaseProps extends RMWC.RMWCTagProps {
        buttonDefaultRipple?: boolean;
        listItemDefaultRipple?: boolean;
        iconClassNameBase?: string;
        iconClassNamePrefix?: string;
        iconStrategy?: string;
        iconRender?: undefined;
    }
}
export declare class Provider extends React.Component<Provider.ProviderBaseProps> {}
