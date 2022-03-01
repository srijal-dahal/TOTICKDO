import {
  Box,
  Flex as FlexBox,
  Text,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";

const Template = ({ children }) => {
  const { colors } = useTheme();
  return (
      <FlexBox
        dir="column"
        justifyContent={"center"}
        alignItems={"center"}
        h={"100vh"} w={"100vw"}
        boxShadow=" 2px 7px 4px rgba(0, 0, 0, 0.35)"
      >
        <Box
          h={"550px"}
          w={"550px"}
          bg={useColorModeValue(colors.secondary[100], colors.secondary[200])}
          rounded="md"
        >
          {children}
        </Box>
      </FlexBox>
  );
};
export default Template;
