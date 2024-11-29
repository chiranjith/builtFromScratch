import { Box, Flex } from "@chakra-ui/react";

const FavoriteProject = () => {
  return (
    <Box
      w="100%"
      //h="200px"
      h={{ base: "120px", md: "400px" }}
      bg="gray.100"
      position="relative"
      overflow="visible" // Allow child elements to overflow
      boxShadow="md"
      //borderRadius="md"
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        position="absolute"
        left="75%" // Center the stack horizontally
        transform="translateX(-50%)" // Offset to align centrally
        top="-30px" // Move the boxes up
      >
        {/* First Box */}
        <Box
          w={{ base: "100px", md: "260px" }}
          h={{ base: "100px", md: "260px" }}
          bg="blue.400"
          transform="rotate(85deg)"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          mr={{ base: "-60px", md: "-100px" }} // Overlap the boxes
          top="-30px" // Move 10px above the second box
        ></Box>
        {/* Second Box */}
        <Box
          w={{ base: "100px", md: "260px" }}
          h={{ base: "100px", md: "260px" }}
          bg="green.400"
          transform="rotate(87deg)"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          mr={{ base: "-60px", md: "-100px" }}
          top="-15px"
        ></Box>
        {/* Third Box */}
        <Box
          w={{ base: "100px", md: "260px" }}
          h={{ base: "100px", md: "260px" }}
          bg="red.400"
          transform="rotate(90deg)"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          top="10px" // Move 10px below the second box
        ></Box>
      </Flex>
    </Box>
  );
};

export default FavoriteProject;
