import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const dotsProgressRecipe = sva({
  slots: ["root", "svg", "circle", "circle1", "circle2", "circle3"],
  base: {
    root: {
      position: "relative",
      display: "inline-block",
      color: "primary.main",
    },
    svg: {
      fill: "currentcolor",
      width: "32px",
      height: "32px",
    },
    circle: {
      animationName: "pulse",
      animationDuration: "1s",
      animationTimingFunction: "ease",
      animationIterationCount: "infinite",
    },
    circle1: {
      animationDelay: "0s",
    },
    circle2: {
      animationDelay: "0.2s",
    },
    circle3: {
      animationDelay: "0.4s",
    },
  },
});

export type DotsProgressRecipeSlots = keyof ReturnType<
  typeof dotsProgressRecipe
>;

export type DotsProgressRecipeProps = NonNullable<
  RecipeVariantProps<typeof dotsProgressRecipe>
>;
