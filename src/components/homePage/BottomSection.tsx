import { Box, Grid, Text } from "@chakra-ui/react";
import FavoriteProject from "./components/FavoriteProject";

const borderStyle = "1px dashed gray";

const BottomSection = () => {
  return (
    <>
      <Grid
        templateRows="repeat(5, auto)" // 5 rows
        templateColumns="5% 1fr 40% 1fr 5%" // First and last columns are 5% wide
        gap={0} // No space between grid items
        p={4}
        borderStyle="solid" // Outer solid line
        mb={{ base: "4", md: "12" }}
      >
        <Box borderRight={borderStyle} borderBottom={borderStyle}></Box>
        <Box
          borderRight={borderStyle}
          borderBottom={borderStyle}
          gridColumn="2 / 5" // Merges 1R2C, 1R3C, 1R4C
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            fontFamily="sans"
            color={"gray.700"}
            fontSize={{ base: "0.6rem", md: "1.3rem" }}
          >
            <strong>This has to be my most enjoyable DIY project!</strong>
          </Text>
        </Box>
        <Box borderBottom={borderStyle}></Box>

        <Box borderBottom={borderStyle} borderRight={borderStyle}></Box>
        <Box
          gridColumn="2 / 5" // Spans columns 2, 3, and 4
          borderRight={borderStyle}
          borderBottom={borderStyle}
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
            This project dates back to 2012. While the house itself wasn’t built
            as a DIY project, I was heavily involved in every step of the
            process. I personally{" "}
            <strong>
              designed the layout, drafted the blueprint, and meticulously
              planned every detail.
            </strong>{" "}
            With the skilled assistance of masons, I was able to turn my vision
            into reality, making it an incredibly fulfilling experience!
          </Text>
        </Box>
        <Box borderBottom={borderStyle}></Box>

        <Box borderRight={borderStyle}></Box>
        <Box borderRight={borderStyle} gridColumn="2 / 5"></Box>
        <Box color={"white"}>-</Box>
      </Grid>
      <FavoriteProject />
      {/* <Categories /> */}
    </>
  );
};

export default BottomSection;
