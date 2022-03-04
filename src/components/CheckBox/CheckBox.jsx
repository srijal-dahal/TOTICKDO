import {  Checkbox as ChakraCheckBox} from "@chakra-ui/react";

function CheckBox({ isChecked, ...props }) {
  return <ChakraCheckBox isChecked={isChecked} {...props} />;
}
export default CheckBox;
