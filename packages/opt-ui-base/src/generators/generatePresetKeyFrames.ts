import { defineKeyframes } from "@pandacss/dev";

/**
 * Generates the panda css preset css key frames.
 *
 * @returns The generated keyframes to be used within this panda css preset.
 */
export function generatePresetKeyFrames() {
  return defineKeyframes({
    "circular-dash": {
      "0%": {
        strokeDasharray: "1px, 200px",
        strokeDashoffset: "0px",
      },
      "50%": {
        strokeDasharray: "100px, 200px",
        strokeDashoffset: "-15px",
      },
      "100%": {
        strokeDasharray: "100px, 200px",
        strokeDashoffset: "-125px",
      },
    },
  });
}
