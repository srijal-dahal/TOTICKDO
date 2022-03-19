import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Template from "../Template";
const Auth = () => {
  return (
    <Template>
      <Text>Auth</Text>
      <Link to="/user/general">Home</Link>
    </Template>
  );
};
export default Auth;
