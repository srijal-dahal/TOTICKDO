import { Box, Flex as FlexBox, Text } from "@chakra-ui/react";
import { AssetInput, Image } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
const General = () => {
  return (
    <Template padding={5}>
      <Text variant={"primaryHeading"}>Hello General</Text>
      <Text
        variant={"pirmaryGreenText"}
        fontWeight={"light"}
        fontSize={"0.7rem"}
        letterSpacing={1}
      >
        7 completed and 5 completed
      </Text>
      <AssetInput
        asset={
          <Image src={TodoSvg} h={"20px"} w={"20px"} resizeMode={"cover"} />
        }
        placeHolder={"Add Todos"}
        variant={"primaryInput"}
      />
    </Template>
  );
};
export default General;
