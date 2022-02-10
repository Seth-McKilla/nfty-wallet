import { Center, Flex, Text, Link } from "@chakra-ui/react";

export default function LandingView() {
  return (
    <Center h="calc(100vh - 72px)" ml={6} mr={6}>
      <Flex direction="column" align="center">
        <Text fontSize="4xl" align="center">
          This project was made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <Link
            href="https://twitter.com/SethMcKilla"
            isExternal
            color="purple.500"
          >
            Seth
          </Link>
        </Text>
        <Text fontSize="2xl" align="center" mb={6}>
          Checkout how this project was made right here{" "}
          <span role="img" aria-label="finger">
            👉
          </span>
          {""}
          <Link
            href="https://github.com/Seth-McKilla/nfty-wallet"
            isExternal
            color="purple.500"
          >
            {" "}
            Public repo
          </Link>
        </Text>
      </Flex>
    </Center>
  );
}
