import { tokens } from "@equinor/eds-tokens";
import { defineTokens } from "@pandacss/dev";

/**
 * Generates the list of colors that can be used also combined with EDS color tokens.
 *
 * @returns The generated colors option preset for pandacss.
 */
export function generatePresetColors() {
  return defineTokens.colors({
    white: {
      100: { value: "#FFF" },
      74: { value: "rgba(255,255,255,0.74)" },
      40: { value: "rgba(255,255,255,0.4)" },
      16: { value: "rgba(255,255,255,0.16)" },
      2: { value: "rgba(255,255,255,0.02)" },
    },
    grey: {
      100: { value: "#171717" },
      90: { value: "#333333" },
      80: { value: "#3d3d3d" },
      70: { value: "#565656" },
      60: { value: "#666666" },
      50: { value: "#6f6f6f" },
      40: { value: "#8c8c8c" },
      30: { value: "#bebebe" },
      20: { value: "#dcdcdc" },
      15: { value: "#eaeaea" },
      10: { value: "#f7f7f7" },
    },
    energeticred: {
      100: {
        value: tokens.colors.infographic.primary__energy_red_100.hex,
      },
      55: {
        value: tokens.colors.infographic.primary__energy_red_55.hex,
      },
      34: {
        value: tokens.colors.infographic.primary__energy_red_34.hex,
      },
      21: {
        value: tokens.colors.infographic.primary__energy_red_21.hex,
      },
      13: {
        value: tokens.colors.infographic.primary__energy_red_13.hex,
      },
    },
    mossgreen: {
      100: {
        value: tokens.colors.infographic.primary__moss_green_100.hex,
      },
      55: {
        value: tokens.colors.infographic.primary__moss_green_55.hex,
      },
      34: {
        value: tokens.colors.infographic.primary__moss_green_34.hex,
      },
      21: {
        value: tokens.colors.infographic.primary__moss_green_21.hex,
      },
      13: {
        value: tokens.colors.infographic.primary__moss_green_13.hex,
      },
    },
    slateblue: {
      100: {
        value: tokens.colors.infographic.primary__slate_blue.hex,
      },
    },
    mistblue: {
      100: {
        value: tokens.colors.infographic.primary__mist_blue.hex,
      },
      34: { value: "#f7fafc" },
      21: { value: "rgba(213,234,244,0.21)" },
    },
    weathered: {
      value: tokens.colors.infographic.primary__weathered_red.hex,
    },
    sprucewood: {
      value: tokens.colors.infographic.primary__spruce_wood.hex,
    },
    lichengreen: {
      value: tokens.colors.infographic.primary__lichen_green.hex,
    },
    purpleBerry: {
      value: tokens.colors.infographic.substitute__purple_berry.hex,
    },
    pinkRose: {
      value: tokens.colors.infographic.substitute__pink_rose.hex,
    },
    pinkSalmon: {
      value: tokens.colors.infographic.substitute__pink_salmon.hex,
    },
    greenCucumber: {
      value: tokens.colors.infographic.substitute__green_cucumber.hex,
    },
    greenSucculent: {
      value: tokens.colors.infographic.substitute__green_succulent.hex,
    },
    greenMint: {
      value: tokens.colors.infographic.substitute__green_mint.hex,
    },
    blueOcean: {
      value: tokens.colors.infographic.substitute__blue_ocean.hex,
    },
    blueOvercast: {
      value: tokens.colors.infographic.substitute__blue_overcast.hex,
    },
    blueSky: {
      value: tokens.colors.infographic.substitute__blue_sky.hex,
    },
    orange: { value: "#FF9200" }, // not part of EDS
    red: { value: "#F8434C" }, // not part of EDS
    yellow: { value: "#FFDF7F" }, // not part of EDS
    iwitRed: { value: "#fc0006" }, // not part of EDS
    iwitYellow: { value: "#FBCA36" }, // not part of EDS
    iwitOrange: { value: "#FF9200" }, // not part of EDS
    limeDark: { value: "#95A028" }, // not part of EDS
  });
}
