import { Image, Box, Link } from "@chakra-ui/react";

export default function Card({ name, collectionName, permalink, imageUrl }) {
  return (
    <Link href={permalink} isExternal style={{ textDecoration: "none" }}>
      <Box
        w="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{
          borderColor: "purple.500",
          color: "purple.500",
          stroke: "blue",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          w="xs"
          h="300px"
          src={imageUrl}
          fallbackSrc="/images/placeholder.jpg"
          alt={name}
          fit="cover"
        />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box>{collectionName}</Box>
        </Box>
      </Box>
    </Link>
  );
}
