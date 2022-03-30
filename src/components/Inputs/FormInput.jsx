import { Text, Input as ChakraInput } from "@chakra-ui/react";
import { useField } from "formik";
function FormTextField({ variant, label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Text fontWeight={600} fontFamily="Lato" mb={2} fontSize={"xl"}>
        {label}
      </Text>
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
      <ChakraInput variant={variant} {...field} {...props} />
    </>
  );
}

export default FormTextField;
