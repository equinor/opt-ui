import { badgeRecipe } from "@equinor/opt-ui-base/recipes";
import { css } from "@equinor/opt-ui-styled-system/css";
import { styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import type { BadgeProps } from ".";

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      children,
      css: cssProp,
      variant = "contained",
      variantColor = "primary",
      disabled = false,
      startIcon = undefined,
      endIcon = undefined,
      iconSize = 18,
      visible = true,
      ...other
    },
    ref
  ) => {
    const classes = badgeRecipe.raw({
      variant,
      variantColor,
      disabled,
    });
    return visible ? (
      <styled.div ref={ref}>
        {endIcon && <span className={css(classes.adornment)}>{startIcon}</span>}
        {children}
        {endIcon && <span className={css(classes.adornment)}>{endIcon}</span>}
      </styled.div>
    ) : null;
  }
);
Badge.displayName = "Badge";
export default Badge;
