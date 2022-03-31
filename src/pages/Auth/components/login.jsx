import { useState, useEffect } from "react";
import {
  Text,
  Box,
  Spacer,
  Center,
  useToast,
  Button,
  Flex as FlexBox,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormAssetInput, FormInput, Toast } from "_components/";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setLoginError } from "../auth_action";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Emaiil").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const Login = ({ changeIndexHandler }) => {
  const [show, setShow] = useState(false);
  const toast = useToast();

  const { loginLoading, loginError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function changeType() {
    setShow((isPrev) => !isPrev);
  }
  useEffect(() => {
    if (loginError != "") {
      Toast(toast, loginError, "error");
      dispatch(setLoginError(""));
    }
  }, [loginError]);

  function submitHandler(values) {
    const { email, password } = values;
    dispatch(loginUser({ email, password, navigate }));
  }
  const icon = show ? (
    <ViewOffIcon ViewIcon cursor={"pointer"} onClick={changeType} />
  ) : (
    <ViewIcon cursor={"pointer"} onClick={changeType} />
  );
  return (
    <Box w={"100%"} h={"90%"}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {(props) => {
          return (
            <Form
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <FlexBox
                flexDirection="column"
                h={"100%"}
                w={"100%"}
                justifyContent="space-around"
              >
                <Box w={"100%"}>
                  <FormInput
                    type="text"
                    placeholder="Enter Your Email"
                    variant={"customOutline"}
                    label={"Email"}
                    name="email"
                  />
                  <Spacer mt={4} />
                  <Text fontWeight={600} fontFamily="Lato" fontSize={"xl"}>
                    Password
                  </Text>
                  <FormAssetInput
                    placeholder="Enter Your Password"
                    type={show ? "text" : "password"}
                    rightAsset={icon}
                    variant={"customOutline"}
                    name="password"
                    required
                  />
                </Box>
                <Center flexDirection={"column"} pb={2}>
                  <Button
                    w={"100%"}
                    h={"50px"}
                    variant={"primaryButton"}
                    isLoading={loginLoading}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Spacer mt={4} />
                  <Text
                    position="relative"
                    onClick={changeIndexHandler}
                    cursor={"pointer"}
                    variant="mutedText"
                  >
                    I'm a new member
                  </Text>
                </Center>
              </FlexBox>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default Login;
