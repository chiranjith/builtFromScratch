import { useLocation } from "react-router-dom";
import { Text, Box, List, ListItem } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../topNav/NavBar";
import Footer from "../footer/Footer";
import YouTubeCardVIP from "./components/YouTubeCardVIP";

//Video Information Page
const VIP = () => {
  const location = useLocation();
  const data = location.state; // Access the data passed via Link's state
  //console.log("VIP" + data); // Debug: Ensure data is passed correctly
  if (!data) {
    return <Text>No video data available.</Text>;
  }
  return (
    <>
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
          <YouTubeCardVIP videoData={data} />
        </GridItem>
        <GridItem area="main"></GridItem>
        <GridItem area="bottom">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default VIP;
