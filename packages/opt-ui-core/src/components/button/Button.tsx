import { buttonRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRefWithAs } from "../../internal/forwardRefWithAs";
import { Ripple } from "../ripple";
import type { ButtonProps } from "./Button.types";

// Component
const Button = forwardRefWithAs<ButtonProps, "button">(function Button(
  {
    children,
    className,
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
  const Comp = styled(as);
  const hasChildren = typeof children !== "undefined" && !!children;
  const isIconButton =
    !hasChildren && ((!!startIcon && !endIcon) || (!!endIcon && !startIcon));
  const classes = buttonRecipe.raw({
    variant,
    variantColor,
    iconButton: iconButton || isIconButton,
    compact,
    loading,
    fullWidth,
    disabled,
  });
  const [styledProps, restProps] = splitCssProps(other);

  // Render
  return (
    <Comp
      aria-disabled={disabled}
      className={cx(
        "opt-button",
        `opt-button--${variant}`,
        `opt-button--${variantColor}`,
        css(classes.root, styledProps, cssProp),
        className
      )}
      disabled={disabled}
      ref={ref}
      type={as === "button" ? "button" : undefined}
      {...restProps}
    >
      {children}
      {!disabled && !disableRipple && <Ripple />}
    </Comp>
  );
});

export default Button;
