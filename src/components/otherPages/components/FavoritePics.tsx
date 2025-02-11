import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

interface VideoChildData {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface FavoritePicsProps {
  childrenData: VideoChildData[];
}

const FavoritePics = ({ childrenData }: FavoritePicsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <Box
        zIndex={3}
        position="relative"
        mt={{ base: "20", md: "20", lg: "20", xl: "100px", "2xl": "48" }}
        px={{ base: "4", md: "8" }}
        width="90%"
        maxWidth="160em"
        left="5%"
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: "4", md: "3", lg: "4" }}
        >
          {childrenData.map((child) => (
            <GridItem
              key={child.id}
              height={{
                base: "220px",
                md: "110px",
                lg: "220px",
                xl: "280px",
                "2xl": "460px",
              }}
              overflow="hidden"
              display="flex"
              flexDirection="column"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.3s ease-in-out"
              onClick={() => handleImageClick(child.image)} // Open modal on click
              cursor="pointer"
            >
              <Box
                height="75%"
                bg="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
              >
                <Image
                  src={child.image}
                  alt={child.title}
                  objectFit="cover"
                  width="100%"
                />
              </Box>

              <Box
                height="25%"
                bg="white"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                paddingLeft="2"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "10px", md: "6px", lg: "9px", xl: "12px" }}
                  noOfLines={1}
                >
                  {child.title}
                </Text>
                <Text
                  fontSize={{ base: "11px", md: "6px", lg: "9px", xl: "12px" }}
                  color="gray.600"
                  noOfLines={2}
                >
                  {child.description}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Modal for Enlarged Image */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "3xl", "2xl": "6xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Image src={selectedImage} alt="Selected Image" width="100%" />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FavoritePics;
