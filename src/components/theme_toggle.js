import {
  Box,
  Text,
  useTheme,
  useColorModeValue,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import style from "@emotion/styled";
const HangingThread = style.div`
    height:70px;    
    width:2px;
    background-color:${(props) => props.bgc};
`;

const ThemeToggle = () => {
  const { colors } = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <Box pos={"absolute"} right={"3rem"} top={"0"}>
      <HangingThread
        bgc={useColorModeValue(
          `${colors.primary[100]}`,
          `${colors.primary[50]}`
        )}
      />
      <IconButton
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        bg={useColorModeValue(`${colors.primary[100]}`, `${colors.sun}`)}
        onClick={toggleColorMode}
        title="Toggle theme"
        pos={"absolute"}
        right={"-1.2rem"}
        _focus={"none"}
      />
    </Box>
  );
};
export default ThemeToggle;
