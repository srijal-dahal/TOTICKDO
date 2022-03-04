import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
function Tab({ links }) {
  return (
    <Flex
      borderBottomWidth={"0.3px"}
      borderColor={"secondary.300"}
      px={"7rem"}
      py={2}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      {links.map((link, index) => {
        return (
          <Box key={index} _focus={"none"}>
            <Link as={ReactLink} to={link.path}>
              {link.name}
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
}
export default Tab;
