/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CommunityDescriptionTag(props) {
  const { tagName, tagDescription, overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="237px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CommunityDescriptionTag")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="9999px"
        padding="2px 12px 2px 12px"
        backgroundColor="rgba(222,247,236,1)"
        {...getOverrideProps(overrides, "Badge")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(3,84,63,1)"
          lineHeight="21px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tagName}
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(55,65,81,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="237px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tagDescription}
        {...getOverrideProps(
          overrides,
          "Volunteer to restore and rehabilitate natural habitats such as forests, wetlands, and coastal areas to promote biodiversity and ecosystem health."
        )}
      ></Text>
    </Flex>
  );
}
