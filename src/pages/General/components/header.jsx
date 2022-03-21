import { Text, Spacer, Button } from "@chakra-ui/react";
import { AssetInput, Image } from "_components";
import TodoSvg from "_assets/todos.png";

const Header = ({
  date,
  incompleteTodosLength,
  completedTodosLength,
  todo,
  onChangeHandler,
  isPostLoading,
  submitHandler,
}) => {
  return (
    <>
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
            isLoading={isPostLoading}
            onClick={submitHandler}
          >
            Add
          </Button>
        }
        changeHandler={onChangeHandler}
        placeHolder={"Add Todos"}
        variant={"primaryInput"}
      />
    </>
  );
};
export default Header;
