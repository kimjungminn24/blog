import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jung-min.com", // replace this with your deployed domain
  author: "정민",
  desc: "개발 공부 중 .",
  title: "블로그",
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
    href: "https://github.com/kimjungminn24",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
