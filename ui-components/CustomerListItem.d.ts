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
export declare type CustomerListItemOverridesProps = {
    CustomerListItem?: PrimitiveOverrideProps<FlexProps>;
    User?: PrimitiveOverrideProps<FlexProps>;
    userImage?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Frame 23"?: PrimitiveOverrideProps<FlexProps>;
    "Lisa Soriano"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CustomerListItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
    isOrganization?: Boolean;
    membershipDate?: String;
    userImage?: String;
} & {
    overrides?: CustomerListItemOverridesProps | undefined | null;
}>;
export default function CustomerListItem(props: CustomerListItemProps): React.ReactElement;
