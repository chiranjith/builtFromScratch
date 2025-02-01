import { Box, Text, Image, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ItemsHeaderVIP from "./ItemsHeaderVIP";

interface ItemList {
  itemId: number;
  image: string;
  item: string;
  size?: string;
  qty: string;
  store: string;
  sku: string;
}

interface ItemCard {
  videoData: ItemList[];
}

const setURL = ({ store, sku }: ItemList): string => {
  switch (store) {
    case "homeDepot":
      return `https://www.homedepot.com/p/${sku}`;
    case "lowes":
      return `https://www.lowes.com/pd/${sku}`;
    case "amazon":
      return `https://www.amazon.com/dp/${sku}`;
    default:
      return ""; // Default URL or an error message
  }
};

const getStoreLogo = (store: string): string => {
  switch (store) {
    case "homeDepot":
      return "/src/assets/images/logos/THD.svg";
    case "lowes":
      return "/src/assets/images/logos/Lowes.svg";
    case "amazon":
      return "/src/assets/images/logos/Amazon.svg";
    default:
      return "";
  }
};

const ItemListVIP = ({ videoData }: ItemCard) => {
  if (!Array.isArray(videoData) || videoData.length === 0) {
    return <Text>No items to display.</Text>;
  }

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={6}
        px={{ base: 4, md: 8 }}
        py={8}
        position="relative"
      >
        {videoData.map((item, index) => (
          <Box
            key={item.itemId}
            position="relative"
            role="group" // Chakra UI for hover group
          >
            <ChakraLink
              as={RouterLink}
              to={setURL(item)}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Box
                bg="white"
                borderRadius="md"
                maxWidth="160em"
                overflow="hidden"
                width="full"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                {/* Image Section */}
                <Box
                  h={{ base: "100px", md: "150px", "2xl": "390px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={item.image}
                    alt={item.item}
                    objectFit="cover"
                    height="100%"
                  />
                </Box>

                {/* Text Section */}
                <Box p={1} textAlign="center" bg="white">
                  <Text
                    as="h2"
                    fontWeight="bold"
                    fontSize={{ base: "10px", md: "14px", "2xl": "28px" }}
                    color="gray.800"
                  >
                    {item.item}
                  </Text>
                  <Text
                    fontSize={{ base: "8px", md: "14px", "2xl": "24px" }}
                    color="gray.800"
                  >
                    <b>Size:</b> {item.size}
                  </Text>
                  <Text
                    fontSize={{ base: "8px", md: "14px", "2xl": "24px" }}
                    color="gray.800"
                  >
                    <b>Qty:</b> {item.qty}
                  </Text>
                </Box>
              </Box>
            </ChakraLink>

            {/* Store Logo on Hover */}
            <Box
              position="absolute"
              top="8px"
              right="8px"
              opacity={0}
              _groupHover={{
                opacity: 1,
              }}
              transition="opacity 0.2s"
            >
              <Image
                src={getStoreLogo(item.store)}
                alt={`${item.store} logo`}
                width="40px"
                height="40px"
                objectFit="contain"
              />
            </Box>

            {/* Vertical Dashed Line */}
            {index !== videoData.length && (
              <Box
                position="absolute"
                top="0"
                bottom="0"
                right="-3px"
                width="1px"
                background="repeating-linear-gradient(to bottom, gray, gray 4px, transparent 4px, transparent 8px)"
                backgroundSize="1px 16px"
              />
            )}
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default ItemListVIP;
