import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { Grid, GridItem, Link } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Categories from "./Categories";
import { useEffect } from "react";
import Subscribe from "../topNav/Subscribe";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box bg="gray.800" color="white" py={10} px={4}>
      {/* Top Section: Grid of Links */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={6}
        mb={10}
        fontSize={{
          base: "14px",
          md: "14px",
          lg: "16px",
          "2xl": "30px",
        }}
      >
        <Categories />

        <GridItem>
          <Text
            fontWeight="bold"
            mb={4}
            fontSize={{
              base: "14px",
              md: "14px",
              lg: "16px",
              "2xl": "30px",
            }}
          >
            Customer Service
          </Text>
          <Link
            href="#"
            mb={2}
            display="block"
            _hover={{ textDecoration: "underline" }}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            mb={2}
            display="block"
            _hover={{ textDecoration: "underline" }}
          >
            FAQs
          </Link>
          <Link
            href="#"
            mb={2}
            display="block"
            _hover={{ textDecoration: "underline" }}
          >
            Workshops
          </Link>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" mb={4}>
            Resources
          </Text>
          <Link
            href="#"
            mb={2}
            display="block"
            _hover={{ textDecoration: "underline" }}
          >
            Blog
          </Link>
          <Link
            href="#"
            mb={2}
            display="block"
            _hover={{ textDecoration: "underline" }}
          >
            Catalog
          </Link>
          <Link
            href="#"
            mb={2}
            display="block"
            _hover={{ textDecoration: "underline" }}
          >
            How-To Videos
          </Link>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" mb={4}>
            Stay Connected
          </Text>
          <Flex>
            <Subscribe />
            {/* <Input placeholder="Enter your email" borderRadius="md" mr={2} />
            <Button colorScheme="blue">Subscribe</Button> */}
          </Flex>
        </GridItem>
      </Grid>

      {/* Middle Section: Social Links */}
      <Flex justifyContent="center" mb={10} gap={4}>
        <Link
          href="https://www.facebook.com/groups/1016258166999265"
          isExternal
        >
          <Icon as={FaFacebookF} w={6} h={6} _hover={{ color: "blue.400" }} />
        </Link>
        <Link href="https://x.com/builtFrScratch" isExternal>
          <Icon as={FaTwitter} w={6} h={6} _hover={{ color: "blue.400" }} />
        </Link>
        <Link
          href="https://www.instagram.com/built_from_scratch_ck/"
          isExternal
        >
          <Icon as={FaInstagram} w={6} h={6} _hover={{ color: "pink.400" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/chiranjith" isExternal>
          <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: "blue.400" }} />
        </Link>
        <Link href="https://www.youtube.com/@builtfromscratch" isExternal>
          <Icon as={FaYoutube} w={6} h={6} _hover={{ color: "blue.400" }} />
        </Link>
      </Flex>

      {/* Bottom Section: Legal Links */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        borderTop="1px solid gray"
        pt={4}
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Built From Scratch. All rights reserved.
        </Text>
        <Flex gap={4} mt={{ base: 4, md: 0 }}>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Terms of Service
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Accessibility
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
