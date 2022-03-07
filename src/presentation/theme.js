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
          _focus: "none",
          _placeholder: {
            color: "secondary.50",
          },
        },
      },
    },
  },
  Checkbox: {
    baseStyle: {
      icon: {
        color: "primary.200",
      },
      control: {
        bg: "primary.50",
        _focus: "none",
        _hover: {
          borderColor: "primary.200",
          bg: "primary.50",
        },
        _checked: {
          bg: "primary.50",
          borderColor: "none",

          _focus: "none",
          _hover: {
            borderColor: "primary.200",
            bg: "primary.50",
          },
        },
      },
    },
  },
  Link: {
    baseStyle: {
      fontFamily: "Lato",
      _hover: {
        textDecoration: "none",
        borderBottomWidth: 2,
        borderBottomColor: "primary.200",
        paddingBottom: "0.7rem",
        zIndex: "1",
      },
      _focus: "none",
    },
  },
  Divider: {
    baseStyle: (props) => ({
      bg: mode("primary.200", "primary.200")(props),
    }),
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
