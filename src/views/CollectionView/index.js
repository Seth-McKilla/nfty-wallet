import { Center, Flex, Text } from "@chakra-ui/react";
import { UDLogin } from "../../components";

export default function LandingView({ onLogin, userAddress }) {
  return (
    <Center h="calc(100vh - 72px)" ml={6} mr={6}>
      <Flex direction="column" align="center">
        {userAddress ? (
          <>Logged In</>
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
