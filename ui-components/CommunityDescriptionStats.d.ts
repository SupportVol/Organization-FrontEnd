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
export declare type CommunityDescriptionStatsOverridesProps = {
    CommunityDescriptionStats?: PrimitiveOverrideProps<FlexProps>;
    "Sign Up Form"?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Stats?: PrimitiveOverrideProps<FlexProps>;
    Row53380?: PrimitiveOverrideProps<FlexProps>;
    Stat53381?: PrimitiveOverrideProps<FlexProps>;
    Heading53382?: PrimitiveOverrideProps<TextProps>;
    "Supporting text53383"?: PrimitiveOverrideProps<TextProps>;
    Stat53384?: PrimitiveOverrideProps<FlexProps>;
    Heading53385?: PrimitiveOverrideProps<TextProps>;
    "Supporting text53386"?: PrimitiveOverrideProps<TextProps>;
    Stat53387?: PrimitiveOverrideProps<FlexProps>;
    Stat53388?: PrimitiveOverrideProps<FlexProps>;
    Heading53389?: PrimitiveOverrideProps<TextProps>;
    Badge53407?: PrimitiveOverrideProps<FlexProps>;
    Text53408?: PrimitiveOverrideProps<TextProps>;
    "Supporting text53391"?: PrimitiveOverrideProps<TextProps>;
    Row53392?: PrimitiveOverrideProps<FlexProps>;
    Stat53393?: PrimitiveOverrideProps<FlexProps>;
    Heading53394?: PrimitiveOverrideProps<TextProps>;
    "Supporting text53395"?: PrimitiveOverrideProps<TextProps>;
    Stat53396?: PrimitiveOverrideProps<FlexProps>;
    Heading53397?: PrimitiveOverrideProps<TextProps>;
    "Supporting text53398"?: PrimitiveOverrideProps<TextProps>;
    Stat53399?: PrimitiveOverrideProps<FlexProps>;
    Stat53400?: PrimitiveOverrideProps<FlexProps>;
    Heading53401?: PrimitiveOverrideProps<TextProps>;
    Badge53409?: PrimitiveOverrideProps<FlexProps>;
    Text53410?: PrimitiveOverrideProps<TextProps>;
    "Supporting text53403"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CommunityDescriptionStatsProps = React.PropsWithChildren<Partial<FlexProps> & {
    projectsPerWeekCount?: Number;
    quickProjectCount?: Number;
    initiativeCount?: Number;
    memberCount?: Number;
    OrganizationCount?: Number;
    membersPerWeekCount?: Number;
} & {
    overrides?: CommunityDescriptionStatsOverridesProps | undefined | null;
}>;
export default function CommunityDescriptionStats(props: CommunityDescriptionStatsProps): React.ReactElement;
