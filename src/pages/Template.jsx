import {
  Box,
  Flex as FlexBox,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { Tab } from "_components";
const Template = ({ children }) => {
  const { colors } = useTheme();
  const links = [
    { path: "/", name: "General" },
    { path: "/completed", name: "Completed" },
    { path: "/all_todos", name: "All Todos" },
    { path: "/about", name: "About" },
  ];
  return (
    <FlexBox
      dir="column"
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      w={"100vw"}
      boxShadow=" 2px 7px 4px rgba(0, 0, 0, 0.35)"
    >
      <Box
        h={"550px"}
        w={"550px"}
        bg={useColorModeValue(colors.secondary[100], colors.secondary[200])}
        rounded="md"
      >
        <Tab links={links} />
        {children}
      </Box>
    </FlexBox>
  );
};
export default Template;
