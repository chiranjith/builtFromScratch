import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import FavoriteSmallCard from "./FavoriteSmallCard";
import images from "../../../assets/images";

const smallCard = {
  w: { base: "60px", md: "140px", lg: "230px", "2xl": "350px" },
  h: { base: "60px", md: "140px", lg: "230px", "2xl": "350px" },
  boxShadow: "lg",
  borderRadius: "md",
  transition: "all 0.6s ease-in-out",
};

const FavoriteProject = () => {
  return (
    <Flex
      w="100vw"
      justify="center"
      align="center"
      mb={{ base: "35px", md: "70px", lg: "90px" }}
    >
      <Box
        w={{ base: "100%", "2xl": "95%" }}
        h={{ sm: "180px", md: "205px", lg: "394px", "2xl": "680px" }}
        position="relative"
        overflow="visible" // Allow child elements to overflow
        mx={"4"} //equal space on left & right
        borderBottom="1px dashed gray"
        borderTop="1px dashed gray"
        maxWidth="160em"
      >
        <Flex
          h="100%" // Full height of the Box
          align="center" // Center the image vertically
          justify="center" // Center the image horizontally
          _hover={{
            //filter: "grayscale(0%) brightness(0.9) contrast(1)",
            transform: "scale(1.01)",
          }}
          transition="all 1s ease-in-out"
        >
          <Link
            as={RouterLink}
            to="/favorite" // Internal link
          >
            <Image
              src={images.favProj.homeImg}
              alt="Home Image"
              w={{ sm: "116px", md: "100%", lg: "120%", "2xl": "120%" }}
              objectFit="cover"
            />
          </Link>
        </Flex>
        <Flex
          direction="row"
          justify="center"
          align="center"
          position="absolute"
          left="75%" // Center the stack horizontally
          transform="translateX(-50%)" // Offset to align centrally
          top="-10px" // Move the boxes up
        >
          {/* First Box */}
          <Box
            {...smallCard}
            transform="rotate(-5deg)"
            position="relative"
            mr={{ base: "-30px", md: "-100px", lg: "-130px" }} // Overlap the boxes
            top={{ base: "-10px", md: "-30px" }} // Move 10px above the second box
            _hover={{
              transform: "scale(1.1) rotate(-7deg)", // Slight scaling and additional rotation
              zIndex: 2, // Bring to the front on hover
            }}
          >
            <FavoriteSmallCard
              srcImg={images.favProj.homeSm1}
              children="Living Room"
            />
          </Box>
          {/* Second Box */}
          <Box
            {...smallCard}
            transform="rotate(-3deg)"
            position="relative"
            mr={{ base: "-30px", md: "-100px", lg: "-130px" }}
            top={{ base: "-5px", md: "-15px" }}
            _hover={{
              transform: "scale(1.1) rotate(-5deg)", // Slight scaling and additional rotation
              zIndex: 2, // Bring to the front on hover
            }}
          >
            <FavoriteSmallCard
              srcImg={images.favProj.homeSm2}
              children="Dining Room View"
            />
          </Box>
          {/* Third Box */}
          <Box
            {...smallCard}
            transform="rotate(0deg)"
            position="relative"
            top={{ base: "1px", md: "5px" }}
            _hover={{
              transform: "scale(1.1) ", // Slight scaling and additional rotation
              zIndex: 2, // Bring to the front on hover
            }}
          >
            <FavoriteSmallCard
              srcImg={images.favProj.homeSm3}
              children="Home, Sweet Home..."
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FavoriteProject;
