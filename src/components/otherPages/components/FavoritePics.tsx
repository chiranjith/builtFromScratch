import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

interface VideoChildData {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface FavoritePicsProps {
  childrenData: VideoChildData[];
}

const FavoritePics = ({ childrenData }: FavoritePicsProps) => {
  return (
    <Box
      zIndex={3}
      position="relative"
      mt={{ base: "20", md: "20", lg: "20", xl: "100px", "2xl": "48" }} // Spacing from the previous component
      px={{ base: "4", md: "8" }} // Padding on smaller screens
      width="90%"
      maxWidth="160em" // Match your 2xl breakpoint
      left="5%"
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} // Fixed 3 columns on larger screens
        gap={{ base: "4", md: "3", lg: "4" }}
      >
        {childrenData.map((child) => (
          <GridItem
            key={""}
            //boxShadow="-1px -1px 4px rgba(0, 0, 0, 0.4)"
            //rounded="sm"
            height={{
              base: "220px",
              md: "110px",
              lg: "220px",
              xl: "280px",
              "2xl": "460px",
            }}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            _hover={{
              filter: "grayscale(80%) brightness(0.9) contrast(1)", // Black scale effect
              transform: "scale(1.2)",
              //base: { transform: "scale(1.5)" },
              boxShadow: "1px 1px 2px rgba(0, 0, 0, 1)", // More intense shadow on hover
            }}
            transition="all 0.3s ease-in-out" // Smooth transition effect
          >
            {/* Top Section (70% Height) */}
            <Box
              height="75%"
              bg="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                src={child.image}
                alt={child.title}
                objectFit="cover"
                //height="90%"
                width="100%"
              />
            </Box>

            {/* Divider */}
            {/* <Box height="2px" bg="gray.300" /> */}

            {/* Bottom Section (30% Height) */}
            <Box
              height="25%"
              bg="white"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              paddingLeft="2"
              //borderBottomRadius="md"
            >
              <Text
                fontWeight="bold"
                //fontSize={{ base: "10px", md: "8px", lg: "14px" }} //For 3 Videos/row
                fontSize={{ base: "10px", md: "6px", lg: "9px", xl: "12px" }}
                noOfLines={1}
              >
                {child.title}
              </Text>
              <Text
                //fontSize={{ base: "11px", md: "9px", lg: "14px" }} //For 3 Videos/row
                fontSize={{ base: "11px", md: "6px", lg: "9px", xl: "12px" }}
                color="gray.600"
                noOfLines={2}
              >
                {child.description}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FavoritePics;
