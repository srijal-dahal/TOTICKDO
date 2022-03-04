import { Box, Flex as FlexBox, useTheme, Text, Spacer } from "@chakra-ui/react";
import { AssetInput, Image } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
const General = () => {
  return (
    <Template padding={5}>
      <Text variant={"primaryHeading"}>Friday</Text>
      <Text
        variant={"pirmaryGreenText"}
        fontWeight={"light"}
        fontSize={"0.7rem"}
        letterSpacing={1}
      >
        7 incomplete and 5 completed
      </Text>
      <Spacer mt={5} />
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
