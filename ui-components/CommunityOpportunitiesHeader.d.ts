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
export declare type CommunityOpportunitiesHeaderOverridesProps = {
    CommunityOpportunitiesHeader?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Button53367?: PrimitiveOverrideProps<FlexProps>;
    "search-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector53369?: PrimitiveOverrideProps<IconProps>;
    Button53370?: PrimitiveOverrideProps<FlexProps>;
    "filter-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector53372?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CommunityOpportunitiesHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommunityOpportunitiesHeaderOverridesProps | undefined | null;
}>;
export default function CommunityOpportunitiesHeader(props: CommunityOpportunitiesHeaderProps): React.ReactElement;
