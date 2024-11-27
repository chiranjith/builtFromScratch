import { Box, Image } from "@chakra-ui/react";
import yt from "../../assets/youtube.png";
const VideoCardLarge = () => {
  return (
    <Box
      p={{ base: "16", md: "70" }}
      backgroundColor={"Black"}
      gridRow="1 / 3" // Spans rows 1 through 3
      gridColumn="2 / 3" // Stays in the 2nd column
      boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.2)" // Custom shadow (top, bottom, and right)
      borderRadius="sm" // Optional: Rounded corners
      overflow="hidden" // Ensures content stays within the box
      transition="all 0.3s ease-in-out" // Smooth transition effect
      position="relative" // Enables layering
      _hover={{
        filter: "grayscale(100%) brightness(0.95) contrast(1)", // Black scale effect
        transform: "scale(1.01)", // Slight zoom-in effect
        boxShadow: "-2px 2px 12px rgba(0, 0, 0, 0.3)", // More intense shadow on hover
      }}
    >
      <Image
        src={yt}
        alt="Example Image"
        w="100%"
        h="100%"
        objectFit="cover"
        transition="all 0.3s ease-in-out" // Smooth scaling transition
      />
    </Box>
  );
};

export default VideoCardLarge;
