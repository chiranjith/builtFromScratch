import { Box, Text, useBreakpointValue, Flex, Image } from "@chakra-ui/react";

interface VideoChildData {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface VideoData {
  id: number;
  title: string;
  heading: string;
  image: string;
  imageBanner: string;
  shortDesc: string;
  videoUrl: string;
  description: string;
  children?: VideoChildData[]; // Assuming each video can have its own children
}

interface VideoCardProps {
  videoData: VideoData;
}

const VideoBannerVLP = ({ videoData }: VideoCardProps) => {
  if (!videoData) {
    return <Text>No data available.</Text>;
  }

  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  });

  return (
    <Box position="relative" width="100%" margin={0} padding={0}>
      {/* First Box */}
      <Box
        width="100%"
        maxWidth="160em" // Match your 2xl breakpoint
        bg="blue.500"
        position="relative"
        top={0}
        left={0}
        zIndex={1} // Lower z-index for background
        display="flex"
        alignItems="stretch"
        justifyContent="center"
      >
        <Flex w="100%" h="100%" flex="1" align="center" justify="center">
          <Image
            src={videoData.imageBanner}
            w="100%"
            overflow="hidden"
            objectFit="cover"
            transition="all 0.3s ease-in-out" // Smooth scaling transition
          />
        </Flex>
      </Box>

      {/* Second Box */}
      <Box
        boxShadow="-2px -2px 16px rgba(0, 0, 0, 0.4)"
        width="90%"
        bg="rgba(231, 231, 231, 0.6)" // Semi-transparent white background
        backdropFilter="blur(10px)" // Optional: Add a blur effect for a frosted-glass look
        position="absolute"
        top={{
          base: "60px",
          md: "125px",
          lg: "170px",
          xl: "240px",
          "2xl": "430px",
        }} // Offset below the first box
        left="5%" // Center horizontally (since 90% width, left is 5%)
        zIndex={2} // Higher z-index for foreground box
        display="flex"
        flexDirection="column" // Stack Heading and Text vertically
        alignItems="stretch"
        justifyContent="flex-start" // Align content to the top of the box
        pt={{ base: "2", md: "3" }} // Padding top
        pr={{ base: "2", md: "6" }} // Padding right
        pb={{ base: "4", md: "4" }} // Padding bottom
        pl={{ base: "2", md: "6" }} // Padding left
      >
        {/* Text inside the Second Box */}
        <Text
          textAlign="justify"
          fontWeight="bold"
          fontSize={{ base: "10px", md: "14px", lg: "16px", "2xl": "28px" }}
          mb={"1"}
        >
          {videoData.heading}
        </Text>
        <Text
          color="black"
          textAlign="justify"
          whiteSpace="pre-wrap"
          fontSize={{ base: "9px", md: "12px", lg: "14px", "2xl": "26px" }}
          mb={{ base: "6", md: "4" }}
        >
          {isMobile
            ? videoData.shortDesc
            : `${videoData.shortDesc}${videoData.description}`}
        </Text>
      </Box>
    </Box>
  );
};

export default VideoBannerVLP;
