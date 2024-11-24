import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/bfsLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image
        src={logo}
        width={{ base: "150px", md: "240px" }}
        height={{ base: "25px", md: "40px" }}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
