import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const iconRecipe = sva({
  slots: ["root"],
  base: {
    root: {
      position: "relative",
      display: "inline-block",
      "& svg": {
        fill: "currentcolor",
        border: "currentcolor",
        verticalAlign: "middle",
        width: "inherit",
        height: "inherit",
        "& > path": {
          fill: "currentcolor",
          border: "currentcolor",
        },
      },
    },
  },
});

export type IconRecipeSlots = keyof ReturnType<typeof iconRecipe>;

export type IconRecipeProps = NonNullable<
  RecipeVariantProps<typeof iconRecipe>
>;
