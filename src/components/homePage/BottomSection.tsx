import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import VideoCardHeader from "./components/VideoCardHeader";
const header = "Fav";
import yt from "../../assets/images/garageStorage.webp";

const BottomSection = () => {
  return (
    <>
      <Grid
        templateRows="repeat(5, auto)" // 5 rows
        templateColumns="5% 1fr 40% 1fr 5%" // First and last columns are 5% wide
        gap={0} // No space between grid items
        p={4}
        borderStyle="solid" // Outer solid line
        mb={{ base: "2", md: "8" }}
      >
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray"></Box>
        <Box
          borderRight="1px dotted gray"
          borderBottom="1px dotted gray"
          gridColumn="2 / 5" // Merges 1R2C, 1R3C, 1R4C
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            fontFamily="sans"
            fontSize={{ base: "0.6rem", md: "1.1rem" }}
          >
            <strong>This is my favorite DIY project...</strong>
          </Text>
        </Box>
        <Box borderBottom="1px dotted gray"></Box>

        <Box borderBottom="1px dotted gray" borderRight="1px dotted gray"></Box>
        <Box
          gridColumn="2 / 5" // Spans columns 2, 3, and 4
          borderRight="1px dotted gray"
          borderBottom="1px dotted gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: "1", md: "4" }}
        >
          <Text
            textAlign="center"
            fontFamily="sans"
            fontSize={{ base: "0.5rem", md: "1.1rem" }}
            color="gray.700"
          >
            Although the actual construction of the house wasn’t a DIY effort, I
            was deeply involved in the process. I personally{" "}
            <strong>
              designed the layout, created the blueprint, and planned every
              detail.
            </strong>{" "}
            With the help of masons, I brought my vision to life, making it a
            truly rewarding experience!
            <br />
            Of course, there are some mistakes and drawbacks, but overall, it
            has been an invaluable learning experience...
          </Text>
        </Box>
        <Box borderBottom="1px dotted gray"></Box>

        <Box borderRight="1px dotted gray"></Box>
        <Box borderRight="1px dotted gray" gridColumn="2 / 5"></Box>
        <Box color={"white"}>.</Box>
      </Grid>

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

export default BottomSection;
