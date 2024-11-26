import { Link } from "@chakra-ui/react";

const TopNavLinks = () => {
  return (
    <>
      <Link href="#home" _hover={{ textDecoration: "none", color: "gray.200" }}>
        Home
      </Link>
      <Link
        href="#about"
        _hover={{ textDecoration: "none", color: "gray.200" }}
      >
        About
      </Link>
      <Link
        href="#contact"
        _hover={{ textDecoration: "none", color: "gray.200" }}
      >
        Contact
      </Link>
    </>
  );
};

export default TopNavLinks;
