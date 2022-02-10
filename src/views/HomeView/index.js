import { Center, Flex, Text, Link } from "@chakra-ui/react";
import { UDLogin } from "../../components";

export default function LandingView({ onLogin, showLogin }) {
  return (
    <Center h="calc(100vh - 72px)" ml={6} mr={6}>
      <Flex direction="column" align="center">
        <Text fontSize="4xl" align="center">
          Welcome to Nfty Wallet 👋
        </Text>
        <Text fontSize="2xl" align="center" mb={6}>
          View your NFTs with one simple login powered by{" "}
          <Link
            href="https://unstoppabledomains.com/"
            isExternal
            color="purple.500"
          >
            Unstoppable Domains
          </Link>
        </Text>
        {showLogin ? (
          <UDLogin onLogin={onLogin} />
        ) : (
          <Text fontSize="2xl" align="center">
            <span role="img" aria-label="finger">
              👈
            </span>{" "}
            Check out your collection from the menu over there
          </Text>
        )}
      </Flex>
    </Center>
  );
}
