import { buttonRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";

// Component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
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
) {
  const [styledProps, restProps] = splitCssProps(other);
  const classes = buttonRecipe.raw({
    variant,
    variantColor,
    iconButton: false,
    compact,
    loading,
    fullWidth,
    disabled,
  });
  const Comp = styled(href?.length ? "a" : as);

  // Render
  return (
    <Comp
      aria-disabled={disabled}
      className={cx(css(classes.root, styledProps, cssProp), className)}
      disabled={disabled}
      href={href}
      ref={ref}
      type="button"
      {...restProps}
    >
      {children}
    </Comp>
  );
});

export default Button;
