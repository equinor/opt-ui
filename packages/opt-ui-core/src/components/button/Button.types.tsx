import type { ButtonRecipeProps } from "@equinor/opt-ui-base/recipes";
import type { HTMLStyledProps } from "@equinor/opt-ui-styled-system/types";
import type { ReactNode } from "react";

export interface ButtonProps
  extends HTMLStyledProps<"button">,
    ButtonRecipeProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
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
   * @defaultValue 18
   */
  iconSize?: number;
  /**
   * If `true`, the button will be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * If `true`, the ripple effect will be disabled.
   * @defaultValue false
   */
  disableRipple?: boolean;
}
