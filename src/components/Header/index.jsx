import {
  Box,
  IconButton,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function Header({
  showNavButton = true,
  onShowNav,
  onLogin,
  onLogout,
  user,
}) {
  return (
    <Flex p={4} justifyContent="flex-end">
      <Box flex="1">
        {showNavButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            variant="outline"
            onClick={onShowNav}
            border="2px"
            borderColor="black"
          />
        )}
      </Box>
      <Flex justifyContent="flex-end">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
