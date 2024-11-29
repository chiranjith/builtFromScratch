import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/topNav/NavBar";
import VideoGrid from "./components/homePage/MidSectionVideoGrid";
import AboutDIY from "./components/homePage/AboutDIY";
import BottomSection from "./components/homePage/BottomSection";
import FavoriteProject from "./components/homePage/components/FavoriteProject";

function App() {
  return (
    <Grid
      templateAreas={`"nav" "about" "main" "bottom"`}
      templateRows="auto auto 1fr"
      minHeight="100vh"
      rowGap={0}
    >
      {/* Navbar */}
      <GridItem area="nav" bg="white" mb={24}>
        <NavBar />
      </GridItem>
      <GridItem area="about" mb={0}>
        <div>
          <AboutDIY />
        </div>
        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </div> */}
      </GridItem>
      {/* Main Content */}
      <GridItem area="main">
        <VideoGrid />
      </GridItem>
      <GridItem area="bottom">
        <BottomSection />
      </GridItem>
      <FavoriteProject />
    </Grid>
  );
}

export default App;
