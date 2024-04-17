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
export declare type QuickProjectCardOverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    "40"?: PrimitiveOverrideProps<TextProps>;
    QuickProjectCard?: PrimitiveOverrideProps<FlexProps>;
    Badge53095?: PrimitiveOverrideProps<FlexProps>;
    fire?: PrimitiveOverrideProps<ViewProps>;
    Vector53100?: PrimitiveOverrideProps<IconProps>;
    Text53097?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    "Avatar & text"?: PrimitiveOverrideProps<FlexProps>;
    "card-header"?: PrimitiveOverrideProps<ImageProps>;
    Text53048?: PrimitiveOverrideProps<FlexProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Badge53307?: PrimitiveOverrideProps<FlexProps>;
    Text53308?: PrimitiveOverrideProps<TextProps>;
    "Frame 17"?: PrimitiveOverrideProps<FlexProps>;
    "Supporting text"?: PrimitiveOverrideProps<TextProps>;
    Buttons53054?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2153055"?: PrimitiveOverrideProps<FlexProps>;
    "day streak"?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    "5.3K+"?: PrimitiveOverrideProps<TextProps>;
    members?: PrimitiveOverrideProps<TextProps>;
    "Frame 19"?: PrimitiveOverrideProps<FlexProps>;
    organizations?: PrimitiveOverrideProps<TextProps>;
    Buttons53064?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2153065"?: PrimitiveOverrideProps<FlexProps>;
    Button53477?: PrimitiveOverrideProps<FlexProps>;
    Text53479?: PrimitiveOverrideProps<TextProps>;
    Button53285?: PrimitiveOverrideProps<FlexProps>;
    "messages-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector53292?: PrimitiveOverrideProps<IconProps>;
    Text53287?: PrimitiveOverrideProps<TextProps>;
    Button53293?: PrimitiveOverrideProps<FlexProps>;
    clipboard?: PrimitiveOverrideProps<ViewProps>;
    Vector53300?: PrimitiveOverrideProps<IconProps>;
    Text53295?: PrimitiveOverrideProps<TextProps>;
    Buttons53069?: PrimitiveOverrideProps<FlexProps>;
    Badge53301?: PrimitiveOverrideProps<FlexProps>;
    Text53302?: PrimitiveOverrideProps<TextProps>;
    Badge53303?: PrimitiveOverrideProps<FlexProps>;
    Text53304?: PrimitiveOverrideProps<TextProps>;
    Badge53305?: PrimitiveOverrideProps<FlexProps>;
    Text53306?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QuickProjectCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
    description?: String;
    isNew?: String;
    numOfMembers?: Number;
    numOfOrgs?: Number;
    numOfDays?: Number;
    projectImageURL?: String;
    isCommunityJoined?: Boolean;
    isProjectJoined?: Boolean;
} & {
    overrides?: QuickProjectCardOverridesProps | undefined | null;
}>;
export default function QuickProjectCard(props: QuickProjectCardProps): React.ReactElement;
