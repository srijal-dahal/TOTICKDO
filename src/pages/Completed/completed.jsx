import React, { useState, useEffect } from "react";
import { Divider, Text, Spacer, Center, Button } from "@chakra-ui/react";
import { AssetInput, Image, List, Alert } from "_components";
import Template from "../Template";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteTodo } from "./completed_action";
import { deleteTodo as deleteGeneralTodo } from "../General/general_action";
import CompletedHeader from "./components/completed_header";
import CompletedList from "./components/completed_list";
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
  }, [completedTodos]);

  function deleteHandler(todo) {
    dispatch(deleteTodo(todo));
    dispatch(deleteGeneralTodo(todo));
  }

  const menuItemOptions = [
    {
      itemName: "Delete",
      submitHandler: deleteHandler,
    },
  ];
  return (
    <Template padding={5} loading={isLoading}>
      <CompletedHeader
        incompleteTodosLength={incompleteTodosLength}
        completedTodosLength={completedTodosLength}
      />
      <Center>
        <Divider w={"90%"} />
      </Center>
      <Spacer mt={5} />
      <CompletedList
        completedTodos={completedTodos}
        menuItemOptions={menuItemOptions}
      />
      {!isLoading && completedTodos.length === 0 && (
        <Alert type="info" message={"Try Completing Todos"} />
      )}
    </Template>
  );
};
export default Completed;
