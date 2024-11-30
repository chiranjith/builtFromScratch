import {
  Box,
  Flex,
  Link,
  Spacer,
  Image,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";

const temp = () => {
  return (
    <>
      <Flex direction="column" h="100%">
        <Box
          flex="0 0 10%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            mt={2}
            fontFamily="Geist"
            fontSize={{ base: ".8rem", md: "1.2rem" }}
          >
            {header}
          </Text>
        </Box>
        {/* Bottom Part (85%) */}
        <Box
          flex="1"
          bg="green.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="white">
            85% Height
          </Text>
        </Box>
      </Flex>

      <Image
        src={srcImg}
        alt={header}
        w="90%"
        objectFit="cover"
        transition="all 0.3s ease-in-out" // Smooth scaling transition
      />
      <Box
        backgroundColor={"white"}
        boxShadow="-2px 2px 8px rgba(0, 0, 0, 0.2)"
        transition="all 0.3s ease-in-out" // Smooth transition effect
        position="relative" // Enables layering
        height={{ base: "100px", md: "300px" }} // Set a fixed height
        overflow="hidden" // Ensure content stays within the box
        _hover={{
          filter: "grayscale(100%) brightness(0.9) contrast(1)", // Black scale effect
          transform: "scale(1.02)", // Slight zoom-in effect
          boxShadow: "-2px 2px 12px rgba(0, 0, 0, 0.3)", // More intense shadow on hover
        }}
        mb={10}
      >
        <Flex direction="column" h="100%">
          <VideoCardHeader header={header} />

          <Flex flex="1" align="center" justify="center">
            <Image
              src={yt}
              alt={header}
              //h="100%" // Ensures image height fits within allocated space
              w="60%" // Optional: Ensures image width fits container
              objectFit="cover" // Crops or fits the image appropriately
              transition="all 0.3s ease-in-out" // Smooth scaling transition
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default temp;
