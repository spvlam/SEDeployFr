import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/hero-right-3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "WELLCOME TO GROUP 21 PROJECT",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/collection",
  },
  {
    image: imageRightPng3,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/collection",
  },
  {
    image: imageRightPng,
    heading: "WE SELLING EVERY THINGS",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/collection",
  },
];
