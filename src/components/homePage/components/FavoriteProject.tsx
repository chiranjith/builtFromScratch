import { Box, Flex, Image } from "@chakra-ui/react";
import FavoriteSmallCard from "./FavoriteSmallCard";
import homeImg from "../../homePage/images/homeImg.png";
import homeImgS1 from "../../homePage/images/homeSmall1.jpg";
import homeImgS2 from "../../homePage/images/homeSmall2.jpg";
import homeImgS3 from "../../homePage/images/homeSmall5.jpg";

const FavoriteProject = () => {
  return (
    <Flex w="100vw" justify="center" align="center">
      <Box
        w="100%"
        h={{ base: "106px", md: "392px" }}
        position="relative"
        overflow="visible" // Allow child elements to overflow
        m={"4"}
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
            <FavoriteSmallCard srcImg={homeImgS1} children="Main Door" />
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
            <FavoriteSmallCard srcImg={homeImgS2} children="Dining Room View" />
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
          >
            <FavoriteSmallCard
              srcImg={homeImgS3}
              children="Home, Sweet Home..."
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FavoriteProject;
