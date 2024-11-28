import { Box, Image } from "@chakra-ui/react";
import yt from "../../../assets/youtube.png";

interface Props {
  boxType: string;
}
const VideoCard = ({ boxType }: Props) => {
  const borderRadius =
    boxType === "right"
      ? { borderTopLeftRadius: "sm", borderBottomLeftRadius: "sm" }
      : boxType === "left"
      ? { borderTopRightRadius: "sm", borderBottomRightRadius: "sm" } // No radius on right
      : { borderRadius: "sm" };
  return (
    <>
      <Box
        p={{ base: "1", md: "2" }}
        backgroundColor={"white"}
        boxShadow="-2px 2px 8px rgba(0, 0, 0, 0.2)" // Custom shadow (top, bottom, and right)
        {...borderRadius} // Apply conditional border radius
        overflow="hidden" // Ensures content stays within the box
        transition="all 0.3s ease-in-out" // Smooth transition effect
        position="relative" // Enables layering
        _hover={{
          filter: "grayscale(100%) brightness(0.9) contrast(1)", // Black scale effect
          transform: "scale(1.02)", // Slight zoom-in effect
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
    </>
  );
};

export default VideoCard;
