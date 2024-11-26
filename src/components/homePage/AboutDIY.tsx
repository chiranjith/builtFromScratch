import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import r2c1 from "../../assets/Emw8.gif";

const AboutDIY = () => {
  return (
    <>
      <Grid
        templateRows="auto 1fr auto" // 3 rows of equal height
        templateColumns="1fr 4fr 1fr" // Middle column takes 50% space
        gap={0} // No space between grid items
        p={4}
        borderStyle="solid" // Outer solid line
      >
        {/* Grid items with dotted inner lines */}
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray">
          1R1C
        </Box>
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray">
          1R2C
        </Box>
        <Box borderBottom="1px dotted gray">1R3C</Box>
        <Box borderRight="1px dotted gray" borderBottom="1px dotted gray">
          <Image src={r2c1} />
        </Box>
        <Box
          borderRight="1px dotted gray"
          borderBottom="1px dotted gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Text textAlign="center">
            <b>"Built From Scratch"</b> is your ultimate destination for DIY
            enthusiasts, creators, and innovators. Our platform is dedicated to
            empowering individuals to craft, build, and create from the ground
            up. Whether you’re a beginner taking your first steps into the world
            of DIY or an experienced maker looking for fresh ideas,{" "}
            <strong>Built From Scratch</strong> provides the inspiration, tools,
            and guidance you need. From detailed tutorials and creative project
            ideas to expert tips and tricks, we help you turn your vision into
            reality. Build your dreams, one step at a time—because great things
            are always <strong>Built From Scratch</strong>!
          </Text>
        </Box>
        <Box borderBottom="1px dotted gray">
          <Image
            src="https://giphy.com/embed/ReHJeDLxRdpOwerCKt"
            width="480"
            height="300"
          />
        </Box>
        <Box borderRight="1px dotted gray">3R1C</Box>
        <Box borderRight="1px dotted gray">3R2C</Box>
        <Box>3R3C</Box>
      </Grid>
    </>
  );
};

export default AboutDIY;
