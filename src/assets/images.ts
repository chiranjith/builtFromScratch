import yt from "./../../public/images/logos/youtube.png";
import ins from "./../../public/images/logos/instagram.png";
import fb from "./../../public/images/logos/fb.svg";
import hd from "./../../public/images/logos/hd.png";
import lw from "./../../public/images/logos/lw.png";
import x from "./../../public/images/logos/x.png";
//Video Grid Images
import indoorProj from "./../../public/images/videoGrid/indoorProject.webp"
import landscape from "./../../public/images/videoGrid/landscape.webp"
import garage from "./../../public/images/videoGrid/garage.webp"
import outdoorFur from "./../../public/images/videoGrid/outdoorFur.webp"
import selfWater from "./../../public/images/videoGrid/selfWater.webp"
import planters from "./../../public/images/videoGrid/planters.webp"
import pooja from "./../../public/images/videoGrid/pooja.webp"
//fav project
import homeImg from "./../../public/images/favProject/homeImg.webp"
import homeSm1 from "./../../public/images/favProject/homeSmall1.webp"
import homeSm2 from "./../../public/images/favProject/homeSmall2.webp"
import homeSm3 from "./../../public/images/favProject/homeSmall3.webp"


const logos: { [key: string]: string } = {
  yt, ins, fb, hd, lw, x,
};

const videoGrid: {[key: string]: string} = {
  indoorProj, landscape, garage, outdoorFur, selfWater, pooja, planters
};

const favProj: {[key: string]: string} = {
  homeImg, homeSm1, homeSm2, homeSm3
};
export default {logos, videoGrid, favProj};
