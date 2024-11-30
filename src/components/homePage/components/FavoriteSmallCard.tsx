import { Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  srcImg: string;
  children: string;
}

const FavoriteSmallCard = ({ srcImg, children }: Props) => {
  return (
    <>
      <Flex direction="column" h="100%">
        <Flex flex="0 0 70%" align="top" justify="center" bg="white">
          <Text
            mt={{ base: ".4", md: "2" }}
            fontSize={{ base: ".4rem", md: "1.1rem" }}
            fontWeight="bold"
            fontFamily="Geist"
          >
            {children}
          </Text>
        </Flex>
        <Flex flex="1" align="center" justify="center">
          <Image
            src={srcImg}
            alt="Small"
            w="100%"
            objectFit="cover"
            transition="all 0.3s ease-in-out" // Smooth scaling transition
          />
        </Flex>
      </Flex>
    </>
  );
};

export default FavoriteSmallCard;
