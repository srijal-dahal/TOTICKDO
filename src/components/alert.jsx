import { Alert as ChakraAlert, AlertIcon } from "@chakra-ui/react";

const Alert = ({ type, message }) => {
  return (
    <ChakraAlert status={type ?? "info"}>
      <AlertIcon />
      {message ?? "Here Some Free Info :)"}
    </ChakraAlert>
  );
};
export default Alert;
