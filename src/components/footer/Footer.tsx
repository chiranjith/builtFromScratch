import { Flex, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Flex
        w="100%"
        direction="column"
        align="flex-start"
        position="relative"
        mb={"70px"}
      >
        {/*Solid Line */}
        <Box w="100%" borderTop="1px solid gray" />
      </Flex>
      <Box p={4}>
        {/* Navigation Link */}
        <a href="/vlp" target="_blank" rel="noopener noreferrer">
          <Button colorScheme="blue">Go to VLP</Button>
        </a>
      </Box>
    </>
  );
};

export default Footer;
