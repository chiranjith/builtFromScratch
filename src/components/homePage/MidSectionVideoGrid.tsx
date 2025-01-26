import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import VideoCard from "./components/VideoCard";
import VideoCardLarge from "./components/VideoCardLarge";
import videoData from "../../assets/data/videoList.json";
import { useNavigate } from "react-router-dom";

// Mock of fetchItemList function
const fetchItemList = async (path: string) => {
  const response = await fetch(path);
  const data = await response.json();
  return data.items;
};

const MidSectionVideoGrid = () => {
  const videoTitles = [
    "Outdoor Furniture",
    "Planter",
    "Garage Organization",
    "Self Watering Planter",
    "Landscape",
    "Indoor Project",
    "Pooja Mantapa",
  ]; // Titles should map to titles in videoList.json

  const [videoStates, setVideoStates] = useState(videoData.videos);

  useEffect(() => {
    const fetchAllItemLists = async () => {
      const updatedVideos = await Promise.all(
        videoData.videos.map(async (video) => {
          if (!video.children || video.children.length === 0) {
            if (video.itemList) {
              try {
                const itemListData = await fetchItemList(video.itemList);
                return { ...video, itemList: itemListData };
              } catch (error) {
                console.error(
                  `Failed to fetch itemList for ${video.title}`,
                  error
                );
                return video;
              }
            }
          }
          return video;
        })
      );

      setVideoStates(updatedVideos);
    };

    fetchAllItemLists();
  }, []);

  const navigate = useNavigate();

  return (
    <Grid
      templateColumns="1.3fr 1.1fr 1.3fr 1fr" // 4 columns of varying width
      gap={{ base: "2", md: "5" }} // Spacing between grid items
      m={0} // Remove margins on the grid
      px={0} // Remove horizontal padding
      mb={{ base: "4", md: "12" }}
    >
      {videoTitles.map((title, index) => {
        const videoDataItem = videoStates.find(
          (video) => video.title === title
        );

        if (!videoDataItem) {
          console.error(`Video data for title "${title}" not found`);
          return null;
        }

        const linkTo =
          videoDataItem.children && videoDataItem.children.length > 0
            ? `/vlp?id=${videoDataItem.title}`
            : `/vip?id=${videoDataItem.title}`;

        const state = videoDataItem;

        const handleClick = () => {
          navigate(linkTo, { state });
        };

        // Render a specific layout for each video title
        if (index === 1) {
          // For "Planter" (example for a large card)
          return (
            <VideoCardLarge
              key={videoDataItem.id}
              srcImg={videoDataItem.image}
              linkTo={linkTo} // Use the dynamically generated link
              state={state}
              onClick={handleClick}
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
            state={state}
            onClick={handleClick}
          />
        );
      })}
    </Grid>
  );
};

export default MidSectionVideoGrid;
