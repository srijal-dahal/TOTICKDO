import { useState } from "react";
import {
  Text,
  Box,
  Spacer,
  Center,
  Button,
  Flex as FlexBox,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {useSelector,useDispatch} from "react-redux";
import {signupUser} from "../auth_action";
import { AssetInput } from "_components/";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const dispatch=useDispatch();
  function changeType() {
    setShow((isPrev) => !isPrev);
  }
  const icon = show ? (
    <ViewOffIcon ViewIcon cursor={"pointer"} onClick={changeType} />
  ) : (
    <ViewIcon cursor={"pointer"} onClick={changeType} />
  );
 
  function nameChangeHandler(e) {
    setFormValue({
      ...formValue,
      fullName: e.target.value,
    });
  }
  function emailChangeHandler(e) {
    setFormValue({
      ...formValue,
      email: e.target.value,
    });
  }
  function passwordChangeHandler(e) {
    setFormValue({
      ...formValue,
      password: e.target.value,
    });
  }
  function submitHandler(){
    const {email,password,fullName}=formValue;
    dispatch(signupUser({email,password,fullName}));
  }
  return (
    <Box w={"100%"} h={"80%"}>
      <FlexBox flexDirection="column" h={"100%"} justifyContent="space-between">
        <Box>
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Full Name
          </Text>
          <AssetInput
            placeHolder={"Enter Your FullName"}
            type={"text"}
            variant={"customOutline"}
            changeHandler={nameChangeHandler}
          />
          <Spacer mt={4} />
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Email
          </Text>
          <AssetInput
            placeHolder={"Enter Your Email"}
            type={"email"}
            variant={"customOutline"}
            changeHandler={emailChangeHandler}
          />
          <Spacer mt={4} />
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Password
          </Text>
          <AssetInput
            placeHolder={"Enter Your Password"}
            type={show ? "text" : "password"}
            rightAsset={icon}
            variant={"customOutline"}
            changeHandler={passwordChangeHandler}
          />
        </Box>
        <Center flexDirection={"column"}>
          <Button
            w={"100%"}
            h={"50px"}
            bg={"primary.200"}
            color={"primary.50"}
            _focus={"none"}
            onClick={submitHandler}
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