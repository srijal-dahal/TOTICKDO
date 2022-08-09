import React, { useState, useEffect } from "react";
import { Spacer } from "@chakra-ui/react";
import { Alert } from "_components";
import Template from "../Template";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, getTodos, deleteTodo } from "./general_action";
import TodoList from "./components/list";
import Header from "./components/header";
const General = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const {
    isLoading,
    todos,
    incompleteTodosLength,
    isPostLoading,
    completedTodosLength,
  } = useSelector((state) => state.general);
  function clickHandler(todo) {
    dispatch(updateTodo({todo,todos}));
  }
  function onChangeHandler(e) {
    setTodo(e.target.value);
  }
  function submitHandler(e) {
    dispatch(addTodo({ todo, status: false }));
    setTodo("");
  }
  function deleteHandler(todo) {
    dispatch(deleteTodo(todo));
  }
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  const date = weekDay[day];
  const menuItemOptions = [
    {
      itemName: "Delete",
      submitHandler: deleteHandler,
    },
  ];
  return (
    <Template padding={5} loading={isLoading}>
      <Header
        completedTodosLength={completedTodosLength}
        incompleteTodosLength={incompleteTodosLength}
        isPostLoading={isPostLoading}
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandler}
        todo={todo}
        date={date}
      />
      <Spacer mt={5} />
      {todos.length != 0 && (
        <TodoList
          todos={todos}
          menuItemOptions={menuItemOptions}
          clickHandler={clickHandler}
        />
      )}
      {!isLoading && todos.length === 0 && (
        <Alert type="info" message={"Try Adding Todos"} />
      )}
    </Template>
  );
};

export default General;
