import { Center, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { UDLogin, Loading, Card, Modal } from "../../components";
import useOpensea from "../../hooks/useOpensea";

export default function LandingView({ onLogin, userAddress }) {
  userAddress = "0x9C0177e8dDA1D562149F33B6Af8014228ca11E44";
  const { loading, error, nfts } = useOpensea(userAddress);
  console.log(nfts);
  const { isOpen, onClose } = useDisclosure();

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else {
      return nfts.map(({ name, collection, permalink, image_url }) => (
        <Card
          key={permalink}
          name={name}
          collectionName={collection.name}
          permalink={permalink}
          imageUrl={image_url}
        />
      ));
    }
  };

  return (
    <>
      <Modal
        title="Oops! Something went wrong"
        body={error}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Center h="calc(100vh - 72px)" ml={6} mr={6}>
        <Flex direction="column" align="center">
          {true ? (
            renderContent()
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
    </>
  );
}
