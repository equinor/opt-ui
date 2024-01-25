import { badgeRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import type { BadgeProps } from ".";

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      children,
      css: cssProp,
      variant = "default",
      variantColor = "primary",
      startIcon = undefined,
      endIcon = undefined,
      visible = true,
      ...other
    },
    ref
  ) => {
    const classes = badgeRecipe.raw({
      variant,
      variantColor,
    });
    return visible ? (
      <styled.div ref={ref}>
        <styled.span
          className={cx(
            css(classes.root, cssProp),
            "opt-badge",
            `opt-badge--${variant}`,
            `opt-badge--${variantColor}`,
            className
          )}
          {...other}
        >
          {endIcon && <span className={css(classes.adornment)}>{endIcon}</span>}
          10
          {startIcon && (
            <span className={css(classes.adornment)}>{startIcon}</span>
          )}
        </styled.span>
        {children}
      </styled.div>
    ) : null;
  }
);
Badge.displayName = "Badge";
export default Badge;
