import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const TopNavLinks = () => {
  return (
    <>
      <Flex
        as="nav"
        gap="4"
        justify="center"
        align="center"
        color="gray.800"
        fontFamily="geist"
        fontSize={{ base: ".7rem", md: "1.2rem", "2xl": "2rem" }}
        pr={{ base: "1", md: "4" }}
      >
        <Link
          as={RouterLink}
          to="/"
          _hover={{
            textDecoration: "none",
            color: "gray.400",
          }}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/"
          _hover={{
            textDecoration: "none",
            color: "gray.400",
          }}
        >
          About
        </Link>
        <Link
          as={RouterLink}
          to="/"
          _hover={{
            textDecoration: "none",
            color: "gray.400",
          }}
        >
          Contact
        </Link>
      </Flex>
    </>
  );
};

export default TopNavLinks;
