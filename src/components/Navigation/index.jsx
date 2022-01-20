import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  VStack,
  IconButton,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import DarkModeToggle from "react-dark-mode-toggle";
import _ from "lodash";

function SidebarContent({ onClick }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const btnBg = useColorModeValue("white", "black");
  const btnBgHover = useColorModeValue("gray.300", "gray.800");

  const links = ["home", "collection", "about"];

  return (
    <VStack h="100%">
      <IconButton
        bg="none"
        w="100%"
        h="80px"
        _hover={{ bg: "none" }}
        _pressed={{ bg: "none" }}
        mb="4"
        onClick={onClick}
      >
        <img src="/images/logo_transparent.png" alt="logo" />
      </IconButton>
      {links.map((link, idx) => (
        <Button
          key={`${idx}-${link}`}
          onClick={onClick}
          bg={btnBg}
          _hover={{ bg: btnBgHover }}
          w="100%"
        >
          {_.startCase(link)}
        </Button>
      ))}
      <Flex grow="1" />
      <DarkModeToggle
        onChange={toggleColorMode}
        checked={colorMode === "dark"}
        size={80}
      />
    </VStack>
  );
}

export default function Navigation({ isOpen, variant, onClose }) {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="purple.400"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent w="200px" h="100%" bg="purple.400" p={5}>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
