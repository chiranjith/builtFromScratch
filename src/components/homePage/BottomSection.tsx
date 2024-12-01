import { Box, Grid, Text } from "@chakra-ui/react";
import FavoriteProject from "./components/FavoriteProject";

const BottomSection = () => {
  return (
    <>
      <Grid
        templateRows="repeat(5, auto)" // 5 rows
        templateColumns="5% 1fr 40% 1fr 5%" // First and last columns are 5% wide
        gap={0} // No space between grid items
        p={4}
        borderStyle="solid" // Outer solid line
        mb={{ base: "4", md: "20" }}
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
            color={"gray.600"}
            fontSize={{ base: "0.6rem", md: "1.3rem" }}
          >
            <strong>This has to be my most enjoyable DIY project!</strong>
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
            fontFamily="Segoe Print, sans-serif"
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
          </Text>
        </Box>
        <Box borderBottom="1px dotted gray"></Box>

        <Box borderRight="1px dotted gray"></Box>
        <Box borderRight="1px dotted gray" gridColumn="2 / 5"></Box>
        <Box color={"white"}>-</Box>
      </Grid>
      <FavoriteProject />
    </>
  );
};

export default BottomSection;
