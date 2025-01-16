import { Box, Text, useBreakpointValue, Flex, Image } from "@chakra-ui/react";
import ChildVideoGrid from "./ChildVideoGrid";

interface ChildVideo {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
}

interface VideoData {
  id: number;
  title: string;
  heading: string;
  shortDesc: string;
  description: string;
  imageBanner: string;
  children: ChildVideo[];
}

interface VideoCardProps {
  videoData: VideoData;
}

const VideoBannerVLP = ({ videoData }: VideoCardProps) => {
  if (!videoData) {
    return <Text>No data available.</Text>;
  }

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="relative" width="100%" margin={0} padding={0}>
      {/* First Box */}
      <Box
        width="100%"
        bg="blue.500"
        position="relative"
        top={0}
        left={0}
        zIndex={1} // Lower z-index for background
        display="flex"
        alignItems="center"
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
        boxShadow="-1px -1px 8px rgba(0, 0, 0, 0.2)"
        width="90%"
        bg="white"
        position="absolute"
        top={{ base: "65px", md: "250px" }} // Offset below the first box
        left="5%" // Center horizontally (since 90% width, left is 5%)
        zIndex={2} // Higher z-index for foreground box
        display="flex"
        flexDirection="column" // Stack Heading and Text vertically
        alignItems="justify"
        justifyContent="flex-start" // Align content to the top of the box
        padding={{ base: "2", md: "6" }}
      >
        {/* Text inside the Second Box */}
        <Text
          textAlign="justify"
          fontWeight="bold"
          fontSize={{ base: "10px", md: "16px" }}
          mb={"1"}
        >
          {videoData.heading}
        </Text>
        <Text
          color="black"
          textAlign="justify"
          whiteSpace="pre-wrap"
          fontSize={{ base: "9px", md: "14px" }}
          mb={{ base: "6", md: "4" }}
        >
          {isMobile
            ? videoData.shortDesc
            : `${videoData.shortDesc}${videoData.description}`}
        </Text>
      </Box>

      {/* Child Video Grid */}
      <ChildVideoGrid children={videoData.children} />
    </Box>
  );
};

export default VideoBannerVLP;
