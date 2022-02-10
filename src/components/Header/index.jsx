import {
  Box,
  IconButton,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { UDLogin } from "..";

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
          {user ? (
            <>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                w={200}
                pl={0}
              >
                <Flex direction="row" alignItems="center">
                  <Image
                    src="https://docs.unstoppabledomains.com/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MF1CaqLXCtpg4trwHjh%2F-MjjpJ6gM6yNltRf0-yc%2F-MjjudfnwJ7Gm_roYy5j%2Fdefault-icon.png?alt=media&amp;token=34f41fe8-5e26-45f2-ace2-6dffb113c031"
                    w={35}
                    h={35}
                    mr={3}
                  />
                  <Text fontSize="sm" isTruncated>
                    {user.wallet_address}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogout}>Disconnect</MenuItem>
              </MenuList>
            </>
          ) : (
            <UDLogin onLogin={onLogin} />
          )}
        </Menu>
      </Flex>
    </Flex>
  );
}
