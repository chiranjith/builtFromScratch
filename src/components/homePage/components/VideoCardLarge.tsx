import { Box, Image } from "@chakra-ui/react";
import yt from "../../../assets/bfsLogo.png";
const VideoCardLarge = () => {
  return (
    <Box
      p={{ base: "1", md: "2" }}
      backgroundColor="gray.700"
      gridRow="1 / 3" // Spans rows 1 through 3
      gridColumn="2 / 3" // Stays in the 2nd column
      boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.2)" // Custom shadow (top, bottom, and right)
      borderRadius="sm" // Optional: Rounded corners
      overflow="hidden" // Ensures content stays within the box
      transition="all 0.3s ease-in-out" // Smooth transition effect
      position="relative" // Enables layering
      //opacity="1"
      _hover={{
        filter: "grayscale(100%) brightness(0.9) contrast(1)", // Black scale effect
        transform: "scale(1.01)", // Slight zoom-in effect
        boxShadow: "-2px 2px 12px rgba(0, 0, 0, 0.3)", // More intense shadow on hover
      }}
    >
      <Image
        src={yt}
        alt="Example Image"
        width="100%"
        height="10%"
        padding={{ base: "1px", md: "2px" }}
        // objectFit="cover"
        transition="all 0.3s ease-in-out" // Smooth scaling transition
      />
    </Box>
  );
};

export default VideoCardLarge;
