import type { ButtonRecipeProps } from "@equinor/opt-ui-base/recipes";
import type { HTMLStyledProps } from "@equinor/opt-ui-styled-system/types";
import type { ElementType, ReactNode } from "react";

// Add target and rel to the button html attributes
interface ButtonBaseHTMLAttributes {
  target?: string;
  rel?: string;
}

// Button prop types
export interface ButtonProps
  extends ButtonBaseHTMLAttributes,
    HTMLStyledProps<"button">,
    ButtonRecipeProps {
  /**
   * The component used for the root node.
   * @defaultValue "button"
   */
  as?: ElementType;
  /**
   * The URL to link to when the button is clicked. If defined, an `<a>` element will be used as the root node.
   * @defaultValue undefined
   */
  href?: string;
  /**
   * Element placed before the children.
   * @defaultValue undefined
   */
  startIcon?: ReactNode;
  /**
   * Element placed after the children.
   * @defaultValue undefined
   */
  endIcon?: ReactNode;
  /**
   * The size of the icon.
   * @defaultValue undefined
   */
  iconSize?: number;
  /**
   * If the button is in a loading state.
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * If `true`, the ripple effect will be disabled.
   * @defaultValue false
   */
  disableRipple?: boolean;
}
