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
    50: "9A9CA0", // muted
    100: "#FFFFFF", // white
    200: "#3D4960", // primary thin dark
    300: "#E2E1E1", // border
  },
  sun: "#FC9449",
};

const components = {};
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
