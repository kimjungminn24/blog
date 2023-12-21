import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jungm.in/", // replace this with your deployed domain
  author: "정민",
  desc: "개발 공부 중 .",
  title: "🐶🦶",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 9,
};

export const LOCALE = ["ko-KR"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/JEM1224",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
