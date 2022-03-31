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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, setSignupError } from "../auth_action";
import { FormInput, FormAssetInput, Toast } from "_components/";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50)
    .required("Full Name is required"),
  email: Yup.string().email("Invalid Emaiil").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const SignUp = ({ changeIndexHandler }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupLoading, signupError } = useSelector((state) => state.auth);
  const toast = useToast();
  function changeType() {
    setShow((isPrev) => !isPrev);
  }
  const icon = show ? (
    <ViewOffIcon ViewIcon cursor={"pointer"} onClick={changeType} />
  ) : (
    <ViewIcon cursor={"pointer"} onClick={changeType} />
  );
  useEffect(() => {
    if (signupError != "") {
      Toast(toast, signupError, "error");
      dispatch(setSignupError(""));
    }
  }, [signupError]);

  function submitHandler(values) {
    const { email, password, fullName } = values;

    dispatch(signupUser({ email, password, fullName, navigate }));
  }
  return (
    <Box w={"100%"} h={"80%"}>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {(props) => {
          return (
            <Form onSubmit={props.handleSubmit}>
              <FlexBox
                flexDirection="column"
                h={"100%"}
                w={"100%"}
                justifyContent="space-between"
              >
                <FormInput
                  type="text"
                  placeholder="Enter Your FullName"
                  variant={"customOutline"}
                  name="fullName"
                  label={"Full Name"}
                />
                <Spacer mt={4} />
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
                <Spacer mt={4} />
                <Center flexDirection={"column"}>
                  <Button
                    w={"100%"}
                    h={"50px"}
                    variant={"primaryButton"}
                    isLoading={signupLoading}
                    type="submit"
                  >
                    SignUp
                  </Button>
                  <Spacer mt={4} />
                  <Text
                    position="relative"
                    onClick={changeIndexHandler}
                    cursor={"pointer"}
                    variant="mutedText"
                  >
                    I'm already a member
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
export default SignUp;
