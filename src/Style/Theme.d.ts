import "styled-components";
import { Color, Font } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: Color;
    font: Font;
  }
}
