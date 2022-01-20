import { Box, IconButton, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Header({ showNavButton = true, onShowNav }) {
  return (
    <Flex p={4} justifyContent="flex-end">
      <Box flex="1">
        {showNavButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowNav}
          />
        )}
      </Box>
      <Flex justifyContent="flex-end">
        <Text fontSize="xl">UD Login</Text>
      </Flex>
    </Flex>
  );
}
