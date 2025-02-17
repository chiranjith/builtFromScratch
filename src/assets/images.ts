import yt from "./../assets/images/logos/youtube.png";
import ins from "./../assets/images/logos/instagram.png";
import fb from "./../assets/images/logos/fb.svg";
import hd from "./../assets/images/logos/hd.png";
import lw from "./../assets/images/logos/lw.png";
import x from "./../assets/images/logos/x.png";
//Video Grid Images
import indoorProj from "./../assets/images/videoGrid/indoorProject.webp"
import landscape from "./../assets/images/videoGrid/landscape.webp"
import garage from "./../assets/images/videoGrid/garage.webp"
import outdoorFur from "./../assets/images/videoGrid/outdoorFur.webp"
import selfWater from "./../assets/images/videoGrid/selfWater.webp"
import planters from "./../assets/images/videoGrid/planters.webp"
import pooja from "./../assets/images/videoGrid/pooja.webp"
//fav project
import homeImg from "./../assets/images/favProject/homeImg.webp"
import homeSm1 from "./../assets/images/favProject/homeSmall1.webp"
import homeSm2 from "./../assets/images/favProject/homeSmall2.webp"
import homeSm3 from "./../assets/images/favProject/homeSmall3.webp"


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
