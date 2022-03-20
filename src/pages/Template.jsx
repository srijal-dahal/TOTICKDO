import React from "react";
import {
  Box,
  Flex as FlexBox,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { Tab, Loading } from "_components";
const Template = ({ children, loading, isTab, ...rest }) => {
  const isUser = false;
  const authLinks = [
    {
      name: "Auth",
      path: "/",
    },
  ];
  const links = [
    { path: "/", name: "General" },
    { path: "/completed", name: "Completed" },
    { path: "/dev", name: "Dev" },
  ];
  const validateLinks = isUser ? authLinks : links;
  return (
    <FlexBox
      dir="column"
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      w={"100vw"}
    >
      <Box
        h={"550px"}
        w={"550px"}
        bg={useColorModeValue("secondary.100", "secondary.200")}
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <Tab links={validateLinks} />
        <Box
          {...rest}
          h="100%"
          w="100%"
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {loading && (
            <Box
              w="100%"
              h="90%"
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Loading height={300} width={300} />
            </Box>
          )}
          {!loading && children}

          <Spacer mb={7} />
        </Box>
      </Box>
    </FlexBox>
  );
};
export default Template;
