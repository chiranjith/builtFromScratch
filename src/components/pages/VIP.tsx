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
        <GridItem area="main">
          {data.itemList && (
            <Box mt={6} p={4} bg="gray.50" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Item List
              </Text>
              <List spacing={3}>
                {data.itemList.map((item: any, index: number) => (
                  <ListItem key={index}>
                    <Text>
                      <strong>{item.item}</strong> - {item.size} - Quantity:{" "}
                      {item.qty}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </GridItem>
        <GridItem area="bottom">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default VIP;
