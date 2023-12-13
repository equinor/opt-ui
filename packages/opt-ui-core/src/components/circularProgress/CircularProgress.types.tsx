import type {
  CircularProgressRecipeProps,
  CircularProgressRecipeSlots,
} from "@equinor/opt-ui-base/recipes";
import type {
  HTMLStyledProps,
  JsxStyleProps,
} from "@equinor/opt-ui-styled-system/types";
import type { ReactNode } from "react";

export interface CircularProgressProps
  extends HTMLStyledProps<"span">,
    CircularProgressRecipeProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The classNames for the component slots.
   */
  classNames?: Record<CircularProgressRecipeSlots, string>;
  /**
   * The color of the loader.
   * @defaultValue undefined
   */
  color?: JsxStyleProps["color"];
  /**
   * The value of the progress indicator for the determinate variant.
   *
   * @defaultValue 0
   */
  value?: number;
  /**
   * The size of the circle.
   * @defaultValue 48
   */
  size?: number;
  /**
   * The thickness of the circle.
   * @defaultValue 4
   */
  thickness?: number;
}
