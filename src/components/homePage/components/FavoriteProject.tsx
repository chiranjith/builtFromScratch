import { Box, Center, Flex, Image } from "@chakra-ui/react";
import FavoriteSmallCard from "./FavoriteSmallCard";
import homeImg from "../../homePage/images/homeImg.png";

const FavoriteProject = () => {
  return (
    <Flex w="100vw" justify="center" align="center">
      <Box
        w="98%"
        h={{ base: "106px", md: "392px" }}
        position="relative"
        overflow="visible" // Allow child elements to overflow
        mb={{ base: "4", md: "20" }}
        borderBottom="1px dotted gray"
        borderTop="1px dotted gray"
        //p={{ base: "1", md: "1" }}
      >
        <Image
          src={homeImg}
          alt="Home Image"
          w="100%"
          objectFit="cover"
          transition="all 0.3s ease-in-out"
        />
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
          >
            <FavoriteSmallCard srcImg="" children="1st Img" />
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
          >
            <FavoriteSmallCard srcImg="" children="2nd Img" />
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
            top={{ base: "1px", md: "10px" }}
          >
            <FavoriteSmallCard srcImg="" children="3rd Img" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FavoriteProject;
