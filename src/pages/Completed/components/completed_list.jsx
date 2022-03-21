import { List  } from "_components";
const CompletedList = ({ menuItemOptions, completedTodos }) => {
  return (
    <>
      {completedTodos.map((todo, i) => {
        return (
          <List
            key={i}
            todo={todo}
            isChecked={todo?.status}
            offsetY={i * -20}
            todoText={todo?.name}
            menuItem={menuItemOptions}
          />
        );
      })}
    </>
  );
};
export default CompletedList;
