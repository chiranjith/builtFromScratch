import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  boxType?: string;
  srcImg: string;
  linkTo: string; // URL for the link
  state?: any; // State to pass to the linked page
  onClick?: () => void; // Optional onClick handler for custom behavior
}

const VideoCardLarge = ({ srcImg, linkTo, state, onClick }: Props) => {
  return (
    <Box
      gridRow="1 / 3"
      gridColumn="2 / 3"
      boxShadow="-2px 2px 8px rgba(0, 0, 0, 0.4)"
      borderRadius="sm"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      position="relative"
      maxHeight={{
        base: "180px",
        md: "400px",
        lg: "600px",
        xl: "600px",
        "2xl": "1200px",
      }} // ✅ Set a reasonable height limit
      _hover={{
        filter: "grayscale(100%) brightness(0.9) contrast(1)",
        transform: "scale(1.02)",
        boxShadow: "-2px 2px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Flex height="100%" flex="1" align="bottom" justify="center">
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
            height="100%"
            objectFit="cover"
            transition="all 0.3s ease-in-out"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default VideoCardLarge;
