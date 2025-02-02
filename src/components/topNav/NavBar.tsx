import { Box, Flex, Image, HStack } from "@chakra-ui/react";
import logo from "../../assets/images/logos/bfsLogo2.png";
import ColorModeSwitch from "../ColorModeSwitch";
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
              //width={{ base: "150px", md: "300px", "2xl": "480px" }}
              //w={{ sm: "116px", md: "100%", lg: "120%", "2xl": "100%" }}
              w={"100%"}
              height={{ base: "22px", md: "36px", lg: "40px", "2xl": "100px" }}
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
