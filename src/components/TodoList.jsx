import { HStack, Spacer, Text } from "@chakra-ui/react";
import { CheckBox, Image } from "_components";
import InfoSvg from "_assets/info.png";
function List({ isChecked, todoText, clickHandler, todo }) {
  return (
    <HStack alignItems={"center"} w="100%">
      <CheckBox
        isChecked={isChecked}
        onChange={() => {
          clickHandler(todo);
        }}
      />
      <Text
        fontFamily={"Lato"}
        lineHeight={"26px"}
        fontWeight={"normal"}
        fontStyle={"normal"}
        paddingLeft={5}
      >
        {todoText}
      </Text>
      <Spacer mr={3} />

      <Image src={InfoSvg} h={"30px"} w={"30px"} resizeMode={"contain"} />
    </HStack>
  );
}

export default List;
