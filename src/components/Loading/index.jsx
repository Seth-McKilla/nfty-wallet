import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="purple.200"
      color="blue.500"
      size="xl"
    />
  );
}
