import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const badgeRecipe = sva({
  slots: ["root", "adornment"],
  base: {
    root: {
      fontFamily: "Equinor",
      fontWeight: 500,
      fontSize: "0.75rem",
      position: "absolute",
      display: "flex",
      flexFlow: "wrap",
      placeContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      minWidth: "20px",
      height: "20px",
      lineHeight: "1",
      background: "red",
      borderRadius: "10px",
      paddingInline: "6px",
    },
    adornment: {},
  },
  variants: {
    variant: {
      default: {
        root: {},
      },
      dot: {},
    },
    variantColor: {
      primary: {},
      secondary: {},
      info: {},
      success: {},
      warning: {},
      danger: {},
    },
    alignment: {},
  },
  compoundVariants: [],
  defaultVariants: {},
});

export type BadgeRecipeProps = NonNullable<
  RecipeVariantProps<typeof badgeRecipe>
>;
