import { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  Center,
  Flex,
  Text,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { UDLogin, Loading, Card, Modal } from "../../components";
import useOpensea from "../../hooks/useOpensea";

export default function LandingView({ onLogin, userAddress }) {
  const { loading, error, nfts } = useOpensea(userAddress);
  const { isOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [filteredNfts, setFilteredNfts] = useState([]);

  const handleChange = (e) => {
    const search = e.target.value;

    setSearch(search);
    setFilteredNfts(
      nfts.filter(({ name, collection }) => {
        const nameAndCollection = `${name} ${collection.name}`;
        return nameAndCollection.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  useEffect(() => {
    if (nfts) {
      setFilteredNfts(nfts);
    }
  }, [nfts]);

  const renderContent = () => {
    if (loading) {
      return (
        <Center h="calc(100vh - 72px)" ml={6} mr={6}>
          <Loading />
        </Center>
      );
    } else {
      return (
        <>
          <Input
            placeholder="Search NFTs..."
            w="sm"
            mt="100"
            onChange={handleChange}
            value={search}
          />
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
              "2xl": "repeat(4, 1fr)",
            }}
            gap={6}
            mt="30"
            mb="50"
          >
            {filteredNfts.map(({ name, collection, permalink, image_url }) => (
              <GridItem key={permalink}>
                <Card
                  name={name}
                  collectionName={collection.name}
                  permalink={permalink}
                  imageUrl={image_url}
                />
              </GridItem>
            ))}
          </Grid>
        </>
      );
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

      <Flex direction="column" align="center">
        {userAddress ? (
          renderContent()
        ) : (
          <>
            <Center h="calc(100vh - 72px)" ml={6} mr={6} flexDirection="column">
              <Text fontSize="4xl" align="center" mb={4}>
                Please login to view your NFT collection
              </Text>
              <UDLogin onLogin={onLogin} />
            </Center>
          </>
        )}
      </Flex>
    </>
  );
}
