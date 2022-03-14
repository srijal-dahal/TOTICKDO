import {
  Box,
  Flex as FlexBox,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { Tab } from "_components";
const Template = ({ children, ...rest }) => {
  const { colors } = useTheme();
  const links = [
    { path: "/", name: "General" },
    { path: "/completed", name: "Completed" },
    { path: "/about", name: "About" },
  ];
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
        bg={useColorModeValue(colors.secondary[100], colors.secondary[200])}
        rounded="md"
      boxShadow="lg"
      >
        <Tab links={links} />
        <Box {...rest}>{children}</Box>
      </Box>
    </FlexBox>
  );
};
export default Template;
