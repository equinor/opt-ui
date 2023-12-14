import { buttonRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRefWithAs } from "../../internal/forwardRefWithAs";
import { CircularProgress } from "../circularProgress";
import { DotsProgress } from "../dotsProgress";
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
    loaderSize,
    ...other
  },
  ref
) {
  const Comp = styled(as);
  const hasChildren = typeof children !== "undefined" && !!children;
  const isIconButton =
    iconButton ||
    (!hasChildren && ((!!startIcon && !endIcon) || (!!endIcon && !startIcon)));
  const classes = buttonRecipe.raw({
    variant,
    variantColor,
    iconButton: isIconButton,
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
        className,
        css(classes.root, styledProps, cssProp)
      )}
      disabled={disabled}
      ref={ref}
      type={as === "button" ? "button" : undefined}
      {...restProps}
    >
      {!loading ? (
        <>
          {children}
          {!disabled && !disableRipple && <Ripple />}
        </>
      ) : (
        <>
          {isIconButton ? (
            <CircularProgress css={classes.loader} size={loaderSize ?? 24} />
          ) : (
            <DotsProgress css={classes.loader} mx="5px" size={loaderSize} />
          )}
        </>
      )}
    </Comp>
  );
});

export default Button;
