import { HStack, Spacer, Text, SlideFade } from "@chakra-ui/react";
import { CheckBox, Image, IconMenu } from "_components";
import InfoSvg from "_assets/info.png";
function List({
  isChecked,
  todoText,
  clickHandler,
  todo,
  menuItem,
  offsetY
}) {
  return (
    <SlideFade offsetY={offsetY} in={true} w={"100%"}>
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
    </SlideFade>
  );
}

export default List;
