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
          <Box
            key={index}
            _focus={"none"}
            textDecoration={
              window.location.pathname === link.path ? "underline" : "none"
            }
            textDecorationColor={"primary.200"}
            textDecorationThickness={2}
            textUnderlineOffset={"14px"}
          >
            <Link as={ReactLink} to={link.path} variant={"tabLink"}>
              {link.name}
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
}
export default Tab;
