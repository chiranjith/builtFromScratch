import yt from "./images/logos/youtube.png";
import ins from "./images/logos/instagram.png";
import fb from "./images/logos/fb.svg";
import hd from "./images/logos/hd.png";
import lw from "./images/logos/lw.png";
import x from "./images/logos/x.png";
//Video Grid Images
import indoorProj from "./images/videoGrid/indoorProject.png"
import landscape from "./images/videoGrid/landscape.png"
import garage from "./images/videoGrid/garage.png"
import outdoorFur from "./images/videoGrid/outdoorFur.png"
import selfWater from "./images/videoGrid/selfWater.png"
import planters from "./images/videoGrid/planters.png"
import pooja from "./images/videoGrid/pooja.png"
//fav project
import homeImg from "./images/favProject/homeImg.png"
import homeSm1 from "./images/favProject/homeSmall1.jpg"
import homeSm2 from "./images/favProject/homeSmall2.jpg"
import homeSm3 from "./images/favProject/homeSmall3.jpg"


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
