import javascript_Img from "@Data/icon/javascript.png";
import html_Img from "@Data/icon/html.png";
import css_Img from "@Data/icon/css.png";
import typescript_Img from "@Data/icon/typescript.png";

import react_Img from "@Data/icon/react.png";
import redux_Img from "@Data/icon/redux.png";
import styled_components_Img from "@Data/icon/styled_components.png";

import nodeJs_Img from "@Data/icon/nodejs.png";
import express_Img from "@Data/icon/express.png";
import axios_Img from "@Data/icon/axios.png";

import mongodb_Img from "@Data/icon/mongodb.png";
import s3_Img from "@Data/icon/s3.png";

import ec2_Img from "@Data/icon/ec2.png";
import firebase_Img from "@Data/icon/firebase.png";
import github_Img from "@Data/icon/github.png";
import netlify_Img from "@Data/icon/netlify.png";
import cloudtype_Img from "@Data/icon/cloudtype.png";

import visual_studio_code_Img from "@Data/icon/visual_studio_code.png";

export interface SkillType {
  name: string;
  img: string;
}

export const javascript: SkillType = {
  name: "Javascript",
  img: javascript_Img,
};

export const html: SkillType = {
  name: "HTML",
  img: html_Img,
};

export const css: SkillType = {
  name: "CSS",
  img: css_Img,
};

export const typescript: SkillType = {
  name: "Typescript",
  img: typescript_Img,
};

export const react: SkillType = {
  name: "React",
  img: react_Img,
};

export const redux: SkillType = {
  name: "Redux",
  img: redux_Img,
};

export const styled_components: SkillType = {
  name: "Styled-components",
  img: styled_components_Img,
};

export const nodeJs: SkillType = {
  name: "nodeJs",
  img: nodeJs_Img,
};

export const express: SkillType = {
  name: "Express",
  img: express_Img,
};

export const axios: SkillType = {
  name: "Axios",
  img: axios_Img,
};

export const mongoDB: SkillType = {
  name: "MongoDB",
  img: mongodb_Img,
};

export const s3: SkillType = {
  name: "Amazon S3",
  img: s3_Img,
};

export const ec2: SkillType = {
  name: "Amazon EC2",
  img: ec2_Img,
};

export const firebase: SkillType = {
  name: "Firebase",
  img: firebase_Img,
};

export const github_page: SkillType = {
  name: "Github Page",
  img: github_Img,
};

export const netlify: SkillType = {
  name: "Netlify",
  img: netlify_Img,
};

export const cloudtype: SkillType = {
  name: "Cloudtype",
  img: cloudtype_Img,
};

export const visual_studio_code: SkillType = {
  name: "Visual Studio Code",
  img: visual_studio_code_Img,
};

const base: SkillType[] = [javascript, typescript, html, css];
const front: SkillType[] = [react, redux, styled_components];
const back: SkillType[] = [nodeJs, express];
const database: SkillType[] = [mongoDB, s3];
const deploy: SkillType[] = [ec2, netlify, github_page];

export const skillListArr = [
  { title: "Base", data: base },
  { title: "Frontend", data: front },
  { title: "Backend", data: back },
  { title: "Database", data: database },
  { title: "Deploy", data: deploy },
];
