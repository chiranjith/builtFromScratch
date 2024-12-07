import { Box, Flex, Image } from "@chakra-ui/react";
import planter from "../../../assets/images/videoGrid/planters.png";
import VideoCardHeader from "./VideoCardHeader";

interface Props {
  srcImg: string;
}

const VideoCardLarge = ({ srcImg }: Props) => {
  return (
    <Box
      gridRow="1 / 3" // Spans rows 1 through 3
      gridColumn="2 / 3" // Stays in the 2nd column
      boxShadow="-2px 2px 8px rgba(0, 0, 0, 0.4)" // Custom shadow (top, bottom, and right)
      borderRadius="sm" // Optional: Rounded corners
      overflow="hidden" // Ensures content stays within the box
      transition="all 0.3s ease-in-out" // Smooth transition effect
      position="relative" // Enables layering
      //opacity="1"
      _hover={{
        filter: "grayscale(100%) brightness(0.9) contrast(1)", // Black scale effect
        transform: "scale(1.02)", // Slight zoom-in effect
        boxShadow: "-2px 2px 12px rgba(0, 0, 0, 0.3)", // More intense shadow on hover
      }}
    >
      {/* <Flex direction="column" h="100%"> */}
      {/* <VideoCardHeader header={header} theme="dark" /> */}
      <Flex h="100%" flex="1" align="bottom" justify="center">
        <Image
          src={srcImg}
          w="100%"
          objectFit="cover"
          transition="all 0.3s ease-in-out"
        />
      </Flex>
      {/* </Flex> */}
    </Box>
  );
};

export default VideoCardLarge;
