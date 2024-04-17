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
export declare type CommunityBreadcrumbOverridesProps = {
    CommunityBreadcrumb?: PrimitiveOverrideProps<FlexProps>;
    home?: PrimitiveOverrideProps<ViewProps>;
    Vector53247?: PrimitiveOverrideProps<IconProps>;
    Link53238?: PrimitiveOverrideProps<FlexProps>;
    Text53239?: PrimitiveOverrideProps<TextProps>;
    "chevron-right"?: PrimitiveOverrideProps<ViewProps>;
    Vector53249?: PrimitiveOverrideProps<IconProps>;
    Link53241?: PrimitiveOverrideProps<FlexProps>;
    Text53242?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CommunityBreadcrumbProps = React.PropsWithChildren<Partial<FlexProps> & {
    Name?: String;
} & {
    overrides?: CommunityBreadcrumbOverridesProps | undefined | null;
}>;
export default function CommunityBreadcrumb(props: CommunityBreadcrumbProps): React.ReactElement;
