import type { ChipRecipeProps } from "@equinor/opt-ui-base/recipes";
import type { HTMLStyledProps } from "@equinor/opt-ui-styled-system/types";
import type { MouseEventHandler, ReactNode } from "react";

export interface ChipProps extends HTMLStyledProps<"span">, ChipRecipeProps {
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
   * If the button is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}
