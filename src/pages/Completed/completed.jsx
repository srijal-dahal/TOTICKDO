import React, { useState, useEffect } from "react";
import { Divider, Text, Spacer, Center, Button } from "@chakra-ui/react";
import { AssetInput, Image, List } from "_components";
import Template from "../Template";
import TodoSvg from "_assets/todos.png";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteTodo } from "./completed_action";

const Completed = () => {
    const dispatch = useDispatch();
    const { todos, isLoading } = useSelector((state) => state.completed);
    console.log(todos);
    useEffect(() => {
        dispatch(getTodos());
    }, []);

    const [todo, setTodo] = useState("");
    function clickHandler(todo) {}
    function onChangeHandler(e) {
        setTodo(e.target.value);
    }
    function submitHandler(e) {
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
    const inCompleteTodos = todos.filter(
        (todo) => todo.status === false
    ).length;
    const completeTodos = todos.filter((todo) => todo.status === true);
    const menuItemOptions = [
        {
            itemName: "Delete",
            submitHandler: deleteHandler,
        },
    ];
    return (
        <Template padding={5}>
            <Text variant={"primaryHeading"}>
                {`${completeTodos.length} Completed` ?? "Firday"}
            </Text>
            <Text
                color="primary.200"
                fontFamily="Lato"
                fontWeight={"light"}
                fontSize={"0.7rem"}
                letterSpacing={1}
            >
                {inCompleteTodos ?? 0} incomplete todos completed
            </Text>
            <Spacer mt={5} />
            <AssetInput
                value={todo}
                leftAsset={
                    <Image
                        src={TodoSvg}
                        h={"20px"}
                        w={"20px"}
                        resizeMode={"contain"}
                    />
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
            {completeTodos.length != 0 && !isLoading && (
                <>
                    <List
                        isChecked={completeTodos[0].status}
                        todoText={completeTodos[0].name}
                        todo={todos[0]}
                        clickHandler={clickHandler}
                        menuItem={menuItemOptions}
                    />
                    <Spacer mb={4} />
                    <Center>
                        <Divider w={"90%"} />
                    </Center>
                    <Spacer mt={4} />
                    {completeTodos
                        .filter((todo) => completeTodos[0] != todo)
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
export default Completed;
