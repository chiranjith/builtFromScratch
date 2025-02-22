import { Flex, Text, Box } from "@chakra-ui/react";

const ItemsHeaderVIP = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="flex-start"
      px={{ base: "2", md: "8" }}
      position="relative"
      mt={"70px"}
      mb={"2px"}
    >
      {/* Title with Overlapping Lines */}
      <Box position="relative" w="100%">
        {/* Text */}
        <Text
          fontSize={{ base: "0.9rem", md: "1.3rem" }}
          fontWeight="bold"
          fontFamily="AVGARDM"
          color={"gray.700"}
          position="absolute" // Position the text absolutely
          top={{ base: "-1.3rem", md: "-2.1rem" }} // Move the text above the lines
          left="0" // Align with the start of the thick blue line
          bg="white" // Add background to prevent line overlap
        >
          ITEM LIST
        </Text>

        {/* Dashed Line */}
        <Box
          position="absolute"
          top="0" // Align at the baseline
          w="100%"
          borderTop="1px solid gray"
          zIndex="1" // Place it below the thick line
        />

        {/* Thick Blue Line */}
        <Box
          position="absolute"
          top="-0.5" // Align with the dashed line
          bg="blue.500"
          h={{ base: "3px", md: "6px" }} // Thickness of the blue line
          w={{ base: "40px", md: "56px" }} // Set the width of the blue line to match the text
          zIndex="2" // Stack it above the dashed line
        />
      </Box>
    </Flex>
  );
};

export default ItemsHeaderVIP;
