import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/bfsLogo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        width={{ base: "150px", md: "240px" }}
        height={{ base: "25px", md: "40px" }}
      />
    </HStack>
  );
};

export default NavBar;
