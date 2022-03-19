import { useState } from "react";
import {
  Text,
  Box,
  Spacer,
  Center,
  Button,
  Flex as FlexBox,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { AssetInput } from "_components/";
const SignUp = () => {
  const [show, setShow] = useState(false);
  function changeType() {
    setShow((isPrev) => !isPrev);
  }
  return (
    <Box w={"100%"} h={"80%"} >
      <FlexBox flexDirection="column" h={"100%"} justifyContent="space-between">
        <Box>
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Full Name
          </Text>
          <AssetInput placeHolder={"Enter Your FullName"} type={"text"} />
          <Spacer mt={4} />
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Email
          </Text>
          <AssetInput placeHolder={"Enter Your Email"} type={"email"} />
          <Spacer mt={4} />
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Password
          </Text>
          <AssetInput
            placeHolder={"Enter Your Password"}
            type={show ? "text" : "password"}
            rightAsset={<ViewIcon cursor={"pointer"} onClick={changeType} />}
          />
        </Box>
        <Center flexDirection={"column"}>
          <Button
            w={"100%"}
            h={"50px"}
            bg={"primary.200"}
            color={"primary.50"}
            _focus={"none"}
            _active={"none"}
            _hover={"none"}
          >
            SignUp
          </Button>
          <Spacer mt={4} />
          <Text
            fontWeight={600}
            fontFamily="Lato"
            fontSize={"md"}
            color={"secondary.50"}
          >
            I'm already a member
          </Text>
        </Center>
      </FlexBox>
    </Box>
  );
};
export default SignUp;
