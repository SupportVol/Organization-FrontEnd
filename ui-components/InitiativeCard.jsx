/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function InitiativeCard(props) {
  const {
    name,
    isNew,
    aim,
    projectCount,
    memberCount,
    organizationCount,
    initiativeID,
    communityID,
    initiativeImageURL = "https://th.bing.com/th?id=ORMS.c15f64ecc6f9d0089bd68acda9a4bed0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
    isCommunityJoined,
    isInitJoined = true,
    overrides,
    ...rest
  } = props;
  const buttonFiveThreeTwoFiveFiveOnClick = useNavigateAction({
    type: "url",
    url: `${"/community/"}${communityID}${"/initiative/"}${initiativeID}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="384px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(229,231,235,1)"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="8px"
      padding="15px 15px 19px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "InitiativeCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 8px 8px 8px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Avatar & text")}
        >
          <Image
            width="80px"
            height="80px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={initiativeImageURL}
            {...getOverrideProps(overrides, "card-header")}
          ></Image>
          <Flex
            gap="12px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="4px 0px 4px 0px"
            {...getOverrideProps(overrides, "Text52975")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 22")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(17,25,40,1)"
                lineHeight="30px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={name}
                {...getOverrideProps(overrides, "Title")}
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
                borderRadius="6px"
                padding="2px 12px 2px 12px"
                backgroundColor="rgba(237,235,254,1)"
                className={isNew == false ? "hidden" : " "}
                {...getOverrideProps(overrides, "Badge53253")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="500"
                  color="rgba(85,33,181,1)"
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
                  children="New"
                  {...getOverrideProps(overrides, "Text53254")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 17")}
            >
              <View
                width="20px"
                height="20px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "quote-outline")}
              >
                <Icon
                  width="15px"
                  height="11.67px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 15,
                    height: 11.666666030883789,
                  }}
                  paths={[
                    {
                      d: "M5 0L1.66667 0C0.7475 0 0 0.7475 0 1.66667L0 5C0 5.91917 0.7475 6.66667 1.66667 6.66667L5 6.66667L5 7.5C5 8.87833 3.87833 10 2.5 10L1.66667 10C1.20667 10 0.833333 10.3725 0.833333 10.8333C0.833333 11.2942 1.20667 11.6667 1.66667 11.6667L2.5 11.6667C4.7975 11.6667 6.66667 9.7975 6.66667 7.5L6.66667 1.66667C6.66667 0.7475 5.91917 0 5 0ZM1.66667 5L1.66667 1.66667L5 1.66667L5.00083 4.99417C5.00083 4.99417 5 4.9975 5 5L1.66667 5Z",
                      fill: "rgba(107,114,128,1)",
                      fillRule: "nonzero",
                    },
                    {
                      d: "M13.3333 0L10 0C9.08083 0 8.33333 0.7475 8.33333 1.66667L8.33333 5C8.33333 5.91917 9.08083 6.66667 10 6.66667L13.3333 6.66667L13.3333 7.5C13.3333 8.87833 12.2117 10 10.8333 10L10 10C9.54 10 9.16667 10.3725 9.16667 10.8333C9.16667 11.2942 9.54 11.6667 10 11.6667L10.8333 11.6667C13.1308 11.6667 15 9.7975 15 7.5L15 1.66667C15 0.7475 14.2525 0 13.3333 0ZM10 5L10 1.66667L13.3333 1.66667L13.3342 4.99417C13.3342 4.99417 13.3333 4.9975 13.3333 5L10 5Z",
                      fill: "rgba(107,114,128,1)",
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
                  left="12.5%"
                  right="12.5%"
                  {...getOverrideProps(overrides, "Vector53252")}
                ></Icon>
              </View>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(107,114,128,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={aim}
                {...getOverrideProps(overrides, "Supporting text")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons52982")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 18")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(75,85,99,1)"
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
            children={projectCount}
            {...getOverrideProps(overrides, "2K+")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(75,85,99,1)"
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
            children="projects"
            {...getOverrideProps(overrides, "projects")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 20")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(75,85,99,1)"
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
            children={memberCount}
            {...getOverrideProps(overrides, "5.3K+")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(75,85,99,1)"
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
            children="members"
            {...getOverrideProps(overrides, "members")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 19")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(75,85,99,1)"
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
            children={organizationCount}
            {...getOverrideProps(overrides, "20+")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(75,85,99,1)"
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
            children="organizations"
            {...getOverrideProps(overrides, "organizations")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="36px 12px 0px 12px"
        className={isCommunityJoined == false ? "hidden" : " "}
        {...getOverrideProps(overrides, "Buttons52992")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 21")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 12px 8px 12px"
            backgroundColor="rgba(26,86,219,1)"
            onClick={() => {
              buttonFiveThreeTwoFiveFiveOnClick();
            }}
            {...getOverrideProps(overrides, "Button53255")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(255,255,255,1)"
              lineHeight="18px"
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
              children={isInitJoined == true ? "Hop in" : "Take a quick peek"}
              {...getOverrideProps(overrides, "Text53257")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="34px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="6px 6px 6px 6px"
          backgroundColor="rgba(229,231,235,1)"
          className={isInitJoined == false ? "hidden" : ""}
          {...getOverrideProps(overrides, "Button53261")}
        >
          <View
            width="16px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "messages-outline")}
          >
            <Icon
              width="13.33px"
              height="12px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.333333969116211,
                height: 12,
              }}
              paths={[
                {
                  d: "M12 2.66667L10 2.66667L10 4L12 4L12 8.66667L10.6667 8.66667C10.4899 8.66667 10.3203 8.7369 10.1953 8.86193C10.0702 8.98695 10 9.15652 10 9.33333L10 10L8.4 8.8C8.2846 8.71345 8.14425 8.66667 8 8.66667L5.33333 8.66667L5.33333 8.33333L4.13333 9.23467C4.24064 9.46256 4.4103 9.6554 4.62267 9.79084C4.83505 9.92629 5.08145 9.99881 5.33333 10L7.778 10L10.2667 11.8667C10.3821 11.9532 10.5224 12 10.6667 12C10.8435 12 11.013 11.9298 11.1381 11.8047C11.2631 11.6797 11.3333 11.5101 11.3333 11.3333L11.3333 10L12 10C12.3536 10 12.6928 9.85952 12.9428 9.60948C13.1929 9.35943 13.3333 9.02029 13.3333 8.66667L13.3333 4C13.3333 3.64638 13.1929 3.30724 12.9428 3.05719C12.6928 2.80714 12.3536 2.66667 12 2.66667Z",
                  fill: "rgba(31,42,55,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M2.66667 9.33333C2.48986 9.33333 2.32029 9.2631 2.19526 9.13807C2.07024 9.01305 2 8.84348 2 8.66667L2 7.33333L1.33333 7.33333C0.979711 7.33333 0.640573 7.19286 0.390524 6.94281C0.140476 6.69276 2.96059e-16 6.35362 0 6L0 1.33333C-1.4803e-16 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 2.96059e-16 1.33333 0L8 0C8.35362 2.96059e-16 8.69276 0.140476 8.94281 0.390524C9.19286 0.640573 9.33333 0.979711 9.33333 1.33333L9.33333 6C9.33333 6.35362 9.19286 6.69276 8.94281 6.94281C8.69276 7.19286 8.35362 7.33333 8 7.33333L5.55533 7.33333L3.06667 9.2C2.95127 9.28655 2.81091 9.33333 2.66667 9.33333ZM1.33333 1.33333L1.33333 6L2.66667 6C2.84348 6 3.01305 6.07024 3.13807 6.19526C3.2631 6.32029 3.33333 6.48986 3.33333 6.66667L3.33333 7.33333L4.93333 6.13333C5.04873 6.04679 5.18909 6 5.33333 6L8 6L8 1.33333L1.33333 1.33333Z",
                  fill: "rgba(31,42,55,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector53268")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="500"
            color="rgba(31,42,55,1)"
            lineHeight="18px"
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
            children="messages"
            {...getOverrideProps(overrides, "Text53263")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="34px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="6px 6px 6px 6px"
          backgroundColor="rgba(229,231,235,1)"
          className={isInitJoined == false ? "hidden" : ""}
          {...getOverrideProps(overrides, "Button53269")}
        >
          <View
            width="16px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "clipboard")}
          >
            <Icon
              width="9.33px"
              height="12px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.333333969116211,
                height: 12,
              }}
              paths={[
                {
                  d: "M1.33333 1.33333L1.33333 0.583333L1.33333 1.33333ZM0 2.66667L-0.75 2.66667L0 2.66667ZM0 10.6667L-0.75 10.6667L0 10.6667ZM8 1.33333L8 0.583333L8 1.33333ZM4 2.66667L4 3.41667L4 2.66667ZM5.33333 2.66667L5.33333 3.41667L5.33333 2.66667ZM4 0L4 -0.75L4 0ZM5.33333 0L5.33333 -0.75L5.33333 0ZM2.66667 0.583333L1.33333 0.583333L1.33333 2.08333L2.66667 2.08333L2.66667 0.583333ZM1.33333 0.583333C0.780799 0.583333 0.250895 0.802827 -0.139806 1.19353L0.920854 2.25419C1.03025 2.14479 1.17862 2.08333 1.33333 2.08333L1.33333 0.583333ZM-0.139806 1.19353C-0.530507 1.58423 -0.75 2.11413 -0.75 2.66667L0.75 2.66667C0.75 2.51196 0.811458 2.36358 0.920854 2.25419L-0.139806 1.19353ZM-0.75 2.66667L-0.75 10.6667L0.75 10.6667L0.75 2.66667L-0.75 2.66667ZM-0.75 10.6667C-0.75 11.2192 -0.530507 11.7491 -0.139806 12.1398L0.920854 11.0791C0.811458 10.9697 0.75 10.8214 0.75 10.6667L-0.75 10.6667ZM-0.139806 12.1398C0.250895 12.5305 0.780799 12.75 1.33333 12.75L1.33333 11.25C1.17862 11.25 1.03025 11.1885 0.920854 11.0791L-0.139806 12.1398ZM1.33333 12.75L8 12.75L8 11.25L1.33333 11.25L1.33333 12.75ZM8 12.75C8.55254 12.75 9.08244 12.5305 9.47314 12.1398L8.41248 11.0791C8.30308 11.1885 8.15471 11.25 8 11.25L8 12.75ZM9.47314 12.1398C9.86384 11.7491 10.0833 11.2192 10.0833 10.6667L8.58333 10.6667C8.58333 10.8214 8.52188 10.9697 8.41248 11.0791L9.47314 12.1398ZM10.0833 10.6667L10.0833 2.66667L8.58333 2.66667L8.58333 10.6667L10.0833 10.6667ZM10.0833 2.66667C10.0833 2.11413 9.86384 1.58423 9.47314 1.19353L8.41248 2.25419C8.52188 2.36358 8.58333 2.51196 8.58333 2.66667L10.0833 2.66667ZM9.47314 1.19353C9.08244 0.802827 8.55254 0.583333 8 0.583333L8 2.08333C8.15471 2.08333 8.30308 2.14479 8.41248 2.25419L9.47314 1.19353ZM8 0.583333L6.66667 0.583333L6.66667 2.08333L8 2.08333L8 0.583333ZM1.91667 1.33333C1.91667 1.88587 2.13616 2.41577 2.52686 2.80647L3.58752 1.74581C3.47812 1.63642 3.41667 1.48804 3.41667 1.33333L1.91667 1.33333ZM2.52686 2.80647C2.91756 3.19717 3.44747 3.41667 4 3.41667L4 1.91667C3.84529 1.91667 3.69692 1.85521 3.58752 1.74581L2.52686 2.80647ZM4 3.41667L5.33333 3.41667L5.33333 1.91667L4 1.91667L4 3.41667ZM5.33333 3.41667C5.88587 3.41667 6.41577 3.19717 6.80647 2.80647L5.74581 1.74581C5.63642 1.85521 5.48804 1.91667 5.33333 1.91667L5.33333 3.41667ZM6.80647 2.80647C7.19717 2.41577 7.41667 1.88587 7.41667 1.33333L5.91667 1.33333C5.91667 1.48804 5.85521 1.63642 5.74581 1.74581L6.80647 2.80647ZM3.41667 1.33333C3.41667 1.17862 3.47812 1.03025 3.58752 0.920854L2.52686 -0.139806C2.13616 0.250895 1.91667 0.780799 1.91667 1.33333L3.41667 1.33333ZM3.58752 0.920854C3.69692 0.811458 3.84529 0.75 4 0.75L4 -0.75C3.44747 -0.75 2.91756 -0.530507 2.52686 -0.139806L3.58752 0.920854ZM4 0.75L5.33333 0.75L5.33333 -0.75L4 -0.75L4 0.75ZM5.33333 0.75C5.48804 0.75 5.63642 0.811458 5.74581 0.920854L6.80647 -0.139806C6.41577 -0.530507 5.88587 -0.75 5.33333 -0.75L5.33333 0.75ZM5.74581 0.920854C5.85521 1.03025 5.91667 1.17862 5.91667 1.33333L7.41667 1.33333C7.41667 0.780799 7.19717 0.250895 6.80647 -0.139806L5.74581 0.920854Z",
                  stroke: "rgba(31,42,55,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector53276")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="500"
            color="rgba(31,42,55,1)"
            lineHeight="18px"
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
            children="my activity"
            {...getOverrideProps(overrides, "Text53271")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="36px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons52997")}
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
          backgroundColor="rgba(243,244,246,1)"
          {...getOverrideProps(overrides, "Badge53279")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(17,25,40,1)"
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
            children="90-days"
            {...getOverrideProps(overrides, "Text53280")}
          ></Text>
        </Flex>
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
          backgroundColor="rgba(243,244,246,1)"
          {...getOverrideProps(overrides, "Badge53281")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(17,25,40,1)"
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
            children="#NoPlastic"
            {...getOverrideProps(overrides, "Text53282")}
          ></Text>
        </Flex>
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
          backgroundColor="rgba(243,244,246,1)"
          {...getOverrideProps(overrides, "Badge53283")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(17,25,40,1)"
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
            children="#GoGreen"
            {...getOverrideProps(overrides, "Text53284")}
          ></Text>
        </Flex>
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
          backgroundColor="rgba(243,244,246,1)"
          {...getOverrideProps(overrides, "Badge53277")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(17,25,40,1)"
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
            children="#Recycle"
            {...getOverrideProps(overrides, "Text53278")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
