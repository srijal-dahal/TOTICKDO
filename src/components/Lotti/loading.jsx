import { useColorMode } from "@chakra-ui/react";
import { DarkModeLoading, LightModeLoading } from "_assets/lotti/index";
import Lottie from "react-lottie";
  
const Loading = ({ height, width, ...props }) => {
  const { colorMode } = useColorMode();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: colorMode === "light" ? LightModeLoading : DarkModeLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={height} width={width} />
    </>
  );
};
export default Loading;
