import { Center, Flex, Text, Link } from "@chakra-ui/react";
import { UDLogin } from "../../components";

export default function LandingView({ onLogin }) {
  return (
    <Center h="calc(100vh - 72px)" ml={6} mr={6}>
      <Flex direction="column" align="center">
        <Text fontSize="4xl" align="center">
          Welcome to Nfty Wallet 👋
        </Text>
        <Text fontSize="2xl" align="center">
          View your NFTs with one simple login powered by{" "}
          <Link
            href="https://unstoppabledomains.com/"
            isExternal
            color="purple.500"
          >
            Unstoppable Domains
          </Link>
        </Text>
        <UDLogin onLogin={onLogin} />
      </Flex>
    </Center>
  );
}
