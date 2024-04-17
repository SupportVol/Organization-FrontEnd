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
export declare type CommunityDescriptionTagOverridesProps = {
    CommunityDescriptionTag?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Volunteer to restore and rehabilitate natural habitats such as forests, wetlands, and coastal areas to promote biodiversity and ecosystem health."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CommunityDescriptionTagProps = React.PropsWithChildren<Partial<FlexProps> & {
    tagName?: String;
    tagDescription?: String;
} & {
    overrides?: CommunityDescriptionTagOverridesProps | undefined | null;
}>;
export default function CommunityDescriptionTag(props: CommunityDescriptionTagProps): React.ReactElement;
