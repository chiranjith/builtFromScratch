import { Flex, Text } from "@chakra-ui/react";
interface Props {
  header: string;
  theme?: string;
}

const VideoCardHeader = ({ header, theme = "White" }: Props) => {
  const txtColor = theme === "dark" ? { color: "white" } : { color: "black" };
  return (
    <>
      {/* Top Part (10%) */}
      <Flex flex="0 0 10%" align="top" justify="center">
        <Text
          mt={{ base: ".4", md: "2" }}
          fontSize={{ base: ".4rem", md: "1.1rem" }}
          fontWeight="bold"
          fontFamily="Geist"
          {...txtColor}
        >
          {header}
        </Text>
      </Flex>
    </>
  );
};

export default VideoCardHeader;
