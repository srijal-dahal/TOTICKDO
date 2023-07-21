import {
  Box,
  useTheme,
  useColorModeValue,
  Image,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
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
    <Box pos={"absolute"} right={"3rem"} top={"0"} zIndex={100}>
      <HangingThread
        bgc={useColorModeValue(
          `${colors.primary[100]}`,
          `${colors.primary[50]}`
        )}
      />
      <Box
        height="50px"
        width="50px"
        pos={"absolute"}
        right={"-1.8rem"}
        top={colorMode === "light" ? "2.92rem" : "3.9rem"}
      >
        <IconButton
          cursor={"pointer"}
          icon={
            colorMode === "light" ? (
              <BsFillMoonFill
                size={38}
                style={{
                  rotate: "-45deg",
                }}
              />
            ) : (
              <FaSun
                size={40}
                style={{
                  color: "#FC9449",
                }}
              />
            )
          }
          background={"transparent"}
          onClick={toggleColorMode}
          _hover={"none"}
          _focus={"none"}
          _active={"none"}
        />
        {/* <Image
          src={colorMode === "light" ? MoonSvg : SunSvg}
          alt={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          height={"100%"}
          width={"100%"}
        /> */}
      </Box>
    </Box>
  );
};
export default ThemeToggle;
