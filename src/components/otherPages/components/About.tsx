import { Box, Image, Text, Flex, Link } from "@chakra-ui/react";

const About = () => {
  return (
    <Box width="90%" mx="auto" py={10} paddingTop={{ base: "10", "2xl": "40" }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="start"
        wrap="wrap" // ✅ Allows text to flow naturally
        gap={6}
      >
        {/* Profile Image (Fixed 20% width on desktop, resizes on smaller screens) */}
        <Box
          flex="0 0 40%" // ✅ Ensures image takes exactly 20% width on larger screens
          minWidth="200px"
          maxWidth={{ base: "450px", "2xl": "1200px" }}
          mr={{ md: 6 }} // ✅ Adds margin to push text beside image
        >
          <Image
            src="/src/assets/images/favProject/about.webp"
            alt="Profile Picture"
            w="100%"
            objectFit="cover"
          />
        </Box>

        {/* About Text (Occupies the remaining space) */}
        <Box flex="1" fontSize={{ base: "16px", "2xl": "36px" }}>
          <Text fontWeight="bold" mb={2}>
            About Me
          </Text>
          <Text color="gray.600">
            I consider myself a jack of all trades, someone who enjoys exploring
            and mastering a variety of skills rather than specializing in just
            one. While some may see this as a disadvantage, I believe that
            having a broad skill set allows for adaptability, creativity, and
            problem-solving across different fields. In an ever-changing world,
            versatility is often more valuable than deep expertise in a single
            area. After all, being a jack of all trades means having the ability
            to connect ideas, learn quickly, and tackle challenges from multiple
            perspectives—sometimes, being a jack is not just better, it's
            essential.
          </Text>
          <Text color="gray.600" mt={4}>
            Hello! I'm Chiranjith, a passionate DIY enthusiast with a love for
            creative projects, including woodworking, landscaping, and interior
            design. With over 25 years of experience in the IT industry and a
            background as a Tool & Die maker, my journey into DIY began during
            the pandemic. Before that, my toolkit was limited to just a hammer
            and a small IKEA toolset. Over the past three years, I've immersed
            myself in woodworking and landscaping, refining my skills through
            hands-on experience and continuous learning. While DIY has become a
            significant part of my life, it will always remain a cherished hobby
            that fuels my creativity and passion for building things from
            scratch.
          </Text>
          <Text color="gray.600" mt={4}>
            When I'm not working, I enjoy playing tennis, table tennis,
            wallyball, gardening, and grilling. I have a passion for continuous
            learning and love exploring new technologies and ideas that spark
            innovation and creativity.
          </Text>
          <Text color="gray.600" mt={4}>
            Please connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/chiranjith"
              isExternal
              color="blue.500"
              fontWeight="bold"
            >
              LinkedIn
            </Link>
            .
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
