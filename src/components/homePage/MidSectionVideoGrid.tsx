import { Grid } from "@chakra-ui/react";
import VideoCard from "./components/VideoCard";
import VideoCardLarge from "./components/VideoCardLarge";
import garageStorage from "../homePage/images/garageStorage.webp";
import firePit from "../homePage/images/firePit.png";
import patFur from "../homePage/images/patioFurniture.webp";

const MidSectionVideoGrid = () => {
  return (
    <>
      <Grid
        //templateRows={{ base: "minmax(60px, 60px)", md: "275px 275px" }}
        templateColumns="1.25fr 1.1fr 1.25fr 1fr" // 4 columns of equal width
        gap={{ base: "2", md: "6" }} // Spacing between grid items
        m={0} // Remove margins on the grid
        px={0} // Remove horizontal padding
        mb={{ base: "4", md: "12" }}
      >
        {/* Column 1, Row 1 */}
        <VideoCard
          boxType="left"
          srcImg={firePit}
          header="Gas Fire Pit Table"
        />

        {/* Column 2, Rows 1 & 2 (merged) */}
        <VideoCardLarge />

        {/* Column 3, Row 1 */}
        <VideoCard
          boxType=""
          srcImg={garageStorage}
          header="Garage Storage/Organization"
        />

        {/* Column 4, Row 1 */}
        <VideoCard boxType="right" srcImg="" header="" />

        {/* Column 1, Row 2 */}
        <VideoCard boxType="left" srcImg="" header="" />

        {/* Column 3, Row 2 */}
        <VideoCard boxType="" srcImg={patFur} header="Patio Furniture" />

        {/* Column 4, Row 2 */}
        <VideoCard boxType="right" srcImg="" header="" />
      </Grid>
    </>
  );
};

export default MidSectionVideoGrid;
