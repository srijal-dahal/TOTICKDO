import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ECF0F4", "#253043")(props),
    },
  }),
};
const colors = {
  primary: {
    50: "#ECF0F4", // lightest
    100: "#253043", // darkest
    200: "#6FE1CB", // green
  },
  secondary: {
    50: "#9A9CA0", // muted
    100: "#FFFFFF", // white
    200: "#3D4960", // primary thin dark
    300: "#E2E1E1", //border
  },
  sun: "#FC9449",
};

const components = {
  Text: {
    variants: {
      pirmaryGreenText: (props) => ({
        color: "primary.200",
        fontFamily: "Lato",
      }),
      primaryHeading: (props) => ({
        fontSize: "3xl",
        fontWeight: "bold",
        fontFamily: "Lato",
        color: "primary.200",
      }),
    },
  },

  Input: {
    baseStyle: {
      field: {
        bg: "primary.50",
      },
    },
    variants: {
      primaryInput: {
        field: {
          color: "secondary.50",
          borderRadius: "8px",
          _focus: {
            borderWidth: "2px",
            borderColor: "primary.200",
          },
          _placeholder: {
            color: "secondary.50",
          },
        },
      },
    },
  },
};
const config = {
  initialColorModeName: "dark",
  useSystemColorMode: true,
};

const overRide = {
  styles,
  colors,
  components,
  config,
};
const theme = extendTheme(overRide);
export default theme;
