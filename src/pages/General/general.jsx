import React, { useState, useEffect } from "react";
import {
  Box,
  useTheme,
  Divider,
  Text,
  Spacer,
  Center,
  Button,
} from "@chakra-ui/react";
import { AssetInput, Image, List } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, getTodos } from "./action";
const General = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { error, message, isLoading, todos } = useSelector(
    (state) => state.general
  );

  function clickHandler(e, todo) {
    dispatch(updateTodo(todo));
  }
  function onChangeHandler(e) {
    setTodo(e.target.value);
  }
  function submitHandler(e) {
    dispatch(addTodo({ todo, status: false }));
    setTodo("");
  }
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Template padding={5}>
      <Text variant={"primaryHeading"}>Friday</Text>
      <Text
        color="primary.200"
        fontFamily="Lato"
        fontWeight={"light"}
        fontSize={"0.7rem"}
        letterSpacing={1}
      >
        2 incomplete and 2 completed
      </Text>
      <Spacer mt={5} />
      <AssetInput
        value={todo}
        leftAsset={
          <Image src={TodoSvg} h={"20px"} w={"20px"} resizeMode={"contain"} />
        }
        rightAsset={
          <Button
            variant={"mutedButton"}
            size={"sm"}
            h={"1.5rem"}
            onClick={submitHandler}
          >
            Add
          </Button>
        }
        changeHandler={onChangeHandler}
        placeHolder={"Add Todos"}
        variant={"primaryInput"}
      />
      <Spacer mt={5} />
      {todos.length != 0 && !isLoading && (
        <>
          <List
            isChecked={todos[0].status}
            todoText={todos[0].name}
            todo={todos[0]}
            clickHandler={clickHandler}
          />
          <Spacer mb={4} />
          <Center>
            <Divider w={"90%"} />
          </Center>
          <Spacer mt={4} />
          {todos
            .filter((todo) => todos[0] != todo)
            .map((todo, i) => {
              return (
                <List
                  key={i}
                  todo={todo}
                  isChecked={todo.status}
                  todoText={todo.name}
                  clickHandler={clickHandler}
                />
              );
            })}
        </>
      )}
      {todos.length === 0 && (
        <Text
          fontWeight={"normal"}
          fontStyle={"normal"}
          color="secondary.muted"
        >
          No Currrent List
        </Text>
      )}
      {isLoading && <Text>Loading...</Text>}
    </Template>
  );
};

export default General;
