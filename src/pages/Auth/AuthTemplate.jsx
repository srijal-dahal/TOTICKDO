import {
  Text,
  Flex as FlexBox,
  Box,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import SignUp from "./components/signup";
import Login from "./components/login";
import { FittedTab } from "_components";

const tabs = [
  {
    name: "SignUp",
    component: SignUp,
  },
  {
    name: "Login",
    component: Login,
  },
];
const Auth = () => {
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
        <FittedTab tabs={tabs} />
      </Box>
    </FlexBox>
  );
};
export default Auth;
