import { Button, useBreakpointValue, Image, Text } from "@chakra-ui/react";
import yT from "../../assets/images/logos/yTubeSmall.png";

const Subscribe = () => {
  const displayText = useBreakpointValue({ base: "none", md: "inline" });
  const buttonSize = useBreakpointValue({
    base: "sm",
    md: "md",
    "2xl": "100px",
  });
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
            boxSize={{ base: "16px", md: "18px", "2xl": "40px" }}
            mr={{ base: "0px", md: "6px", "2xl": "20px" }}
          />
          <Text
            as="span"
            display={displayText}
            color={"gray.500"}
            fontSize={{ base: "0.4rem", md: "1rem", "2xl": "2rem" }}
          >
            Subscribe
          </Text>
        </Button>
      </a>
    </>
  );
};

export default Subscribe;
