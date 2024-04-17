/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function CommunityBreadcrumb(props) {
  const { Name, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="0px SOLID rgba(229,231,235,1)"
      borderRadius="8px"
      padding="12px 20px 12px 20px"
      backgroundColor="rgba(235,245,255,1)"
      {...getOverrideProps(overrides, "CommunityBreadcrumb")}
      {...rest}
    >
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "home")}
      >
        <Icon
          width="16.67px"
          height="16.67px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.666667938232422,
            height: 16.666667938232422,
          }}
          paths={[
            {
              d: "M16.4325 7.74407L14.7637 6.07739L8.92323 0.243991C8.76676 0.0877637 8.55458 0 8.33333 0C8.11209 0 7.89991 0.0877637 7.74344 0.243991L1.90293 6.07739L0.234214 7.74407C0.0822291 7.90124 -0.00186948 8.11175 3.1541e-05 8.33025C0.00193256 8.54875 0.0896812 8.75776 0.244378 8.91227C0.399075 9.06678 0.608342 9.15442 0.827109 9.15632C1.04587 9.15821 1.25664 9.07422 1.414 8.92242L1.65846 8.67825L1.65846 15C1.65846 15.442 1.83428 15.8659 2.14722 16.1785C2.46017 16.4911 2.88461 16.6667 3.32718 16.6667L5.83026 16.6667C6.05154 16.6667 6.26377 16.5789 6.42024 16.4226C6.57671 16.2663 6.66462 16.0543 6.66462 15.8333L6.66462 12.5C6.66462 12.2789 6.75252 12.067 6.909 11.9107C7.06547 11.7544 7.27769 11.6666 7.49898 11.6666L9.16769 11.6666C9.38898 11.6666 9.6012 11.7544 9.75767 11.9107C9.91415 12.067 10.0021 12.2789 10.0021 12.5L10.0021 15.8333C10.0021 16.0543 10.09 16.2663 10.2464 16.4226C10.4029 16.5789 10.6151 16.6667 10.8364 16.6667L13.3395 16.6667C13.7821 16.6667 14.2065 16.4911 14.5194 16.1785C14.8324 15.8659 15.0082 15.442 15.0082 15L15.0082 8.67825L15.2527 8.92242C15.41 9.07422 15.6208 9.15821 15.8396 9.15632C16.0583 9.15442 16.2676 9.06678 16.4223 8.91227C16.577 8.75776 16.6647 8.54875 16.6666 8.33025C16.6685 8.11175 16.5844 7.90124 16.4325 7.74407Z",
              fill: "rgba(55,65,81,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector53247")}
        ></Icon>
      </View>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Link53238")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(55,65,81,1)"
          lineHeight="21px"
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
          children="Community"
          {...getOverrideProps(overrides, "Text53239")}
        ></Text>
      </Flex>
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevron-right")}
      >
        <Icon
          width="6.67px"
          height="11.67px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 6.666666507720947,
            height: 11.666666030883789,
          }}
          paths={[
            {
              d: "M1.12251 11.6667C0.903225 11.6666 0.688881 11.5983 0.50657 11.4702C0.324259 11.3422 0.182167 11.1602 0.0982581 10.9473C0.0143491 10.7344 -0.00760923 10.5002 0.0351575 10.2742C0.0779243 10.0482 0.183497 9.84057 0.338529 9.67761L3.99007 5.84049L0.338529 2.00337C0.232619 1.89588 0.148142 1.76731 0.0900264 1.62514C0.0319112 1.48298 0.00132131 1.33008 4.18665e-05 1.17536C-0.00123758 1.02064 0.0268198 0.867203 0.0825752 0.724C0.138331 0.580797 0.220668 0.450696 0.324784 0.341289C0.4289 0.231882 0.552708 0.14536 0.688985 0.0867707C0.825262 0.0281817 0.971279 -0.00130047 1.11852 4.39958e-05C1.26575 0.00138846 1.41126 0.033533 1.54655 0.0946018C1.68183 0.155671 1.80419 0.244441 1.90648 0.355733L6.342 5.01667C6.54988 5.23519 6.66667 5.53151 6.66667 5.84049C6.66667 6.14947 6.54988 6.4458 6.342 6.66431L1.90648 11.3253C1.69858 11.5438 1.41658 11.6666 1.12251 11.6667Z",
              fill: "rgba(156,163,175,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.83%"
          bottom="20.83%"
          left="33.33%"
          right="33.33%"
          {...getOverrideProps(overrides, "Vector53249")}
        ></Icon>
      </View>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Link53241")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(55,65,81,1)"
          lineHeight="21px"
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
          children={Name}
          {...getOverrideProps(overrides, "Text53242")}
        ></Text>
      </Flex>
    </Flex>
  );
}
