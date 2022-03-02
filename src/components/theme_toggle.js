import {
  Box,
  useTheme,
  useColorModeValue,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import SunSvg from "_assets/sun.svg";
import MoonSvg from "_assets/moon.svg";
import style from "@emotion/styled";
const HangingThread = style.div`
    height:70px;    
    z-index:-1;
    width:2px;
    background-color:${(props) => props.bgc};
`;
const ThemeToggle = () => {
  const { colors } = useTheme();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box pos={"absolute"} right={"3rem"} top={"0"}>
      <HangingThread
        bgc={useColorModeValue(
          `${colors.primary[100]}`,
          `${colors.primary[50]}`
        )}
      />
      {colorMode === "light" ? (
        <Box
          height="50px"
          width="50px"
          pos={"absolute"}
          right={"-1.53rem"}
          top={"3rem"}
        >
          <Image
            src={MoonSvg}
            alt={"moon"}
            onClick={toggleColorMode}
            zIndex={5}
            height={"100%"}
            width={"100%"}
          />
        </Box>
      ) : (
        <Box
          height="50px"
          width="50px"
          pos={"absolute"}
          right={"-1.53rem"}
          top={"3.7rem"}
        >
          <Image
            src={SunSvg}
            alt={"sun"}
            onClick={toggleColorMode}
            zIndex={5}
            height={"100%"}
            width={"100%"}
          />
        </Box>
      )}

      {/* <IconButton
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        bg={useColorModeValue(`${colors.primary[100]}`, `${colors.sun}`)}
        onClick={toggleColorMode}
        title="Toggle theme"
        pos={"absolute"}
        right={"-1.2rem"}
        _focus={"none"}
      /> */}
    </Box>
  );
};
export default ThemeToggle;
