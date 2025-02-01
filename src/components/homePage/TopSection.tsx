import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { Spacer, useBreakpointValue, ImageProps } from "@chakra-ui/react";
import images from "../../assets/images";

interface ResponsiveImageProps extends ImageProps {
  src: string;
  alt: string;
}
const borderStyle = "1px dashed gray";

const TopSection = () => {
  const textContent = useBreakpointValue({
    base: (
      <>
        <Text as="span" color="blue.600" fontWeight="bold">
          Built From Scratch
        </Text>{" "}
        is your ultimate destination for DIY enthusiasts, creators & innovators.
        Our platform is dedicated to empowering individuals to craft, build &
        create from the ground up...
      </>
    ),
    md: (
      <>
        <Text
          as="span"
          color="blue.600"
          fontWeight="bold"
          fontSize={{ base: "0.4rem", md: "1.1rem", "2xl": "30px" }}
        >
          Built From Scratch
        </Text>{" "}
        is your ultimate destination for DIY enthusiasts, creators & innovators.
        Our platform is dedicated to empowering individuals to craft, build &
        create from the ground up. Whether you’re a beginner taking your first
        steps into the world of DIY or an experienced maker looking for fresh
        ideas, <br />
        <Text
          as="span"
          color="blue.600"
          fontWeight="bold"
          fontSize={{ base: "0.4rem", md: "1.1rem", "2xl": "30px" }}
        >
          Built From Scratch
        </Text>{" "}
        provides the inspiration, tools, and guidance you need.
      </>
    ),
  }) ?? (
    <Text as="span" color="blue.500" fontWeight="bold">
      Welcome to Built From Scratch!
    </Text>
  );

  const ResponsiveImage = ({ src, alt, ...props }: ResponsiveImageProps) => (
    <Image
      src={src}
      alt={alt}
      _hover={{ transform: "scale(1.1)", transition: "0.3s ease-in-out" }}
      {...props}
    />
  );

  return (
    <>
      <Heading
        as="h1"
        textAlign="center"
        color={"gray.800"}
        m={{ base: "0.1", md: "4" }}
        size={{ base: "sm", md: "xl", "2xl": "4xl" }}
      >
        Where{" "}
        <Text as="span" color="blue.600">
          Imagination
        </Text>{" "}
        meets Construction!
      </Heading>
      <Grid
        templateRows="repeat(5, auto)" // 5 rows
        templateColumns="5% 1fr 40% 1fr 5%" // First and last columns are 5% wide
        gap={0} // No space between grid items
        p={4}
        borderStyle="solid" // Outer solid line
        mb={{ base: "2", md: "4" }}
      >
        {/* Grid items with dotted inner lines */}
        <Box borderRight={borderStyle} borderBottom={borderStyle}></Box>
        <Box
          borderRight={borderStyle}
          borderBottom={borderStyle}
          gridColumn="2 / 5" // Merges 1R2C, 1R3C, 1R4C
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxWidth="160em"
        >
          <Text
            textAlign="center"
            mb="2"
            fontFamily="Geist"
            fontSize={{ base: ".7rem", md: "1.5rem", "2xl": "46px" }}
          >
            Welcome to Built From Scratch - DIY made Simple!
          </Text>
        </Box>
        <Box borderBottom={borderStyle}></Box>

        <Box borderRight={borderStyle}></Box>
        <Box
          gridColumn="2 / 5" // Spans columns 2, 3, and 4
          gridRow="2 / 4" // Spans rows 2 and 3
          borderRight={borderStyle}
          borderBottom={borderStyle}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Text
            //fontSize={{ base: "sm", md: "md" }}
            fontSize={{ base: "0.6rem", md: "1.1rem", "2xl": "30px" }}
            textAlign="center"
            fontFamily="Geist"
          >
            {textContent}
          </Text>
        </Box>
        <Box></Box>

        <Box borderRight={borderStyle} borderBottom={borderStyle}></Box>
        <Box borderBottom={borderStyle}></Box>

        <Box borderRight={borderStyle} borderBottom={borderStyle}></Box>
        <Box borderRight={borderStyle} borderBottom={borderStyle}></Box>
        <Box
          borderRight={borderStyle}
          borderBottom={borderStyle}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ResponsiveImage
            src={images.logos.yt}
            alt="YouTube Logo"
            height={{ base: "28px", md: "70px", "2xl": "100px" }}
            pl={{ base: "4px", md: "10px", "2xl": "40px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={images.logos.fb}
            alt="Facebook Logo"
            height={{ base: "28px", md: "58px", "2xl": "90px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={images.logos.x}
            alt="X Logo"
            height={{ base: "24px", md: "54px", "2xl": "90px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={images.logos.ins}
            alt="Instagram Logo"
            height={{ base: "24px", md: "60px", "2xl": "90px" }}
            pr={{ base: "8px", md: "10px", "2xl": "40px" }}
          />
        </Box>
        <Box borderRight={borderStyle} borderBottom={borderStyle}></Box>
        <Box borderBottom={borderStyle}></Box>

        <Box borderRight={borderStyle}></Box>
        <Box
          borderRight={borderStyle}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ResponsiveImage
            src={images.logos.hd}
            alt="HomeDepot Logo"
            height={{ base: "28px", md: "60px", "2xl": "100px" }}
            padding={{ base: "2px", md: "4px", "2xl": "10px" }}
          />
        </Box>
        <Box borderRight={borderStyle}>
          <Text
            textAlign="center"
            fontFamily="Geist"
            fontSize={{ base: "0.5rem", md: "1.1rem", "2xl": "30px" }}
            color="gray.700"
          >
            From detailed tutorials and creative project ideas to expert tips
            and tricks, we help you turn your vision into reality.
          </Text>
        </Box>
        <Box
          borderRight={borderStyle}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ResponsiveImage
            src={images.logos.lw}
            alt="Lowes Logo"
            height={{ base: "28px", md: "60px", "2xl": "100px" }}
            padding={{ base: "2px", md: "4px", "2xl": "10px" }}
          />
        </Box>
        <Box></Box>
      </Grid>
      <Text
        textAlign="center"
        fontFamily="Geist"
        fontSize={{ base: "0.5rem", md: "1.3rem", "2xl": "36px" }}
        color={"gray.700"}
        mb={{ base: "4", md: "12" }}
      >
        Build your dreams, one step at a time—because great things are always{" "}
        <Text as="span" color="blue.600" fontWeight="bold">
          Built From Scratch
        </Text>{" "}
        !
      </Text>
    </>
  );
};

export default TopSection;
