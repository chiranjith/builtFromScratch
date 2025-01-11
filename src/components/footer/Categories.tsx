import { GridItem, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import videoList from "../../assets/data/videoList.json";
import CustomLink from "../../assets/CustomLink";

const Categories = () => {
  // Extract Outdoor Furniture Data
  const outdoorFurnitureData = videoList.videos.find(
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
        <CustomLink
          to={`/vlp?id=${outdoorFurnitureData?.title}`}
          state={outdoorFurnitureData}
          newTab={false}
        >
          Outdoor Furniture
        </CustomLink>
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
