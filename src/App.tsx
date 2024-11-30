import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/topNav/NavBar";
import VideoGrid from "./components/homePage/MidSectionVideoGrid";
import TopSection from "./components/homePage/TopSection";
import BottomSection from "./components/homePage/BottomSection";

function App() {
  return (
    <Grid
      templateAreas={`"nav" "about" "main" "bottom"`}
      templateRows="auto auto 1fr"
      minHeight="100vh"
      rowGap={0}
    >
      <GridItem area="nav" bg="white" mb={24}>
        <NavBar />
      </GridItem>
      <GridItem area="about" mb={0}>
        <div>
          <TopSection />
        </div>
      </GridItem>
      {/* Main Content */}
      <GridItem area="main">
        <VideoGrid />
      </GridItem>
      <GridItem area="bottom">
        <BottomSection />
      </GridItem>
    </Grid>
  );
}

export default App;
