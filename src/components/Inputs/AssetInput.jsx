import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input as ChakraInput,
} from "@chakra-ui/react";
function AssetInput({
  leftAsset,
  placeHolder,
  variant,
  changeHandler,
  rightAsset,
  ...props
}) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={leftAsset} />
      <ChakraInput
        type="text"
        placeholder={placeHolder}
        variant={variant}
        onChange={changeHandler}
        {...props}
      />
      <InputRightElement children={rightAsset} width="4.5rem" />
    </InputGroup>
  );
}

export default AssetInput;
