import { useState, useEffect } from "react";
import {
  Text,
  Box,
  Spacer,
  Center,
  Button,
  useToast,
  Flex as FlexBox,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { AssetInput, Toast } from "_components/";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../auth_action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const { loginLoading, loginError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  function changeType() {
    setShow((isPrev) => !isPrev);
  }
  useEffect(() => {
    if (loginError) {
      Toast(toast, loginError, "error");
    }
  }, [loginError]);
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
            min={8}
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
            isLoading={loginLoading}
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
