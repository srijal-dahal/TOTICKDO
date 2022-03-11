import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useTheme,
} from "@chakra-ui/react";
function IconMenu({ icon, menuItem ,...props}) {
  const {todo}=props;
  const validMenuItem =
    menuItem != undefined || menuItem.length != 0 ? menuItem : [];
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        display="flex"
        alignItems="center"
        variant={"iconButton"}
        icon={icon}
        bg="transparent"
      />
      <MenuList>
        {validMenuItem.map((item, index) => {
          return (
            <MenuItem key={index} onClick={()=>{item.submitHandler(todo)}}>
              {item.itemName}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default IconMenu;
