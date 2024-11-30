import { Box, Flex } from "@chakra-ui/react";
import FavoriteSmallCard from "./FavoriteSmallCard";

const FavoriteProject = () => {
  return (
    <Box
      w="100%"
      //h="200px"
      h={{ base: "120px", md: "350px" }}
      bg="gray.100"
      position="relative"
      overflow="visible" // Allow child elements to overflow
      //boxShadow="md"
      mb={{ base: "4", md: "20" }}
      //borderRadius="md"
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        position="absolute"
        left="75%" // Center the stack horizontally
        transform="translateX(-50%)" // Offset to align centrally
        top="-10px" // Move the boxes up
      >
        {/* First Box */}
        <Box
          w={{ base: "100px", md: "260px" }}
          h={{ base: "100px", md: "260px" }}
          bg="blue.400"
          transform="rotate(-5deg)"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          mr={{ base: "-60px", md: "-130px" }} // Overlap the boxes
          top={{ base: "-10px", md: "-30px" }} // Move 10px above the second box
        >
          <FavoriteSmallCard srcImg="" children="1st Img" />
        </Box>
        {/* Second Box */}
        <Box
          w={{ base: "100px", md: "260px" }}
          h={{ base: "100px", md: "260px" }}
          bg="green.400"
          transform="rotate(-3deg)"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          mr={{ base: "-60px", md: "-130px" }}
          top={{ base: "-5px", md: "-15px" }}
        >
          <FavoriteSmallCard srcImg="" children="2nd Img" />
        </Box>
        {/* Third Box */}
        <Box
          w={{ base: "100px", md: "260px" }}
          h={{ base: "100px", md: "260px" }}
          bg="red.400"
          transform="rotate(0deg)"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          top={{ base: "1px", md: "10px" }}
        >
          <FavoriteSmallCard srcImg="" children="3rd Img" />
        </Box>
      </Flex>
    </Box>
  );
};

export default FavoriteProject;
