import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "../topNav/NavBar";
import Footer from "../footer/Footer";
import About from "./components/About";

//About Page
const AboutPage = () => {
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
          <About />
        </GridItem>
        <GridItem area="main"></GridItem>
        <GridItem area="bottom">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default AboutPage;
