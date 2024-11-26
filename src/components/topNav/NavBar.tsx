import { Box, Flex, Link, Image, HStack } from "@chakra-ui/react";
import logo from "../../assets/bfsLogo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import Subscribe from "./Subscribe";
import TopNavLinks from "./TopNavLinks";

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
        <HStack justifyContent="space-between" padding="10px">
          <Image
            src={logo}
            width={{ base: "150px", md: "240px" }}
            height={{ base: "25px", md: "40px" }}
          />
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
