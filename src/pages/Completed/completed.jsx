import React, { useState, useEffect } from "react";
import { Divider, Text, Spacer, Center, Button } from "@chakra-ui/react";
import { AssetInput, Image, List } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteTodo } from "./completed_action";

const Completed = () => {
  const dispatch = useDispatch();
  const {
    completedTodos,
    isLoading,
    incompleteTodosLength,
    completedTodosLength,
  } = useSelector((state) => state.completed);
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  function deleteHandler(todo) {
    dispatch(deleteTodo(todo));
  }
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const menuItemOptions = [
    {
      itemName: "Delete",
      submitHandler: deleteHandler,
    },
  ];
  return (
    <Template padding={5} loading={isLoading}>
      <Text variant={"primaryHeading"}>
        {completedTodosLength ?? 0} Completed Todos
      </Text>
      <Text
        color="primary.200"
        fontFamily="Lato"
        fontWeight={"light"}
        fontSize={"0.7rem"}
        letterSpacing={1}
      >
        {incompleteTodosLength ?? 0} pending and {completedTodosLength ?? 0} completed
      </Text>
      <Spacer mb={4} />
      <Center>
        <Divider w={"90%"} />
      </Center>
      <Spacer mt={5} />
      {completedTodos.length != 0 && !isLoading && (
        <>
          {completedTodos.map((todo, i) => {
            return (
              <List
                key={i}
                todo={todo}
                isChecked={todo.status}
                offsetY={i * -20}

                todoText={todo.name}
                menuItem={menuItemOptions}
              />
            );
          })}
        </>
      )}
      {!isLoading && completedTodos.length === 0 && (
        <Text
          fontWeight={"normal"}
          fontStyle={"normal"}
          color="secondary.muted"
        >
          No Currrent List
        </Text>
      )}
    </Template>
  );
};
export default Completed;
