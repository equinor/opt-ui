import { buttonRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import { Ripple } from "../ripple";
import type { ButtonProps } from "./Button.types";

// Component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      css: cssProp,
      as = "button",
      variant = "contained",
      variantColor = "primary",
      compact = false,
      loading = false,
      fullWidth = false,
      disabled = false,
      disableRipple = false,
      href = undefined,
      startIcon = undefined,
      endIcon = undefined,
      iconSize = undefined,
      ...other
    },
    ref
  ) => {
    const hasChildren = typeof children !== "undefined" && !!children;
    const isIconButton =
      !hasChildren && ((!!startIcon && !endIcon) || (!!endIcon && !startIcon));
    const classes = buttonRecipe.raw({
      variant,
      variantColor,
      iconButton: isIconButton,
      compact,
      loading,
      fullWidth,
      disabled,
    });
    const Comp = styled(href?.length ? "a" : as);
    const [styledProps, restProps] = splitCssProps(other);

    // Render
    return (
      <Comp
        aria-disabled={disabled}
        className={cx(
          css(classes.root, styledProps, cssProp),
          "opt-button",
          `opt-button--${variant}`,
          `opt-button--${variantColor}`,
          className
        )}
        disabled={disabled}
        href={href}
        ref={ref}
        type="button"
        {...restProps}
      >
        {children}
        {!disabled && !disableRipple && <Ripple />}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
