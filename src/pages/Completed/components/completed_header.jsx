import { Divider, Text, Spacer, Center } from "@chakra-ui/react";
const CompletedHeader = ({ completedTodosLength, incompleteTodosLength }) => {
  return (
    <>
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
    </>
  );
};
export default CompletedHeader;
