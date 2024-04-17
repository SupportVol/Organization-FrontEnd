/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CommunityNavigationOverridesProps = {
    CommunityNavigation?: PrimitiveOverrideProps<FlexProps>;
    Button511?: PrimitiveOverrideProps<FlexProps>;
    Text512?: PrimitiveOverrideProps<TextProps>;
    Button513?: PrimitiveOverrideProps<FlexProps>;
    Text514?: PrimitiveOverrideProps<TextProps>;
    Button515?: PrimitiveOverrideProps<FlexProps>;
    Text516?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CommunityNavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommunityNavigationOverridesProps | undefined | null;
}>;
export default function CommunityNavigation(props: CommunityNavigationProps): React.ReactElement;
