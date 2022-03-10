import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
function IconMenu({ icon, menuItem,submitHandler }) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        display="flex"
        alignItems="center"
        varian={"outline"}
        icon={icon}
      />
      <MenuList>
        {menuItem.length != 0 &&
          menuItem.map((item, index) => {
            return (
              <MenuItem key={index} onClick={submitHandler}>
                {item}
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
}

export default IconMenu;
