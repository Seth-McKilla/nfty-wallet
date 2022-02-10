import { Image, Box } from "@chakra-ui/react";

export default function Card({ name, imageUrl, price }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={name} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>{price}</Box>
      </Box>
    </Box>
  );
}
