import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const badgeRecipe = sva({
  slots: ["root", "adornment"],
  base: {
    root: {},
    adornment: {},
  },
  variants: {
    variant: {},
    variantColor: {},
  },
  compoundVariants: [],
  defaultVariants: {},
});

export type BadgeRecipeProps = NonNullable<
  RecipeVariantProps<typeof badgeRecipe>
>;
