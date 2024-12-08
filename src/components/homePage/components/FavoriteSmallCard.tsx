import { Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  srcImg: string;
  children: string;
}

const FavoriteSmallCard = ({ srcImg, children }: Props) => {
  return (
    <>
      <Flex
        direction="column"
        h="100%"
        bg="white"
        boxShadow="0 8px 16px rgba(0, 0, 0, 1)"
      >
        <Flex
          flex="0 0 75%"
          align="top"
          justify="center"
          overflow="hidden" // Prevent image overflow
          w="100%"
        >
          <Image
            src={srcImg}
            alt="Small"
            w="100%"
            objectFit="cover"
            transition="all 0.3s ease-in-out" // Smooth scaling transition
          />
        </Flex>
        <Flex flex="1" align="center" justify="left" w="100%">
          <Text
            pl={{ base: "1", md: "2" }}
            fontSize={{
              base: ".3rem",
              md: ".8rem",
              lg: "1.1rem",
              "2xl": "1.3rem",
            }}
            //fontWeight="bold"
            fontFamily="Geist"
          >
            {children}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default FavoriteSmallCard;
