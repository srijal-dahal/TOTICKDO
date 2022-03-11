import { Box, Image as ChakraImage } from "@chakra-ui/react";
function Image({ src, h, w, resizeMode }) {
  return (
    <Box h={h} w={w} >
      <ChakraImage src={src} h={"100%"} w={"100%"} objectFit={resizeMode} />
    </Box>
  );
}
export default Image;
