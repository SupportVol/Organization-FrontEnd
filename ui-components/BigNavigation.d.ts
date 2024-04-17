/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BigNavigationOverridesProps = {
    BigNavigation?: PrimitiveOverrideProps<FlexProps>;
    "users-group"?: PrimitiveOverrideProps<ViewProps>;
    Vector53473?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "chevron-down"?: PrimitiveOverrideProps<ViewProps>;
    Vector53475?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BigNavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BigNavigationOverridesProps | undefined | null;
}>;
export default function BigNavigation(props: BigNavigationProps): React.ReactElement;
