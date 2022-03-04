import React, { useState } from "react";
import { Box, Divider, useTheme, Text, Spacer, Center } from "@chakra-ui/react";
import { AssetInput, Image, List } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
const General = () => {
  const [isChecked, setIsChecked] = useState(false);
  const todos = [
    { todo: "Do something", done: false },
    { todo: "Do something else", done: true },
    { todo: "Do something else", done: true },
  ];
  function clickHandler() {
    setIsChecked((isPrev) => !isPrev);
    console.log(isChecked);
  }
  return (
    <Template padding={5}>
      <Text variant={"primaryHeading"}>Friday</Text>
      <Text
        variant={"pirmaryGreenText"}
        fontWeight={"light"}
        fontSize={"0.7rem"}
        letterSpacing={1}
      >
        2 incomplete and 2 completed
      </Text>
      <Spacer mt={5} />
      <AssetInput
        asset={
          <Image src={TodoSvg} h={"20px"} w={"20px"} resizeMode={"contain"} />
        }
        placeHolder={"Add Todos"}
        variant={"primaryInput"}
      />
      <Spacer mt={5} />
      <List
        isChecked={isChecked}
        todoText="TodoText"
        clickHandler={clickHandler}
      />
      <Spacer mb={4} />

      <Center>
        <Divider w={"90%"} />
      </Center>
      <Spacer mt={4} />

      {todos.map((todo, i) => {
        return (
          <List
            key={i}
            isChecked={todo.done}
            todoText={todo.todo}
            clickHandler={clickHandler}
          />
        );
      })}
    </Template>
  );
};

export default General;
