import {
  Box,
  Flex as FlexBox,
  useTheme,
  useColorModeValue,
  Spacer,
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
        overflow="hidden"
      >
        <Tab links={links} />
        <Box {...rest} h="100%" w="100%" overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          }
        }}
        >
          {children}
        <Spacer mb={7}/>

        </Box>
      </Box>
    </FlexBox>
  );
};
export default Template;
