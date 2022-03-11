import { HStack, Spacer, Text } from "@chakra-ui/react";
import { CheckBox, Image, IconMenu } from "_components";
import InfoSvg from "_assets/info.png";
function List({ isChecked, todoText, clickHandler, todo ,menuItem}) {
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
        paddingLeft={4}
      >
        {todoText}
      </Text>
      <Spacer mr={3} />
      <IconMenu
        icon={
          <Image src={InfoSvg} h={"30px"} w={"30px"} resizeMode={"contain"} />
        }
        menuItem={menuItem}
        todo={todo}
      />
    </HStack>
  );
}

export default List;
