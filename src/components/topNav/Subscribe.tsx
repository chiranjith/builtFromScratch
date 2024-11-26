import { Button, useBreakpointValue } from "@chakra-ui/react";

const Subscribe = () => {
  const displayText = useBreakpointValue({ base: "none", md: "inline" });
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
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "12px",
            }}
          />
          <span style={{ display: displayText }}>Subscribe</span>
        </Button>
      </a>
    </>
  );
};

export default Subscribe;
