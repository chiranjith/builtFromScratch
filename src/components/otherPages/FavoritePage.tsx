import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "../topNav/NavBar";
import Footer from "../footer/Footer";
import VideoBannerVLP from "../vlp/components/VideoBannerVLP";
import FavoritePics from "./components/FavoritePics";
import favoriteData from "../../assets/data/favoriteData.json";
const data = [
  {
    id: 1,
    title: "Favorite Project",
    heading: "My most enjoyable DIY project!",
    shortDesc:
      "This project dates back to 2012. While the house itself wasn’t built as a DIY project, I was heavily involved in every step of the process. ",
    description:
      "\nI personally designed the layout, drafted the blueprint, and meticulously planned every detail. With the skilled assistance of masons, I was able to turn my vision into reality, making it an incredibly fulfilling experience! \nOf course, there are some mistakes & drawbacks, but overall, it has been an invaluable learning experience!",
    imageBanner: "/src/assets/images/banner/favoriteBanner.png",
    image: "",
    videoUrl: "",
  },
];

const FavoritePage = () => {
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
          <VideoBannerVLP videoData={favoriteData[0]} />
        </GridItem>
        <GridItem area="main">
          <FavoritePics childrenData={favoriteData[0].children || []} />
        </GridItem>
        <GridItem area="bottom">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default FavoritePage;
