import { useLocation } from "react-router-dom";
import { Text, Box, List, ListItem } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../topNav/NavBar";
import Footer from "../footer/Footer";
import YouTubeCardVIP from "./components/YouTubeCardVIP";
import ItemListVIP from "./components/ItemListVIP";

//Video Information Page
const VIP = () => {
  const location = useLocation();
  const videoData = location.state; // Access the data passed via Link's state

  //console.log("Video Data in VIP:", videoData);
  if (!videoData) {
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
          <YouTubeCardVIP videoData={videoData} />
        </GridItem>
        <GridItem area="main">
          <ItemListVIP videoData={videoData.itemList || []} />
        </GridItem>
        <GridItem area="bottom">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default VIP;
