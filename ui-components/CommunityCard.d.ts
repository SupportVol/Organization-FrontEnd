/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CommunityCardOverridesProps = {
    "30"?: PrimitiveOverrideProps<TextProps>;
    CommunityCard?: PrimitiveOverrideProps<FlexProps>;
    header?: PrimitiveOverrideProps<FlexProps>;
    "card-header"?: PrimitiveOverrideProps<ImageProps>;
    "card-body"?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    "Title and text"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Preview?: PrimitiveOverrideProps<TextProps>;
    "status container"?: PrimitiveOverrideProps<FlexProps>;
    "status bar"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 18"?: PrimitiveOverrideProps<FlexProps>;
    initiatives?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    "2K"?: PrimitiveOverrideProps<TextProps>;
    projects?: PrimitiveOverrideProps<TextProps>;
    "Frame 19"?: PrimitiveOverrideProps<FlexProps>;
    "60K"?: PrimitiveOverrideProps<TextProps>;
    members?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CommunityCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    Title?: String;
    Membership?: String;
    Description?: String;
    InitiativeCount?: Number;
    ProjectCount?: String;
    MemberCount?: Number;
    CommunityID?: String;
    CommunityImageURL?: String;
} & {
    overrides?: CommunityCardOverridesProps | undefined | null;
}>;
export default function CommunityCard(props: CommunityCardProps): React.ReactElement;
