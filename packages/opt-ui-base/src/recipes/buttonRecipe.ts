import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const buttonRecipe = sva({
  slots: ["root", "adornment"],
  base: {
    root: {
      position: "relative",
      textStyle: "bodyShort",
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      minWidth: "36px",
      minHeight: "36px",
      width: "fit-content",
      padding: "5px 15px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "4px",
      appearance: "none",
      outline: 0,
      justifyContent: "center",
      textDecoration: "none",
      userSelect: "none",
      cursor: "pointer",
      overflow: "hidden",
      transitionDuration: "normal",
      transitionProperty: "background, border-color, color, box-shadow",
      transitionTimingFunction: "default",
      boxSizing: "border-box",
      _focusVisible: {
        outlineWidth: "1px",
        outlineStyle: "dashed",
        outlineOffset: "2px",
      },
    },
    adornment: {
      display: "flex",
      width: "18px",
      height: "18px",
      "& > svg": {
        width: "18px",
        height: "18px",
      },
      _first: {
        marginRight: "8px",
      },
      _last: {
        marginLeft: "8px",
      },
    },
  },
  variants: {
    variant: {
      contained: {
        root: {
          _disabled: {
            borderColor: "disabled.border !important",
            backgroundColor: "disabled.fill !important",
          },
        },
      },
      outlined: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          _disabled: {
            borderColor: "disabled.border !important",
            backgroundColor: "transparent !important",
          },
        },
      },
      ghost: {
        root: {
          borderColor: "transparent",
          backgroundColor: "transparent",
          boxShadow: "none",
          _disabled: {
            borderColor: "transparent !important",
            backgroundColor: "transparent !important",
          },
        },
      },
    },
    variantColor: {
      primary: {
        root: { _focusVisible: { outlineColor: "primary.main" } },
      },
      secondary: {
        root: { _focusVisible: { outlineColor: "secondary.main" } },
      },
      info: {
        root: { _focusVisible: { outlineColor: "info.main" } },
      },
      success: {
        root: { _focusVisible: { outlineColor: "success.main" } },
      },
      warning: {
        root: { _focusVisible: { outlineColor: "warning.main" } },
      },
      danger: {
        root: { _focusVisible: { outlineColor: "danger.main" } },
      },
    },
    iconButton: {
      true: {
        root: {
          width: "40px",
          height: "40px",
          padding: 0,
          borderRadius: "100%",
        },
      },
    },
    compact: {
      true: {
        root: {
          minWidth: "24px",
          minHeight: "24px",
        },
        adornment: {
          width: "16px",
          height: "16px",
          "& > svg": {
            width: "16px",
            height: "16px",
          },
        },
      },
    },
    loading: {
      true: {
        root: {
          pointerEvents: "none",
        },
      },
    },
    fullWidth: {
      true: {
        root: {
          width: "100%",
        },
      },
    },
    disabled: {
      true: {
        root: {
          cursor: "not-allowed !important",
          color: "text.disabled !important",
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: "contained",
      variantColor: [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
      ],
      css: {
        root: {
          color: "text.inverted",
          _hover: { color: "text.inverted" },
          _active: { color: "text.inverted" },
        },
      },
    },
    {
      variant: "contained",
      variantColor: "primary",
      css: {
        root: {
          backgroundColor: "primary.main",
          borderColor: "primary.main",
          _hover: { backgroundColor: "primary.hover" },
          _active: { backgroundColor: "primary.hover" },
        },
      },
    },
    {
      variant: "contained",
      variantColor: "secondary",
      css: {
        root: {
          backgroundColor: "secondary.main",
          borderColor: "secondary.main",
          _hover: { backgroundColor: "secondary.hover" },
          _active: { backgroundColor: "secondary.hover" },
        },
      },
    },
    {
      variant: "contained",
      variantColor: "info",
      css: {
        root: {
          backgroundColor: "info.main",
          borderColor: "info.main",
          _hover: { backgroundColor: "info.hover" },
          _active: { backgroundColor: "info.hover" },
        },
      },
    },
    {
      variant: "contained",
      variantColor: "success",
      css: {
        root: {
          backgroundColor: "success.main",
          borderColor: "success.main",
          _hover: { backgroundColor: "success.hover" },
          _active: { backgroundColor: "success.hover" },
        },
      },
    },
    {
      variant: "contained",
      variantColor: "warning",
      css: {
        root: {
          backgroundColor: "warning.main",
          borderColor: "warning.main",
          _hover: { backgroundColor: "warning.hover" },
          _active: { backgroundColor: "warning.hover" },
        },
      },
    },
    {
      variant: "contained",
      variantColor: "danger",
      css: {
        root: {
          backgroundColor: "danger.main",
          borderColor: "danger.main",
          _hover: { backgroundColor: "danger.hover" },
          _active: { backgroundColor: "danger.hover" },
        },
      },
    },
    {
      variant: "outlined",
      variantColor: "primary",
      css: {
        root: {
          color: "primary.main",
          borderColor: "primary.main",
          _hover: {
            color: "primary.main",
            backgroundColor: "primary.hoverAlt",
          },
          _active: {
            color: "primary.main",
            backgroundColor: "primary.hoverAlt",
          },
        },
      },
    },
    {
      variant: "outlined",
      variantColor: "secondary",
      css: {
        root: {
          color: "secondary.main",
          borderColor: "secondary.main",
          _hover: {
            color: "secondary.main",
            backgroundColor: "secondary.highlight",
          },
          _active: {
            color: "secondary.main",
            backgroundColor: "secondary.highlight",
          },
        },
      },
    },
    {
      variant: "outlined",
      variantColor: "info",
      css: {
        root: {
          color: "info.main",
          borderColor: "info.main",
          _hover: {
            color: "info.main",
            backgroundColor: "info.highlight",
          },
          _active: {
            color: "info.main",
            backgroundColor: "info.highlight",
          },
        },
      },
    },
    {
      variant: "outlined",
      variantColor: "success",
      css: {
        root: {
          color: "success.main",
          borderColor: "success.main",
          _hover: {
            color: "success.main",
            backgroundColor: "success.highlight",
          },
          _active: {
            color: "success.main",
            backgroundColor: "success.highlight",
          },
        },
      },
    },
    {
      variant: "outlined",
      variantColor: "warning",
      css: {
        root: {
          color: "warning.main",
          borderColor: "warning.main",
          _hover: {
            color: "warning.main",
            backgroundColor: "warning.highlight",
          },
          _active: {
            color: "warning.main",
            backgroundColor: "warning.highlight",
          },
        },
      },
    },
    {
      variant: "outlined",
      variantColor: "danger",
      css: {
        root: {
          color: "danger.main",
          borderColor: "danger.main",
          _hover: {
            color: "danger.main",
            backgroundColor: "danger.highlight",
          },
          _active: {
            color: "danger.main",
            backgroundColor: "danger.highlight",
          },
        },
      },
    },
    {
      variant: "ghost",
      variantColor: "primary",
      css: {
        root: {
          color: "primary.main",
          _hover: {
            color: "primary.main",
            backgroundColor: "primary.hoverAlt",
          },
          _active: {
            color: "primary.main",
            backgroundColor: "primary.hoverAlt",
          },
        },
      },
    },
    {
      variant: "ghost",
      variantColor: "secondary",
      css: {
        root: {
          color: "secondary.main",
          _hover: {
            color: "secondary.main",
            backgroundColor: "secondary.highlight",
          },
          _active: {
            color: "secondary.main",
            backgroundColor: "secondary.highlight",
          },
        },
      },
    },
    {
      variant: "ghost",
      variantColor: "info",
      css: {
        root: {
          color: "info.main",
          _hover: {
            color: "info.main",
            backgroundColor: "info.highlight",
          },
          _active: {
            color: "info.main",
            backgroundColor: "info.highlight",
          },
        },
      },
    },
    {
      variant: "ghost",
      variantColor: "success",
      css: {
        root: {
          color: "success.main",
          _hover: {
            color: "success.main",
            backgroundColor: "success.highlight",
          },
          _active: {
            color: "success.main",
            backgroundColor: "success.highlight",
          },
        },
      },
    },
    {
      variant: "ghost",
      variantColor: "warning",
      css: {
        root: {
          color: "warning.main",
          _hover: {
            color: "warning.main",
            backgroundColor: "warning.highlight",
          },
          _active: {
            color: "warning.main",
            backgroundColor: "warning.highlight",
          },
        },
      },
    },
    {
      variant: "ghost",
      variantColor: "danger",
      css: {
        root: {
          color: "danger.main",
          _hover: {
            color: "danger.main",
            backgroundColor: "danger.highlight",
          },
          _active: {
            color: "danger.main",
            backgroundColor: "danger.highlight",
          },
        },
      },
    },
    {
      iconButton: true,
      compact: true,
      css: {
        root: {
          width: "32px",
          height: "32px",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "contained",
    variantColor: "primary",
    iconButton: false,
    compact: false,
    loading: false,
    fullWidth: false,
    disabled: false,
  },
});

export type ButtonRecipeProps = NonNullable<
  RecipeVariantProps<typeof buttonRecipe>
>;
