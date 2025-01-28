import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Categories from "./Categories";

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

const ItemListVIP = ({ videoData }: ItemCard) => {
  // Ensure `videoData` is an array
  if (!Array.isArray(videoData) || videoData.length === 0) {
    return <Text>No items to display.</Text>;
  }

  return (
    <>
      <Categories />
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
          <Box key={item.itemId} position="relative">
            {/* Card Content */}
            <ChakraLink
              as={RouterLink}
              // Uncomment the line below and set the correct `to` value if needed
              // to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                bg="white"
                borderRadius="md"
                //boxShadow="md"
                overflow="hidden"
                width="full"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                {/* Image Section */}
                <Box
                  h={{ base: "100px", md: "150px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={item.image}
                    alt={item.item}
                    objectFit="cover"
                    //width="100%"
                    height="100%"
                  />
                </Box>

                {/* Text Section */}
                <Box p={1} textAlign="center" bg="white">
                  <Text
                    as="h2"
                    fontWeight="bold"
                    fontSize={{ base: "10px", md: "14px" }}
                    color="gray.800"
                    display="block"
                  >
                    {item.item}
                  </Text>
                  <Text
                    fontSize={{ base: "8px", md: "14px" }}
                    color="gray.800"
                    display="block"
                  >
                    <b>Size:</b> {item.size}
                  </Text>
                  <Text
                    fontSize={{ base: "8px", md: "14px" }}
                    color="gray.800"
                    display="block"
                  >
                    <b>Qty:</b> {item.qty}
                  </Text>
                </Box>
              </Box>
            </ChakraLink>

            {/* Vertical Dotted Line (centered between boxes) */}
            {index !== videoData.length - 1 && (
              <Box
                position="absolute"
                top="0"
                bottom="0"
                right="-3px"
                width="1px"
                background="linear-gradient(to bottom, gray 50%, transparent 50%)"
                backgroundSize="100% 12px" // Increase the 12px to control the dot size and spacing
              />
            )}
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default ItemListVIP;
