/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type InitiativeCardOverridesProps = {
    InitiativeCard?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    "Avatar & text"?: PrimitiveOverrideProps<FlexProps>;
    "card-header"?: PrimitiveOverrideProps<ImageProps>;
    Text52975?: PrimitiveOverrideProps<FlexProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Badge53253?: PrimitiveOverrideProps<FlexProps>;
    Text53254?: PrimitiveOverrideProps<TextProps>;
    "Frame 17"?: PrimitiveOverrideProps<FlexProps>;
    "quote-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector53252?: PrimitiveOverrideProps<IconProps>;
    "Supporting text"?: PrimitiveOverrideProps<TextProps>;
    Buttons52982?: PrimitiveOverrideProps<FlexProps>;
    "Frame 18"?: PrimitiveOverrideProps<FlexProps>;
    "2K+"?: PrimitiveOverrideProps<TextProps>;
    projects?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    "5.3K+"?: PrimitiveOverrideProps<TextProps>;
    members?: PrimitiveOverrideProps<TextProps>;
    "Frame 19"?: PrimitiveOverrideProps<FlexProps>;
    "20+"?: PrimitiveOverrideProps<TextProps>;
    organizations?: PrimitiveOverrideProps<TextProps>;
    Buttons52992?: PrimitiveOverrideProps<FlexProps>;
    "Frame 21"?: PrimitiveOverrideProps<FlexProps>;
    Button53255?: PrimitiveOverrideProps<FlexProps>;
    Text53257?: PrimitiveOverrideProps<TextProps>;
    Button53261?: PrimitiveOverrideProps<FlexProps>;
    "messages-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector53268?: PrimitiveOverrideProps<IconProps>;
    Text53263?: PrimitiveOverrideProps<TextProps>;
    Button53269?: PrimitiveOverrideProps<FlexProps>;
    clipboard?: PrimitiveOverrideProps<ViewProps>;
    Vector53276?: PrimitiveOverrideProps<IconProps>;
    Text53271?: PrimitiveOverrideProps<TextProps>;
    Buttons52997?: PrimitiveOverrideProps<FlexProps>;
    Badge53279?: PrimitiveOverrideProps<FlexProps>;
    Text53280?: PrimitiveOverrideProps<TextProps>;
    Badge53281?: PrimitiveOverrideProps<FlexProps>;
    Text53282?: PrimitiveOverrideProps<TextProps>;
    Badge53283?: PrimitiveOverrideProps<FlexProps>;
    Text53284?: PrimitiveOverrideProps<TextProps>;
    Badge53277?: PrimitiveOverrideProps<FlexProps>;
    Text53278?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InitiativeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
    isNew?: Boolean;
    aim?: String;
    projectCount?: Number;
    memberCount?: Number;
    organizationCount?: Number;
    initiativeID?: String;
    communityID?: String;
    initiativeImageURL?: String;
    isCommunityJoined?: Boolean;
    isInitJoined?: Boolean;
} & {
    overrides?: InitiativeCardOverridesProps | undefined | null;
}>;
export default function InitiativeCard(props: InitiativeCardProps): React.ReactElement;
