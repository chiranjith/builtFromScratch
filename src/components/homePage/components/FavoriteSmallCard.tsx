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
        h={{ base: "100%", "2xl": "120%" }}
        bg="white"
        boxShadow="0 8px 16px rgba(0, 0, 0, 1)"
      >
        <Flex
          flex="0 0 75%"
          align="top"
          justify="center"
          overflow="hidden" // Prevent image overflow
          w={{ base: "100%", "2xl": "120%" }}
        >
          <Image
            src={srcImg}
            alt="Small"
            w={{ base: "100%", "2xl": "120%" }}
            objectFit="cover"
            transition="all 0.3s ease-in-out" // Smooth scaling transition
          />
        </Flex>
        <Flex
          flex="1"
          align="center"
          justify="left"
          w={{ base: "100%", "2xl": "120%" }}
        >
          <Text
            pl={{ base: "1", md: "2" }}
            fontSize={{
              base: ".3rem",
              md: ".8rem",
              lg: "1.1rem",
              "2xl": "2rem",
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
