/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CommunityNavigation(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      width="294px"
      height="49px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="4px 8.25px 4px 8.25px"
      backgroundColor="rgba(243,244,246,1)"
      {...getOverrideProps(overrides, "CommunityNavigation")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="32px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        borderRadius="8px"
        padding="6px 12px 6px 12px"
        backgroundColor="rgba(107,114,128,1)"
        {...getOverrideProps(overrides, "Button511")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="12px"
          textAlign="left"
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
          children="About"
          {...getOverrideProps(overrides, "Text512")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        borderRadius="8px"
        padding="6px 12px 6px 12px"
        {...getOverrideProps(overrides, "Button513")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="500"
          color="rgba(17,25,40,1)"
          lineHeight="12px"
          textAlign="left"
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
          children="Opportunities"
          {...getOverrideProps(overrides, "Text514")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        borderRadius="8px"
        padding="6px 12px 6px 12px"
        {...getOverrideProps(overrides, "Button515")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="500"
          color="rgba(17,25,40,1)"
          lineHeight="12px"
          textAlign="left"
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
          children="Members"
          {...getOverrideProps(overrides, "Text516")}
        ></Text>
      </Flex>
    </Flex>
  );
}
