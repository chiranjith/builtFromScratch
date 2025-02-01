import { Grid } from "@chakra-ui/react";
import VideoCard from "./components/VideoCard";
import VideoCardLarge from "./components/VideoCardLarge";
import videoData from "../../assets/data/videoList.json";

const MidSectionVideoGrid = () => {
  const videoTitles = [
    "Outdoor Furniture",
    "Planter",
    "Indoor Project",
    "Self Watering Planter",
    "Landscape",
    "Garage Organization",
    "Pooja Mantapa",
  ]; //Title should map to title in VideoList.json

  return (
    <>
      <Grid
        templateColumns="1.3fr 1.1fr 1.3fr 1fr" // 4 columns of varying width
        gap={{ base: "2", md: "5" }} // Spacing between grid items
        m={0} // Remove margins on the grid
        px={0} // Remove horizontal padding
        mb={{ base: "4", md: "12", "2xl": "20" }}
      >
        {videoTitles.map((title, index) => {
          const videoDataItem = videoData.videos.find(
            (video) => video.title === title
          );

          if (!videoDataItem) {
            console.error(`Video data for title "${title}" not found`);
            return null;
          }
          //console.log("State passed to VideoCard:", videoDataItem);

          // Check if videoDataItem has children
          const linkTo =
            videoDataItem.children && videoDataItem.children.length > 0
              ? `/vlp?id=${videoDataItem.title}`
              : `/vip?id=${videoDataItem.title}`;

          // Render a specific layout for each video title
          if (index === 1) {
            // For Planter (example for a large card)
            return (
              <VideoCardLarge
                key={videoDataItem.id}
                //srcImg={images.videoGrid.planters}
                srcImg={videoDataItem.image}
                linkTo={linkTo} // Use the dynamically generated link
                state={videoDataItem}
              />
            );
          }

          // Render standard cards
          return (
            <VideoCard
              key={videoDataItem.id}
              boxType={
                index === 0
                  ? "left"
                  : index === videoTitles.length - 1
                  ? "right"
                  : ""
              }
              srcImg={videoDataItem.image}
              linkTo={linkTo} // Use the dynamically generated link
              state={videoDataItem}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default MidSectionVideoGrid;
