import { tokens } from "@equinor/eds-tokens";
import type { ColorPallette } from "../types";

export const darkPallette: ColorPallette = {
  primary: {
    main: "#97CACE",
    hover: "#ADE2E6",
    hoverAlt: "rgba(173, 226, 230, 0.1)",
    highlight: "#97CACE",
    highlightHover: "#C3F3D2",
  },
  secondary: {
    main: "#DEE5E7",
    hover: "#FFFFFF",
    highlight: "rgba(255, 255, 255, 0.1)",
  },
  info: {
    main: tokens.colors.infographic.substitute__blue_overcast.hex,
    hover: tokens.colors.infographic.substitute__blue_ocean.hex,
    highlight: tokens.colors.infographic.substitute__blue_sky.hex,
  },
  success: {
    main: "#4BB748",
    hover: "#C1E7C1",
    highlight: "rgba(161, 218, 160, 0.1)",
  },
  warning: {
    main: "#FF9200",
    hover: "#FFDAA8",
    highlight: "rgba(255, 198, 122, 0.1)",
  },
  danger: {
    main: "#EB0000",
    hover: "#FF949B",
    highlight: "rgba(255, 102, 112, 0.1)",
  },
  disabled: {
    fill: "#344450",
    border: "#405462",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#DEE5E7",
    tertiary: "#9CA6AC",
    info: "#FFFFFF",
    success: "#A1DAA0",
    warning: "#FFC67A",
    danger: "#FF6670",
    disabled: "#637583",
    inverted: "#000000",
    invertedAlt: "rgba(0, 0, 0, 0.74)",
  },
  background: {
    main: "#132634",
    nav: "#3E4F5C",
    paper: "#243746",
    popover: "#2E3F4D",
    overlay: "#DEE5E7",
    lighten: "rgba(255,255,255,0.16)",
  },
  table: {
    header: "#243746",
    headerActive: "#2E3F4D",
    headerHover: "#324D62",
    cell: "#132634",
    cellActive: "#243746",
    cellHover: "#1E3C52",
  },
};
