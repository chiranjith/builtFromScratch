import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav" bg="white">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
