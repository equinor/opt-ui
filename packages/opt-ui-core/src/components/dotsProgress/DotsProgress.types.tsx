import type { DotsProgressRecipeProps } from "@equinor/opt-ui-base/recipes";
import type {
  HTMLStyledProps,
  JsxStyleProps,
} from "@equinor/opt-ui-styled-system/types";
import type { ReactNode } from "react";

export interface DotsProgressProps
  extends HTMLStyledProps<"span">,
    DotsProgressRecipeProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The color of the loader.
   * @defaultValue undefined
   */
  color?: JsxStyleProps["color"];
  /**
   * The size of the circle.
   * @defaultValue 32
   */
  size?: number;
}
