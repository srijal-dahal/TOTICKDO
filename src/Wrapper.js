import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "./presentation/theme";

// This is the context that will be used by the Wrapper component.
// The Wrapper component will be used to wrap the App component.
const WrapFunctionContext = createContext();
const WrapContext = createContext();

export default function Wrapper({ children }) {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <WrapContext.Provider
          value={{} }
        >
          {children}
        </WrapContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

