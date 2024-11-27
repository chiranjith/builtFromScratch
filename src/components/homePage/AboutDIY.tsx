import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Spacer,
  useBreakpointValue,
  ImageProps,
} from "@chakra-ui/react";
import yt from "../../assets/youtube.png";
import ins from "../../assets/instagram.png";
import fb from "../../assets/fb.svg";
import hd from "../../assets/hd.png";
import lw from "../../assets/lw.png";

interface ResponsiveImageProps extends ImageProps {
  src: string;
  alt: string;
}

const AboutDIY = () => {
  const textContent =
    useBreakpointValue({
      base: `<b>Built From Scratch</b> is your ultimate destination for DIY
      enthusiasts, creators, and innovators. Our platform is dedicated to
      empowering individuals to craft, build, and create from the ground
      up...`,
      md: `<b>Built From Scratch</b> is your ultimate destination for DIY
      enthusiasts, creators, and innovators. Our platform is dedicated to
      empowering individuals to craft, build, and create from the ground
      up. Whether you’re a beginner taking your first steps into the world
      of DIY or an experienced maker looking for fresh ideas, 
      <strong>Built From Scratch</strong> provides the inspiration, tools,
      and guidance you need.`,
    }) ?? "Welcome to Built From Scratch!";

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
      <Heading as="h1" textAlign="center" size={{ base: "md", md: "2xl" }}>
        Where Imagination meets Construction!
      </Heading>
      <Grid
        templateRows="repeat(5, auto)" // 5 rows
        templateColumns="5% 1fr 35% 1fr 5%" // First and last columns are 5% wide
        gap={0} // No space between grid items
        p={4}
        borderStyle="solid" // Outer solid line
        mb={{ base: "2", md: "8" }}
      >
        {/* Grid items with dotted inner lines */}
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray"></Box>
        <Box
          borderRight="1px dotted gray"
          borderBottom="1px dotted gray"
          gridColumn="2 / 5" // Merges 1R2C, 1R3C, 1R4C
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            mb="2"
            fontFamily="Geist"
            fontSize={{ base: "1rem", md: "2rem" }}
          >
            Welcome to Built From Scratch - DIY made Simple!
          </Text>
        </Box>
        <Box borderBottom="1px dotted gray"></Box>

        <Box borderRight="1px dotted gray"></Box>
        <Box
          gridColumn="2 / 5" // Spans columns 2, 3, and 4
          gridRow="2 / 4" // Spans rows 2 and 3
          borderRight="1px dotted gray"
          borderBottom="1px dotted gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Text
            textAlign="center"
            fontFamily="Geist"
            fontSize={{ base: "0.9rem", md: "1.1rem" }}
            dangerouslySetInnerHTML={{ __html: textContent }}
          />
        </Box>
        <Box></Box>

        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray"></Box>
        <Box borderBottom="1px dotted gray"></Box>

        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray"></Box>
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray"></Box>
        <Box
          borderRight="1px dotted gray"
          borderBottom="1px dotted gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ResponsiveImage
            src={yt}
            alt="YouTube Logo"
            width={{ base: "32px", md: "90px" }}
            height={{ base: "30px", md: "80px" }}
            padding={{ base: "2px", md: "10px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={fb}
            alt="Facebook Logo"
            width={{ base: "30px", md: "58px" }}
            height={{ base: "30px", md: "58px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={ins}
            alt="Instagram Logo"
            width={{ base: "36px", md: "80px" }}
            height={{ base: "36px", md: "80px" }}
            padding={{ base: "5px", md: "15px" }}
          />
        </Box>
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray"></Box>
        <Box borderBottom="1px dotted gray"></Box>

        <Box borderRight="1px dotted gray"></Box>
        <Box
          borderRight="1px dotted gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ResponsiveImage
            src={hd}
            alt="HomeDepot Logo"
            width={{ base: "45px", md: "90px" }}
            height={{ base: "30px", md: "60px" }}
            padding={{ base: "2px", md: "4px" }}
          />
        </Box>
        <Box borderRight="1px dotted gray">
          <Text
            textAlign="center"
            fontFamily="Geist"
            fontSize={{ base: "0.6rem", md: "1.1rem" }}
          >
            From detailed tutorials and creative project ideas to expert tips
            and tricks, we help you turn your vision into reality.
          </Text>
        </Box>
        <Box
          borderRight="1px dotted gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ResponsiveImage
            src={lw}
            alt="Lowes Logo"
            width={{ base: "36px", md: "80px" }}
            height={{ base: "30px", md: "70px" }}
            padding={{ base: "2px", md: "4px" }}
          />
        </Box>
        <Box></Box>
      </Grid>
      <Text
        textAlign="center"
        fontFamily="Geist"
        fontSize={{ base: "0.7rem", md: "1.5rem" }}
        mb={{ base: "4", md: "16" }}
      >
        Build your dreams, one step at a time—because great things are always{" "}
        <strong>Built From Scratch</strong>!
      </Text>
    </>
  );
};

export default AboutDIY;
