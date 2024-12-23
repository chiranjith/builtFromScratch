import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../topNav/NavBar";
import Footer from "../footer/Footer";

//Video Landing Page
const VLP = () => {
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
          {"Video Landing Page"}
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
