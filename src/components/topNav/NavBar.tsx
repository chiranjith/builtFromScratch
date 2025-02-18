import { Box, Flex, Image, HStack } from "@chakra-ui/react";
import logo from "./../../../public/images/logos/bfsLogo.png";
import Subscribe from "./Subscribe";
import TopNavLinks from "./TopNavLinks";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        width="100%"
        bg="white"
        color="black"
        boxShadow="md"
        zIndex="100"
      >
        <HStack justifyContent="space-between" padding="8px">
          <Link to="/">
            <Image
              src={logo}
              //w={"100%"}
              //height={{ base: "22px", md: "36px", lg: "40px", "2xl": "100px" }}
              maxWidth={{
                base: "130px",
                md: "300px",
                lg: "380px",
                "2xl": "720px",
              }} // ✅ Controls max size
              height="auto" // ✅ Prevents distortion
              objectFit="contain" // ✅ Ensures it scales properly
            />
          </Link>
          <Flex gap={4} alignItems="center">
            <Subscribe />
            <TopNavLinks />
            {/* <ColorModeSwitch /> */}
          </Flex>
        </HStack>
      </Box>
    </>
  );
};

export default NavBar;
