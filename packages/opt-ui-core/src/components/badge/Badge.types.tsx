import type { BadgeRecipeProps } from "@equinor/opt-ui-base/recipes";
import type { HTMLStyledProps } from "@equinor/opt-ui-styled-system/types";
import type { ReactNode } from "react";

export interface BadgeProps extends HTMLStyledProps<"div">, BadgeRecipeProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * If `true`, the button will be disabled.
   * @defaultValue false
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
   * If false the badge will be invisible.
   */
  visible?: boolean;
  /**
   * If the content is a number, the max number to show. If a content pass this max number the badge will show <max>+
   */
  max?: number;
  /**
   * Wrapped shape the badge should overlap. If use a circle the badge will be moved a 14% to the center relative to the alignment position.
   */
  overlap: "circle" | "rectangle";
}
