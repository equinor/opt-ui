import type { IconRecipeProps } from "@equinor/opt-ui-base/recipes";
import type {
  HTMLStyledProps,
  JsxStyleProps,
} from "@equinor/opt-ui-styled-system/types";
import type {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";

export interface IconProps extends HTMLStyledProps<"span">, IconRecipeProps {
  /**
   * The icon an svg or a component.
   */
  children: ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The color to be used.
   * @defaultValue "inherit"
   */
  color?: JsxStyleProps["color"];
  /**
   * The size of the icon.
   * @defaultValue 24
   */
  size?: number;
  /**
   * Rotation of the icon.
   * @defaultValue 0
   */
  rotation?: number;
}

export interface IconComponent
  extends ForwardRefExoticComponent<
    Omit<IconProps, "children"> & RefAttributes<HTMLSpanElement>
  > {}
