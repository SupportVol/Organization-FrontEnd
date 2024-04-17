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
export declare type BigSearchOverridesProps = {
    BigSearch?: PrimitiveOverrideProps<FlexProps>;
    "Input Field"?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "search-outline53448"?: PrimitiveOverrideProps<ViewProps>;
    Vector53449?: PrimitiveOverrideProps<IconProps>;
    "search Environmental Conservation"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "search-outline53452"?: PrimitiveOverrideProps<ViewProps>;
    Vector53453?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BigSearchProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BigSearchOverridesProps | undefined | null;
}>;
export default function BigSearch(props: BigSearchProps): React.ReactElement;
