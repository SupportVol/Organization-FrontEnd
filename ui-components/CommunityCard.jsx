/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CommunityCard(props) {
  const {
    Title = "community01",
    Membership = "20 Jan 2023",
    Description = "Opportunities focused on protecting the environment, preserving natural habitats, and combating climate change.",
    InitiativeCount = 30,
    ProjectCount = "2000",
    MemberCount = 60000,
    CommunityID,
    CommunityImageURL = "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overrides,
    ...rest
  } = props;
  const communityCardOnClick = useNavigateAction({
    type: "url",
    url: `${"/community/"}${CommunityID}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        communityCardOnClick();
      }}
      {...getOverrideProps(overrides, "CommunityCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 0px 16px"
        {...getOverrideProps(overrides, "header")}
      >
        <Image
          width="unset"
          height="192px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={CommunityImageURL}
          {...getOverrideProps(overrides, "card-header")}
        ></Image>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 16px 24px 16px"
        {...getOverrideProps(overrides, "card-body")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "content")}
        >
          <Flex
            gap="4px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title and text")}
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
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={Title}
              {...getOverrideProps(overrides, "Name")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(107,114,128,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="246px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"member since "}${Membership}`}
              {...getOverrideProps(overrides, "Date")}
            ></Text>
          </Flex>
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
            width="334px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Description}
            {...getOverrideProps(overrides, "Preview")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "status container")}
        >
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
            padding="10px 0px 10px 0px"
            {...getOverrideProps(overrides, "status bar")}
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
                children={`${InitiativeCount}${"+"}`}
                {...getOverrideProps(overrides, "30")}
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
                children="initiatives"
                {...getOverrideProps(overrides, "initiatives")}
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
                children={`${ProjectCount}${"+"}`}
                {...getOverrideProps(overrides, "2K")}
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
                children={`${MemberCount}${"+"}`}
                {...getOverrideProps(overrides, "60K")}
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
