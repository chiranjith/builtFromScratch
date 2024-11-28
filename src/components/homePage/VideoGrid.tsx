import { Box, Grid, Image } from "@chakra-ui/react";
import yt from "../../assets/youtube.png";
import VideoCard from "./components/VideoCard";
import VideoCardLarge from "./components/VideoCardLarge";

const VideoGrid = () => {
  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)" // 2 rows of equal height
        templateColumns="repeat(4, 1fr)" // 4 columns of equal width
        gap={{ base: "2", md: "6" }} // Spacing between grid items
        m={0} // Remove margins on the grid
        px={0} // Remove horizontal padding
      >
        {/* Column 1, Row 1 */}
        <VideoCard boxType="left" />

        {/* Column 2, Rows 1 & 2 (merged) */}
        {/* <Box
          bg="green.200"
          p={4}
          gridRow="1 / 3" // Spans rows 1 through 3
          gridColumn="2 / 3" // Stays in the 2nd column
        >
          1-2, 2
        </Box> */}
        <VideoCardLarge />

        {/* Column 3, Row 1 */}
        <VideoCard boxType="" />

        {/* Column 4, Row 1 */}
        <VideoCard boxType="right" />

        {/* Column 1, Row 2 */}
        <VideoCard boxType="left" />

        {/* Column 3, Row 2 */}
        <VideoCard boxType="" />

        {/* Column 4, Row 2 */}
        <VideoCard boxType="right" />
      </Grid>
    </>
  );
};

export default VideoGrid;
