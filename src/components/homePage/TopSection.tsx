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
import images from "../../assets/images";

interface ResponsiveImageProps extends ImageProps {
  src: string;
  alt: string;
}

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
        <Text as="span" color="blue.600" fontWeight="bold">
          Built From Scratch
        </Text>{" "}
        is your ultimate destination for DIY enthusiasts, creators & innovators.
        Our platform is dedicated to empowering individuals to craft, build &
        create from the ground up. Whether you’re a beginner taking your first
        steps into the world of DIY or an experienced maker looking for fresh
        ideas, <br />
        <Text as="span" color="blue.600" fontWeight="bold">
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
        size={{ base: "sm", md: "2xl" }}
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
            fontSize={{ base: ".7rem", md: "1.5rem" }}
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
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            fontFamily="Geist"
          >
            {textContent}
          </Text>
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
            src={images.logos.yt}
            alt="YouTube Logo"
            width={{ base: "32px", md: "90px" }}
            height={{ base: "30px", md: "80px" }}
            padding={{ base: "2px", md: "10px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={images.logos.fb}
            alt="Facebook Logo"
            width={{ base: "30px", md: "58px" }}
            height={{ base: "30px", md: "58px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={images.logos.x}
            alt="X Logo"
            width={{ base: "28px", md: "54px" }}
            height={{ base: "28px", md: "54px" }}
          />
          <Spacer />
          <ResponsiveImage
            src={images.logos.ins}
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
            src={images.logos.hd}
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
            fontSize={{ base: "0.4rem", md: "1.1rem" }}
            color="gray.700"
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
            src={images.logos.lw}
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
        fontSize={{ base: "0.5rem", md: "1.3rem" }}
        color={"gray.700"}
        mb={{ base: "4", md: "16" }}
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
