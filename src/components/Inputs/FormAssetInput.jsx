import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { useField } from "formik";
function FormAssetInput({ leftAsset, label, variant, rightAsset, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      {label != "" && (
        <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
          {label}
        </Text>
      )}
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
      <InputGroup>
        {leftAsset != null && leftAsset != undefined && (
          <InputLeftElement pointerEvents="none" children={leftAsset} />
        )}
        <ChakraInput variant={variant} {...field} {...props} />
        {rightAsset != null && rightAsset != undefined && (
          <InputRightElement children={rightAsset} width="4.5rem" />
        )}
      </InputGroup>
    </>
  );
}

export default FormAssetInput;
