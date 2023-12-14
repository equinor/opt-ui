import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const rippleRecipe = sva({
  slots: ["root", "ripple"],
  base: {
    root: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
    },
    ripple: {
      backgroundColor: "#000",
      transform: "scale(0)",
      position: "absolute",
      borderRadius: "100%",
      opacity: "0.2",
      animationName: "ping",
      animationDuration: "750ms",
      mixBlendMode: "darken",
    },
  },
});

export type RippleRecipeProps = NonNullable<
  RecipeVariantProps<typeof rippleRecipe>
>;
