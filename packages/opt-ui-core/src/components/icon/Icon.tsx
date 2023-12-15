import { iconRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import type { IconProps } from "./Icon.types";

// Component
const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {
    children,
    className,
    style = {},
    css: cssProp,
    color = "inherit",
    size = 24,
    rotation = 0,
    ...other
  },
  ref
) {
  const classes = iconRecipe.raw();
  const [styledProps, restProps] = splitCssProps(other);

  // Render
  return (
    <styled.span
      className={cx(
        "opt-icon",
        className,
        css(classes.root, styledProps, cssProp)
      )}
      color={color}
      ref={ref}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </styled.span>
  );
});

export default Icon;
