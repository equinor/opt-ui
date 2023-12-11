import { buttonRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRefWithAs } from "../../internal/forwardRefWithAs";
import { Ripple } from "../ripple";
import type { ButtonProps } from "./Button.types";

// Component
const Button = forwardRefWithAs<ButtonProps, "button">(function Button(
  {
    className,
    children,
    css: cssProp,
    as = "button",
    variant = "contained",
    variantColor = "primary",
    iconButton = false,
    compact = false,
    loading = false,
    fullWidth = false,
    disabled = false,
    disableRipple = false,
    startIcon = undefined,
    endIcon = undefined,
    iconSize = 18,
    ...other
  },
  ref
) {
  const hasChildren = typeof children !== "undefined" && !!children;
  const isIconButton =
    !hasChildren && ((!!startIcon && !endIcon) || (!!endIcon && !startIcon));
  const isLinkButton = as === "a";
  const classes = buttonRecipe.raw({
    variant,
    variantColor,
    iconButton: iconButton || isIconButton,
    compact,
    loading,
    fullWidth,
    disabled,
  });
  const Comp = styled(as);
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
      ref={ref}
      type={!isLinkButton && as === "button" ? "button" : undefined}
      {...restProps}
    >
      {children}
      {!disabled && !disableRipple && <Ripple />}
    </Comp>
  );
});

export default Button;
