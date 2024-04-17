/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CustomerListItem(props) {
  const {
    name,
    isOrganization,
    membershipDate = "20 Jan 2023",
    userImage = "https://th.bing.com/th/id/OIP.tlqeJ6TMZGok0BK-J1UcbwHaE5?w=281&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="16px 0px 16px 0px"
      {...getOverrideProps(overrides, "CustomerListItem")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "User")}
      >
        <Image
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="9999px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={userImage}
          {...getOverrideProps(overrides, "userImage")}
        ></Image>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="4px 0px 4px 0px"
            {...getOverrideProps(overrides, "Frame 23")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(17,25,40,1)"
              lineHeight="24px"
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
              children={name}
              {...getOverrideProps(overrides, "Lisa Soriano")}
            ></Text>
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
              padding="2px 10px 2px 10px"
              backgroundColor="rgba(243,244,246,1)"
              {...getOverrideProps(overrides, "Badge")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="500"
                color="rgba(17,25,40,1)"
                lineHeight="18px"
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
                className={isOrganization == false ? "hidden" : " "}
                children="Organization"
                {...getOverrideProps(overrides, "Text")}
              ></Text>
            </Flex>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(107,114,128,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="119.62px"
            height="17px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"since "}${membershipDate}`}
            {...getOverrideProps(overrides, "Email")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
