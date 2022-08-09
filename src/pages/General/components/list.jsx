import { Divider, Spacer, Center } from "@chakra-ui/react";
import { List } from "_components";

const TodoList = ({ todos, menuItemOptions, clickHandler }) => {
  return (
    <>
      <List
        isChecked={todos[0]?.status}
        todoText={todos[0]?.name}
        todo={todos[0]}
        offsetY={0}
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
        console.log(todo)
          return (
            <List
              key={i}
              todo={todo}
              isChecked={todo?.status}
              todoText={todo?.name}
              offsetY={i * -20}
              clickHandler={clickHandler}
              menuItem={menuItemOptions}
            />
          );
        })}
    </>
  );
};
export default TodoList;
