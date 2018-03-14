import * as React from 'react'
import { RMWC } from './Base'

declare namespace TextField {
    export interface TextFieldHelpTextProps extends RMWC.SimpleBaseProps<TextFieldHelpText> {
        persistent?: boolean,
        validationMsg?: boolean
    }
    export interface TextFieldProps extends RMWC.RMWCTagProps, React.InputHTMLAttributes<TextField> {
        /** A ref for the native input. */
        inputRef?: React.Ref<any>,
        /** Disables the input. */
        disabled?: boolean,
        /** Mark the input as required. */
        requred?: boolean,
        /** Makes the TextField visual invalid.  This is sometimes automatically applied in cases where required and pattern is used. */
        invalid?: boolean,
        /** Makes the TextField dense. */
        dense?: boolean,
        /** Makes the TextField have a visual box. */
        box?: boolean,
        /** Outline the TextField */
        outlined?: boolean,
        /** A label for the input. */
        label?: React.ReactNode,
        /** Add a leading icon. */
        withLeadingIcon?: React.ReactNode,
        /** Add a trailing icon. */
        withTrailingIcon?: React.ReactNode,
        /** By default, props spread to the input. These props are for the component's root container. */
        rootProps?: Object,
        /** Makes a multiline TextField. */
        textarea?: boolean,
        /** Makes the TextField fullwidth. */
        fullwidth?: boolean,
    }
}

export declare class TextFieldIcon extends React.Component<RMWC.UseProps<TextFieldIcon>> { }
export declare class TextFieldHelpText extends React.Component<TextField.TextFieldHelpTextProps> { }
export declare class TextField extends React.Component<TextField.TextFieldProps> { }
