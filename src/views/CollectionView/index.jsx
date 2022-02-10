import { Center, Flex, Text, Spinner } from "@chakra-ui/react";
import { UDLogin, Card } from "../../components";
import useOpensea from "../../hooks/useOpensea";

export default function LandingView({ onLogin, userAddress }) {
  userAddress = "0x9C0177e8dDA1D562149F33B6Af8014228ca11E44";
  const { loading, error, nfts } = useOpensea(userAddress);

  return (
    <Center h="calc(100vh - 72px)" ml={6} mr={6}>
      <Flex direction="column" align="center">
        {true ? (
          <Card />
        ) : (
          <>
            <Text fontSize="4xl" align="center" mb={4}>
              Please login to view your NFT collection
            </Text>
            <UDLogin onLogin={onLogin} />
          </>
        )}
      </Flex>
    </Center>
  );
}
