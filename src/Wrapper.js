import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import theme from "./presentation/theme";
// This is the context that will be used by the Wrapper component.
// The Wrapper component will be used to wrap the App component.
const WrapFunctionContext = createContext();
const WrapContext = createContext();
export function useCheckUser() {
  return useContext(WrapContext);
}
export default function Wrapper({ children }) {
  const navigate = useNavigate();
  async function validateUser() {
    const isUser = document.cookie.includes("authorization");
    const isAuthenticated = isUser !== null && isUser ? true : false;
    if (isAuthenticated) {
      navigate("/general");
    }
  }
  useEffect(() => {
    validateUser();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <WrapContext.Provider value={{}}>{children}</WrapContext.Provider>
    </ChakraProvider>
  );
}
