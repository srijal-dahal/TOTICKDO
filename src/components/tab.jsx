import { Flex, Box, useTheme, Link } from "@chakra-ui/react";
function Tab({ links }) {
  const { colors } = useTheme();
  return (
    <Flex
      borderBottomWidth={"0.3px"}
      borderColor={colors.secondary[300]}
      px={4}
      py={2}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      {links.map((link, index) => {
        return (
          <Box key={index}>
            <Link
              to={link.path}
              _hover={{
                textDecoration: "none",
                borderBottomWidth: 2,
                borderBottomColor: colors.primary[200],
                paddingBottom: "0.7rem",
              }}
            >
              {link.name}
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
}
export default Tab;
