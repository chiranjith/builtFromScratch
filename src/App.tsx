import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/topNav/NavBar";
import MidSectionVideoGrid from "./components/homePage/MidSectionVideoGrid";
import TopSection from "./components/homePage/TopSection";
import BottomSection from "./components/homePage/BottomSection";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VLP from "./components/vlp/VLP";
import VIP from "./components/vip/VIP";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Grid
              templateAreas={`"nav" "about" "main" "bottom"`}
              templateRows="auto auto 1fr"
              minHeight="100vh"
              rowGap={0}
            >
              <GridItem
                area="nav"
                bg="white"
                mb={{ base: "60px", md: "70px", lg: "80px", "2xl": "160px" }}
              >
                <NavBar />
              </GridItem>
              <GridItem area="about" mb={0}>
                <TopSection />
              </GridItem>
              <GridItem area="main">
                <MidSectionVideoGrid />
              </GridItem>
              <GridItem area="bottom">
                <BottomSection />
                <Footer />
              </GridItem>
            </Grid>
          }
        />

        {/* VLP Page */}
        <Route path="/vlp" element={<VLP />} />

        {/* VIP Page */}
        <Route path="/vip" element={<VIP />} />
        <Route path="/vip/:videoId" element={<VIP />} />
      </Routes>
    </Router>
  );
}

export default App;
