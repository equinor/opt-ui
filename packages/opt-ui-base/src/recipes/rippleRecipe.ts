import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const rippleRecipe = sva({
  slots: ["root", "element"],
  base: {
    root: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
    },
    element: {
      transform: "scale(0)",
      position: "absolute",
      borderRadius: "100%",
      opacity: "0.2",
      animationName: "ping",
      mixBlendMode: "darken",
    },
  },
});

export type RippleRecipeProps = NonNullable<
  RecipeVariantProps<typeof rippleRecipe>
>;
