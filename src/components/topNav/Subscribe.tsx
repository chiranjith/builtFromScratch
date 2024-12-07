import { Button, useBreakpointValue, Image, Text } from "@chakra-ui/react";
import yT from "../../assets/images/logos/yTubeSmall.png";

const Subscribe = () => {
  const displayText = useBreakpointValue({ base: "none", md: "inline" });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" }); // Small button for mobile, medium for larger screens

  return (
    <>
      <a
        href="https://www.youtube.com/@builtfromscratch?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          colorScheme="gray"
          variant="outline"
          display="flex"
          alignItems="center"
          size={buttonSize} // Dynamically adjust the button size
        >
          <Image
            src={yT}
            boxSize={{ base: "16px", md: "20px" }}
            mr={{ base: "0px", md: "8px" }}
          />
          <Text as="span" display={displayText}>
            Subscribe
          </Text>
        </Button>
      </a>
    </>
  );
};

export default Subscribe;
