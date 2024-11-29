import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  boxType: string;
  srcImg: string;
  header: string;
}
const VideoCard = ({ boxType, srcImg, header }: Props) => {
  console.log("boxType:", boxType); // Debugging line to check the header
  console.log("header:", header); // Debugging line to check the header
  const borderRadius =
    boxType === "right"
      ? { borderTopLeftRadius: "sm", borderBottomLeftRadius: "sm" }
      : boxType === "left"
      ? { borderTopRightRadius: "sm", borderBottomRightRadius: "sm" } // No radius on right
      : { borderRadius: "sm" };
  return (
    <>
      <Box
        //p={{ base: ".1", md: ".5" }}
        backgroundColor={"white"}
        boxShadow="-2px 2px 8px rgba(0, 0, 0, 0.2)" // Custom shadow (top, bottom, and right)
        {...borderRadius} // Apply conditional border radius
        overflow="hidden" // Ensures content stays within the box
        transition="all 0.3s ease-in-out" // Smooth transition effect
        position="relative" // Enables layering
        height={{ base: "60px", md: "275px" }} // Set a fixed height
        _hover={{
          filter: "grayscale(100%) brightness(0.9) contrast(1)", // Black scale effect
          transform: "scale(1.02)", // Slight zoom-in effect
          boxShadow: "-2px 2px 12px rgba(0, 0, 0, 0.3)", // More intense shadow on hover
        }}
      >
        <Flex direction="column" h="100%">
          {/* Top Part (15%) */}
          <Flex flex="0 0 15%" align="center" justify="center">
            <Text
              fontSize={{ base: ".4rem", md: "1.1rem" }}
              fontWeight="bold"
              fontFamily="Geist"
            >
              {header}
            </Text>
          </Flex>

          {/* Bottom Part (85%) */}
          <Flex flex="1" align="center" justify="center">
            <Image
              src={srcImg}
              alt={header}
              w="100%"
              objectFit="cover"
              transition="all 0.3s ease-in-out" // Smooth scaling transition
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default VideoCard;
