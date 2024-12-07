import { Grid } from "@chakra-ui/react";
import VideoCard from "./components/VideoCard";
import VideoCardLarge from "./components/VideoCardLarge";
import images from "../../assets/images";

const MidSectionVideoGrid = () => {
  return (
    <>
      <Grid
        //templateRows={{ base: "minmax(60px, 60px)", md: "275px 275px" }}
        templateColumns="1.3fr 1.1fr 1.3fr 1fr" // 4 columns of equal width
        gap={{ base: "2", md: "5" }} // Spacing between grid items
        m={0} // Remove margins on the grid
        px={0} // Remove horizontal padding
        mb={{ base: "4", md: "12" }}
      >
        {/* Column 1, Row 1 */}
        <VideoCard boxType="left" srcImg={images.videoGrid.firePit} />

        {/* Column 2, Rows 1 & 2 (merged) */}
        <VideoCardLarge srcImg={images.videoGrid.planters} />

        {/* Column 3, Row 1 */}
        <VideoCard boxType="" srcImg={images.videoGrid.garage} />

        {/* Column 4, Row 1 */}
        <VideoCard boxType="right" srcImg={images.videoGrid.planter} />

        {/* Column 1, Row 2 */}
        <VideoCard boxType="left" srcImg={images.videoGrid.patio} />

        {/* Column 3, Row 2 */}
        <VideoCard boxType="" srcImg={images.videoGrid.aqua} />

        {/* Column 4, Row 2 */}
        <VideoCard boxType="right" srcImg={images.videoGrid.pooja} />
      </Grid>
    </>
  );
};

export default MidSectionVideoGrid;
