import { GridItem, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import videoData from "../../assets/data/videoList.json";

const Categories = () => {
  // Extract Outdoor Furniture Data
  const outdoorFurnitureData = videoData.videos.find(
    (video) => video.title === "Outdoor Furniture"
  );
  console.log("Check: " + outdoorFurnitureData?.title);

  return (
    <>
      <GridItem>
        <Text fontWeight="bold" mb={4}>
          Categories
        </Text>
        {/* Navigation Link */}
        <Link
          as={RouterLink}
          to="/vlp" // Use 'to' for internal routing with React Router
          state={outdoorFurnitureData} // Pass data via React Router's state
          mb={2}
          display="block"
          //target="_blank"
          _hover={{ textDecoration: "underline" }}
        >
          Outdoor Furniture
        </Link>
        <Link
          href="#"
          mb={2}
          display="block"
          _hover={{ textDecoration: "underline" }}
        >
          Indoor
        </Link>
        <Link
          href="#"
          mb={2}
          display="block"
          _hover={{ textDecoration: "underline" }}
        >
          Planter Box
        </Link>
      </GridItem>
    </>
  );
};

export default Categories;
