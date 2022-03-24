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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../auth_action";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function changeType() {
    setShow((isPrev) => !isPrev);
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
  function submitHandler() {
    const { email, password, fullName } = formValue;
    dispatch(loginUser({ email, password, fullName, navigate }));
  }
  return (
    <Box w={"100%"} h={"90%"}>
      <FlexBox flexDirection="column" h={"100%"} justifyContent="space-around">
        <Box>
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Email
          </Text>
          <AssetInput
            placeHolder={"Enter Your Email"}
            type={"email"}
            changeHandler={emailChangeHandler}
            variant={"customOutline"}
          />
          <Spacer mt={4} />
          <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
            Password
          </Text>
          <AssetInput
            placeHolder={"Enter Your Password"}
            type={show ? "text" : "password"}
            variant={"customOutline"}
            rightAsset={<ViewIcon cursor={"pointer"} onClick={changeType} />}
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
            Login
          </Button>
          <Spacer mt={4} />
          <Text
            fontWeight={600}
            fontFamily="Lato"
            fontSize={"md"}
            color={"secondary.50"}
          >
            I'm a new member
          </Text>
        </Center>
      </FlexBox>
    </Box>
  );
};
export default Login;
