import { Link, Flex } from "@chakra-ui/react";

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
        fontSize={{ base: ".7rem", md: "1.2rem" }}
        pr={{ base: "1", md: "4" }}
      >
        <Link
          href="#home"
          _hover={{ textDecoration: "none", color: "gray.400" }}
        >
          Home
        </Link>
        <Link
          href="#about"
          _hover={{ textDecoration: "none", color: "gray.400" }}
        >
          About
        </Link>
        <Link
          href="#contact"
          _hover={{ textDecoration: "none", color: "gray.400" }}
        >
          Contact
        </Link>
      </Flex>
    </>
  );
};

export default TopNavLinks;
