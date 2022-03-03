import {
  useTheme,
  InputGroup,
  InputLeftElement,
  Input as ChakraInput,
} from "@chakra-ui/react";
function AssetInput({ asset, placeHolder, variant }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={asset} />
      <ChakraInput type="text" placeholder={placeHolder} variant={variant}  />
    </InputGroup>
  );
}

export default AssetInput;
