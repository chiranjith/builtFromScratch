import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";

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
          size={{ base: "md", "2xl": "lg" }}
          borderRadius="xs"
          _hover={{ bg: "blue.700" }}
          fontSize={{ base: "20px", "2xl": "24px" }}
        >
          Add all to Cart
        </Button>
        <Button
          colorScheme="orange"
          size={{ base: "md", "2xl": "lg" }}
          borderRadius="xs"
          _hover={{ bg: "black" }}
          fontSize={{ base: "20px", "2xl": "24px" }}
        >
          Create Quote
        </Button>
      </Stack>
      <Text fontSize="md" color="gray.600" mt={2}>
        Sorry, I have not integrated this with 3rd part shopping carts, please
        click on the items to navigate to the item page.
      </Text>
    </Box>
  );
};

export default AddToCartQuote;
