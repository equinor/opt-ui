import { tokens } from "@equinor/eds-tokens";
import type { ColorPallette } from "../types";

export const lightPallette: ColorPallette = {
  primary: {
    main: tokens.colors.interactive.primary__resting.hex,
    hover: tokens.colors.interactive.primary__hover.hex,
    hoverAlt: tokens.colors.interactive.primary__hover_alt.hex,
    highlight: tokens.colors.interactive.primary__selected_highlight.hex,
    highlightHover: tokens.colors.interactive.primary__selected_hover.hex,
  },
  secondary: {
    main: tokens.colors.interactive.secondary__resting.hex,
    hover: tokens.colors.interactive.secondary__link_hover.hex,
    highlight: tokens.colors.interactive.secondary__highlight.hex,
  },
  info: {
    main: tokens.colors.infographic.substitute__blue_overcast.hex,
    hover: tokens.colors.infographic.substitute__blue_ocean.hex,
    highlight: tokens.colors.infographic.substitute__blue_sky.hex,
  },
  success: {
    main: tokens.colors.interactive.success__resting.hex,
    hover: tokens.colors.interactive.success__hover.hex,
    highlight: tokens.colors.interactive.success__highlight.hex,
  },
  warning: {
    main: tokens.colors.interactive.warning__resting.hex,
    hover: tokens.colors.interactive.warning__hover.hex,
    highlight: tokens.colors.interactive.warning__highlight.hex,
  },
  danger: {
    main: tokens.colors.interactive.warning__resting.hex,
    hover: tokens.colors.interactive.warning__hover.hex,
    highlight: tokens.colors.interactive.warning__highlight.hex,
  },
  disabled: {
    fill: tokens.colors.interactive.disabled__fill.hex,
    border: tokens.colors.interactive.disabled__border.hex,
  },
  text: {
    primary: tokens.colors.text.static_icons__default.hex,
    secondary: tokens.colors.text.static_icons__secondary.hex,
    tertiary: tokens.colors.text.static_icons__tertiary.hex,
    info: "#FFFFFF",
    success: tokens.colors.interactive.success__text.hex,
    warning: tokens.colors.interactive.warning__text.hex,
    danger: tokens.colors.interactive.warning__text.hex,
    disabled: tokens.colors.interactive.disabled__text.hex,
    inverted: tokens.colors.text.static_icons__primary_white.hex,
    invertedAlt: "rgba(255, 255, 255, 0.74)",
  },
  background: {
    main: "#FFFFFF",
    nav: "#FFFFFF",
    paper: "#FFFFFF",
    popover: "#FFFFFF",
    overlay: "rgba(0,0,0,0.8)",
    lighten: "#F7F7F7",
  },
  table: {
    header: tokens.colors.interactive.table__header__fill_resting.hex,
    headerActive: tokens.colors.interactive.table__header__fill_activated.hex,
    headerHover: tokens.colors.interactive.table__header__fill_hover.hex,
    cell: tokens.colors.interactive.table__cell__fill_resting.hex,
    cellActive: tokens.colors.interactive.table__cell__fill_activated.hex,
    cellHover: tokens.colors.interactive.table__cell__fill_hover.hex,
  },
};
