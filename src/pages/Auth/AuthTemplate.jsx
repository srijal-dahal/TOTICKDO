import { useState ,useEffect} from "react";
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

const Auth = () => {
  const [tabIndex, setTabIndex] = useState(0);
  function setIndex(index) {
    setTabIndex(index);
  }
  function changeTabIndex() {
    setTabIndex(tabIndex === 0 ? 1 : 0);
  }
  const tabs = [
    {
      name: "SignUp",
      component: SignUp,
      changeIndex: changeTabIndex,
    },
    {
      name: "Login",
      component: Login,
      changeIndex: changeTabIndex,
    },
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
        bg={useColorModeValue("secondary.100", "secondary.200")}
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <FittedTab tabs={tabs} tabIndex={tabIndex} setIndex={setIndex} />
      </Box>
    </FlexBox>
  );
};
export default Auth;
