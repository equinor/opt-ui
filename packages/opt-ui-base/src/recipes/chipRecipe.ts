import { RecipeVariantProps, sva } from "@equinor/opt-ui-styled-system/css";

export const chipRecipe = sva({
  slots: ["root", "adornment"],
  base: {
    root: {
      position: "relative",
      fontSize: "0.75rem",
      fontWeight: 500,
      gap: "4px",
      display: "inline-flex",
      alignItems: "center",
      minHeight: "24px",
      width: "fit-content",
      padding: "0px 8px",
      borderRadius: "100px",
      borderWidth: "1px",
      borderStyle: "solid",
      overflow: "hidden",
      justifyContent: "center",
      transitionDuration: "normal",
      transitionProperty: "background, border-color, color, box-shadow",
      transitionTimingFunction: "default",
    },
    adornment: {
      display: "flex",
      width: "18px",
      height: "18px",
      "& > svg": {
        width: "18px",
        height: "18px",
      },
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          color: "primary.main",
        },
      },
      selected: {},
    },
    variantColor: {
      primary: {
        root: {
          borderColor: "transparent",
          backgroundColor: "background.lighten",
          color: "primary.main",
        },
      },
      secondary: {
        root: {
          borderColor: "secondary.main",
          color: "secondary.main",
        },
      },
      info: {
        root: {
          borderColor: "info.main",
          color: "info.main",
        },
      },
      success: {
        root: {
          borderColor: "success.main",
          color: "success.main",
        },
      },
      warning: {
        root: {
          borderColor: "warning.main",
          color: "warning.main",
        },
      },
      danger: {
        root: {
          borderColor: "danger.main",
          color: "danger.main",
        },
      },
    },
    disabled: {
      true: {
        root: {
          cursor: "not-allowed",
          color: "text.disabled",
          borderColor: "disabled.fill",
          background: "disabled.fill",
        },
      },
    },
    clickable: {
      true: {
        root: {
          cursor: "pointer !important",
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "selected",
      variantColor: "primary",
      disabled: false,
      css: {
        root: {
          backgroundColor: "primary.highlight",
          _dark: {
            color: "text.inverted",
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "secondary",
      disabled: false,
      css: {
        root: { backgroundColor: "secondary.main", color: "text.inverted" },
      },
    },
    {
      variant: "selected",
      variantColor: "info",
      disabled: false,
      css: {
        root: { backgroundColor: "info.main", color: "text.inverted" },
      },
    },
    {
      variant: "selected",
      variantColor: "success",
      disabled: false,
      css: {
        root: { backgroundColor: "success.main", color: "text.inverted" },
      },
    },
    {
      variant: "selected",
      variantColor: "warning",
      disabled: false,
      css: {
        root: { backgroundColor: "warning.main", color: "text.inverted" },
      },
    },
    {
      variant: "selected",
      variantColor: "danger",
      disabled: false,
      css: {
        root: { backgroundColor: "danger.main", color: "text.inverted" },
      },
    },
    {
      variant: "default",
      variantColor: "primary",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "primary.hover",
            _dark: {
              color: "primary.hover",
            },
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "primary",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "primary.hover",
            _dark: {
              backgroundColor: "primary.hover",
              color: "text.inverted",
            },
          },
        },
      },
    },
    {
      variant: "default",
      variantColor: "secondary",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "secondary.hover",
            borderColor: "secondary.hover",
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "secondary",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            backgroundColor: "secondary.hover",
          },
        },
      },
    },
    {
      variant: "default",
      variantColor: "info",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "text.primary",
            borderColor: "info.hover",
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "info",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            backgroundColor: "info.hover",
            borderColor: "info.hover",
            color: "text.primary",
          },
        },
      },
    },
    {
      variant: "default",
      variantColor: "success",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "success.hover",
            borderColor: "success.hover",
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "success",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            backgroundColor: "success.hover",
            borderColor: "success.hover",
          },
        },
      },
    },
    {
      variant: "default",
      variantColor: "warning",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "warning.hover",
            borderColor: "warning.hover",
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "warning",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            backgroundColor: "warning.hover",
            borderColor: "warning.hover",
          },
        },
      },
    },
    {
      variant: "default",
      variantColor: "danger",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            color: "danger.hover",
            borderColor: "danger.hover",
          },
        },
      },
    },
    {
      variant: "selected",
      variantColor: "danger",
      clickable: true,
      disabled: false,
      css: {
        root: {
          _hover: {
            backgroundColor: "danger.hover",
            borderColor: "danger.hover",
          },
        },
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    variantColor: "primary",
    disabled: false,
  },
});

export type ChipRecipeProps = NonNullable<
  RecipeVariantProps<typeof chipRecipe>
>;
