import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

interface ChildVideo {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
}

interface ChildVideoGridProps {
  children: ChildVideo[];
}

const ChildVideoGrid = ({ children }: ChildVideoGridProps) => {
  if (!children || children.length === 0) return null;

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
        {children.map((video) => {
          console.log("Image path:", video.image); // Log the image path

          return (
            <GridItem
              key={video.id}
              boxShadow="-2px -2px 8px rgba(0, 0, 0, 0.4)"
              rounded="sm"
              //height={{base: "200px",md: "160px",lg: "210px",xl: "320px","2xl": "520px"}} //For 3 Videos/row
              height={{
                base: "220px",
                md: "110px",
                lg: "160px",
                xl: "220px",
                "2xl": "360px",
              }}
              overflow="hidden"
              display="flex"
              flexDirection="column"
              _hover={{
                filter: "grayscale(80%) brightness(0.9) contrast(1)", // Black scale effect
                transform: "scale(1.02)", // Slight zoom-in effect
                boxShadow: "-2px 4px 12px rgba(0, 0, 0, 1)", // More intense shadow on hover
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
                  src={video.image}
                  alt={video.title}
                  objectFit="cover"
                  height="100%"
                  width="100%"
                />
              </Box>

              {/* Divider */}
              <Box height="2px" bg="gray.300" />

              {/* Bottom Section (30% Height) */}
              <Box
                height="25%"
                bg="white"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                paddingLeft="2"
                borderBottomRadius="md"
              >
                <Text
                  fontWeight="bold"
                  //fontSize={{ base: "10px", md: "8px", lg: "14px" }} //For 3 Videos/row
                  fontSize={{ base: "10px", md: "6px", lg: "9px", xl: "12px" }}
                  noOfLines={1}
                >
                  {video.title}
                </Text>
                <Text
                  //fontSize={{ base: "11px", md: "9px", lg: "14px" }} //For 3 Videos/row
                  fontSize={{ base: "11px", md: "6px", lg: "9px", xl: "12px" }}
                  color="gray.600"
                  noOfLines={2}
                >
                  {video.description}
                </Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ChildVideoGrid;
