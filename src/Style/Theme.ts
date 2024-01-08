import { DefaultTheme } from "styled-components";

const color = {
  black: "#333",
  blue: "#14148C",
  red_transparency: "#ff818142",
  gray_transparency: "#cccccc;",
};

const font = {
  size: "2rem",
};

export type Color = typeof color;
export type Font = typeof font;

const theme: DefaultTheme = {
  color,
  font,
};

export default theme;
