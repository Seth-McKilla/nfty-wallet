import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  IconButton,
} from "@chakra-ui/react";

function SidebarContent({ onClick }) {
  return (
    <VStack>
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
      <Button onClick={onClick} w="100%">
        Home
      </Button>
      <Button onClick={onClick} w="100%">
        My NFTs
      </Button>
      <Button onClick={onClick} w="100%">
        About
      </Button>
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
      bg="green.500"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent w="200px" h="100%" bg="green.500" p={5}>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
