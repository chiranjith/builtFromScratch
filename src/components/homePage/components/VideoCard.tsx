import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  boxType: string;
  srcImg: string;
  linkTo: string; // URL for the link
  state?: any; // State to pass to the linked page
  onClick?: () => void; // Optional onClick handler for custom behavior
}

const VideoCard = ({ boxType, srcImg, linkTo, state, onClick }: Props) => {
  const borderRadius =
    boxType === "right"
      ? { borderTopLeftRadius: "sm", borderBottomLeftRadius: "sm" }
      : boxType === "left"
      ? { borderTopRightRadius: "sm", borderBottomRightRadius: "sm" }
      : { borderRadius: "sm" };

  return (
    <Box
      boxShadow="-1px -1px 8px rgba(0, 0, 0, 0.2)" // Custom shadow (top, bottom, and right)
      {...borderRadius} // Apply conditional border radius
      overflow="hidden" // Ensures content stays within the box
      transition="all 0.3s ease-in-out" // Smooth transition effect
      position="relative" // Enables layering
      // height={{
      //   sm: "65px",
      //   md: "140px",
      //   lg: "190px",
      //   xl: "285px",
      //   "2xl": "520px",
      // }} // Set a fixed height
      minHeight={{
        sm: "65px",
        md: "140px",
        lg: "190px",
        xl: "285px",
        "2xl": "520px",
      }} // ✅ Prevents height collapsing
      height="auto"
      _hover={{
        filter: "grayscale(80%) brightness(0.9) contrast(1)", // Black scale effect
        transform: "scale(1.02)", // Slight zoom-in effect
        boxShadow: "-2px 4px 12px rgba(0, 0, 0, 1)", // More intense shadow on hover
      }}
      onClick={onClick} // Attach onClick if passed
    >
      <Flex h="100%" flex="1" align="center" justify="center">
        <Link
          as={RouterLink}
          to={linkTo}
          state={state}
          style={{ textDecoration: "none" }}
          onClick={onClick} // Attach onClick if passed
        >
          <Image
            src={srcImg}
            width="100%"
            objectFit="cover"
            transition="all 0.3s ease-in-out" // Smooth scaling transition
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default VideoCard;
