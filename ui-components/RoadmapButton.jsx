/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function RoadmapButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="12px 20px 12px 20px"
      backgroundColor="rgba(4,108,78,1)"
      {...getOverrideProps(overrides, "RoadmapButton")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "rocket")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M9.80951 16.8859L9.99669 18.1924C10.0512 18.5789 10.2125 18.9427 10.4624 19.2428C10.7123 19.5429 11.0411 19.7675 11.4117 19.8914C11.7823 20.0153 12.1802 20.0336 12.5607 19.9442C12.9411 19.8549 13.2892 19.6614 13.5657 19.3855L15.796 17.1579C15.9716 16.9829 16.0796 16.7515 16.1009 16.5046L16.3985 13.0052C14.2933 14.3442 11.8169 15.7694 9.80951 16.8859Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M19.7256 1.54786C19.673 1.23493 19.5239 0.94618 19.2993 0.721797C19.0746 0.497415 18.7855 0.348562 18.4722 0.295953C17.4877 0.122537 16.4906 0.030851 15.491 0.021835C14.0004 -0.106212 12.5163 0.332245 11.3353 1.24959C9.46565 3.11695 5.5055 10.2031 4.27309 12.4464C4.16443 12.645 4.12342 12.8735 4.15624 13.0975C4.18905 13.3214 4.29392 13.5286 4.455 13.6878L6.3194 15.5468C6.41642 15.6456 6.53205 15.7244 6.65963 15.7784C6.78722 15.8325 6.92425 15.8609 7.06285 15.8618C7.23755 15.8622 7.40946 15.8181 7.56234 15.7337C9.80845 14.5039 16.9033 10.5486 18.7729 8.68122C20.4197 7.02917 20.0369 3.35221 19.7256 1.54786ZM15.796 7.19091C15.5018 7.48458 15.1271 7.68456 14.7191 7.76554C14.3112 7.84652 13.8884 7.80487 13.5041 7.64586C13.1199 7.48685 12.7915 7.21762 12.5604 6.87221C12.3294 6.5268 12.2061 6.12072 12.2061 5.70531C12.2061 5.28991 12.3294 4.88383 12.5604 4.53842C12.7915 4.19301 13.1199 3.92378 13.5041 3.76477C13.8884 3.60576 14.3112 3.56411 14.7191 3.64509C15.1271 3.72607 15.5018 3.92604 15.796 4.21972C15.9914 4.41478 16.1464 4.64638 16.2521 4.90128C16.3578 5.15619 16.4123 5.4294 16.4123 5.70531C16.4123 5.98123 16.3578 6.25444 16.2521 6.50935C16.1464 6.76425 15.9914 6.99584 15.796 7.19091Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M7.00502 3.61898L3.50231 3.9162C3.25565 3.93744 3.0244 4.04493 2.84929 4.21972L0.61685 6.44732C0.340412 6.7231 0.146356 7.07034 0.0564437 7.4501C-0.0334687 7.82987 -0.0156827 8.22714 0.107807 8.59737C0.231297 8.9676 0.455607 9.29616 0.755587 9.54619C1.05557 9.79623 1.41935 9.95786 1.80615 10.013L3.11428 10.1999C4.23313 8.19496 5.65904 5.7216 7.00502 3.61898Z",
              fill: "rgba(255,255,255,1)",
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
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
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
        children="Roadmap"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </Flex>
  );
}
