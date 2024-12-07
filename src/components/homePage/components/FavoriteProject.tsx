import { Box, Flex, Image } from "@chakra-ui/react";
import FavoriteSmallCard from "./FavoriteSmallCard";
import images from "../../../assets/images";

const FavoriteProject = () => {
  return (
    <Flex
      w="100vw"
      justify="center"
      align="center"
      mb={{ base: "35px", md: "70px" }}
    >
      <Box
        w="100%"
        h={{ base: "116px", sm: "20px", md: "392px" }}
        position="relative"
        overflow="visible" // Allow child elements to overflow
        ml={"4"}
        mr={"4"}
        borderBottom="1px dotted gray"
        borderTop="1px dotted gray"
        //p={{ base: "1", md: "1" }}
      >
        <Flex
          h="100%" // Full height of the Box
          align="center" // Center the image vertically
          justify="center" // Center the image horizontally
        >
          <Image
            src={images.favProj.homeImg}
            alt="Home Image"
            w="100%"
            objectFit="cover"
            _hover={{
              transform: "scale(1.1) ",
            }}
            transition="all 1s ease-in-out"
          />
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
            w={{ base: "80px", md: "260px" }}
            h={{ base: "80px", md: "260px" }}
            bg="blue.400"
            transform="rotate(-5deg)"
            position="relative"
            boxShadow="lg"
            borderRadius="md"
            mr={{ base: "-50px", md: "-130px" }} // Overlap the boxes
            top={{ base: "-10px", md: "-30px" }} // Move 10px above the second box
            _hover={{
              transform: "scale(1.1) rotate(-7deg)", // Slight scaling and additional rotation
              zIndex: 2, // Bring to the front on hover
            }}
            transition="all 0.6s ease-in-out"
          >
            <FavoriteSmallCard
              srcImg={images.favProj.homeSm1}
              children="Living Room"
            />
          </Box>
          {/* Second Box */}
          <Box
            w={{ base: "80px", md: "260px" }}
            h={{ base: "80px", md: "260px" }}
            bg="green.400"
            transform="rotate(-3deg)"
            position="relative"
            boxShadow="lg"
            borderRadius="md"
            mr={{ base: "-50px", md: "-130px" }}
            top={{ base: "-5px", md: "-15px" }}
            _hover={{
              transform: "scale(1.1) rotate(-5deg)", // Slight scaling and additional rotation
              zIndex: 2, // Bring to the front on hover
            }}
            transition="all 0.6s ease-in-out"
          >
            <FavoriteSmallCard
              srcImg={images.favProj.homeSm2}
              children="Dining Room View"
            />
          </Box>
          {/* Third Box */}
          <Box
            w={{ base: "80px", md: "260px" }}
            h={{ base: "80px", md: "260px" }}
            bg="red.400"
            transform="rotate(0deg)"
            position="relative"
            boxShadow="lg"
            borderRadius="md"
            top={{ base: "1px", md: "5px" }}
            _hover={{
              transform: "scale(1.1) ", // Slight scaling and additional rotation
              zIndex: 2, // Bring to the front on hover
            }}
            transition="all 0.6s ease-in-out"
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
