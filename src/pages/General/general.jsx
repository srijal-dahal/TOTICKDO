import React, { useState, useEffect } from "react";
import { Divider, Text, Spacer, Center, Button } from "@chakra-ui/react";
import { AssetInput, Image, List } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, getTodos, deleteTodo } from "./general_action";
const General = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { isLoading, todos, incompleteTodosLength, completedTodosLength } =
    useSelector((state) => state.general);
  function clickHandler(todo) {
    dispatch(updateTodo(todo));
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
      <Text variant={"primaryHeading"}>{date ?? "Today"}</Text>
      <Text
        color="primary.200"
        fontFamily="Lato"
        fontWeight={"light"}
        fontSize={"0.7rem"}
        letterSpacing={1}
      >
        {incompleteTodosLength ?? 0} pending and {completedTodosLength ?? 0}{" "}
        completed
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
            menuItem={menuItemOptions}
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
                  menuItem={menuItemOptions}
                />
              );
            })}
        </>
      )}
      {!isLoading && todos.length === 0 && (
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

export default General;
