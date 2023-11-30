import type { JsxStyleProps } from "@equinor/opt-ui-styled-system/types";

export interface RippleElement {
  x: number;
  y: number;
  size: number;
}

export interface RippleProps {
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The duration of the ripple effect.
   * @defaultValue 750
   */
  duration?: number;
  /**
   * The background color of the ripple effect.
   * @defaultValue "#000"
   */
  backgroundColor?: JsxStyleProps["backgroundColor"];
}
