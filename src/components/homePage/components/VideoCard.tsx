import { Box, Flex, Image } from "@chakra-ui/react";

interface Props {
  boxType: string;
  srcImg: string;
}
const VideoCard = ({ boxType, srcImg }: Props) => {
  const borderRadius =
    boxType === "right"
      ? { borderTopLeftRadius: "sm", borderBottomLeftRadius: "sm" }
      : boxType === "left"
      ? { borderTopRightRadius: "sm", borderBottomRightRadius: "sm" } // No radius on right
      : { borderRadius: "sm" };
  return (
    <>
      <Box
        boxShadow="-2px 2px 8px rgba(0, 0, 0, 0.4)" // Custom shadow (top, bottom, and right)
        {...borderRadius} // Apply conditional border radius
        overflow="hidden" // Ensures content stays within the box
        transition="all 0.3s ease-in-out" // Smooth transition effect
        position="relative" // Enables layering
        height={{ base: "60px", md: "275px" }} // Set a fixed height
        _hover={{
          filter: "grayscale(80%) brightness(0.9) contrast(1)", // Black scale effect
          transform: "scale(1.02)", // Slight zoom-in effect
          boxShadow: "-2px 4px 12px rgba(0, 0, 0, 1)", // More intense shadow on hover
        }}
      >
        <Flex h="100%" flex="1" align="center" justify="center">
          <Image
            src={srcImg}
            w="100%"
            //h="100%"
            overflow="hidden"
            objectFit="cover"
            transition="all 0.3s ease-in-out" // Smooth scaling transition
          />
        </Flex>
      </Box>
    </>
  );
};

export default VideoCard;
