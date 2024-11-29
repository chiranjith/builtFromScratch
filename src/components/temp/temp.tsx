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
    </>
  );
};

export default temp;
