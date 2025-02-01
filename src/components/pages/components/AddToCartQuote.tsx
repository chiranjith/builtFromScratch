import { Box, Button, Divider, Stack } from "@chakra-ui/react";

const AddToCartQuote = () => {
  return (
    <Box
      width="100%"
      textAlign="center"
      py={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Horizontal Line */}
      <Divider width="96%" borderColor="gray.700" mb={6} />

      {/* Buttons */}
      <Stack direction="row" spacing={4} mb={2}>
        <Button
          colorScheme="blue"
          size="md"
          borderRadius="xs"
          _hover={{ bg: "blue.700" }}
        >
          Add to Cart
        </Button>
        <Button
          colorScheme="orange"
          size="md"
          borderRadius="xs"
          _hover={{ bg: "black" }}
        >
          Create Quote
        </Button>
      </Stack>
    </Box>
  );
};

export default AddToCartQuote;
