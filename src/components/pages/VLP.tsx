import { useLocation } from "react-router-dom";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "../topNav/NavBar";
import Footer from "../footer/Footer";
import VideoBannerVLP from "./components/VideoBannerVLP";
import { useEffect } from "react";
import ChildVideoGrid from "./components/ChildVideoGrid";

//Video Landing Page
const VLP = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component is mounted
  }, []); // The empty dependency array ensures this runs only once on mount
  const location = useLocation();
  const data = location.state; // Access the data passed via Link's state
  //console.log(data); // Debug: Ensure data is passed correctly
  if (!data) {
    return <Text>No video data available.</Text>;
  }
  return (
    <>
      <Grid
        templateAreas={`"nav" "about" "main" "bottom"`}
        templateRows="auto auto 1fr auto"
        minHeight="100vh"
        rowGap={4} // Add spacing between rows
      >
        <GridItem area="nav" bg="white" mb={10}>
          <NavBar />
        </GridItem>
        <GridItem area="about">
          {/* Pass data as props to VideoCard */}
          <VideoBannerVLP videoData={data} />
          {/* Child Video Grid */}
          <ChildVideoGrid children={data.children} />
        </GridItem>
        <GridItem area="main"></GridItem>
        <GridItem area="bottom">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default VLP;
