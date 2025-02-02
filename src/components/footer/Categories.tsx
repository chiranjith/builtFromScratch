import { GridItem, Stack, Text, filter } from "@chakra-ui/react";
import videoList from "../../assets/data/videoList.json";
import CustomLink from "../../assets/CustomLink";

const Categories = () => {
  return (
    <GridItem>
      <Text
        fontWeight="bold"
        mb={4}
        fontSize={{
          base: "14px",
          md: "14px",
          lg: "16px",
          "2xl": "30px",
        }}
      >
        Categories
      </Text>
      {/* Generate links for videos with children */}
      <Stack
        spacing={2}
        fontSize={{
          base: "14px",
          md: "14px",
          lg: "16px",
          "2xl": "30px",
        }}
      >
        {videoList.videos
          .filter((video) => video.children && video.children.length > 0)
          .map((video) => (
            <CustomLink
              key={video.id} // Assuming each video has a unique `id`
              to={`/vlp?id=${video.title}`}
              state={video}
              newTab={false} // Adjust as needed
            >
              {video.title}
            </CustomLink>
          ))}
      </Stack>
    </GridItem>
  );
};

export default Categories;
