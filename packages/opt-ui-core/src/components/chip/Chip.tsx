import { chipRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import { Button } from "../button";
import type { ChipProps } from "./Chip.types";

function Icon() {
  return (
    <svg
      fill="currentColor"
      height="16px"
      role="img"
      viewBox="0 0 16 16"
      width="16px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="eds-close_small-45">close</title>
      <path
        clipRule="evenodd"
        d="M14 5.007 12.993 4 9 7.993 5.007 4 4 5.007 7.993 9 4 12.993 5.007 14 9 10.007 12.993 14 14 12.993 10.007 9 14 5.007Z"
        data-testid="eds-icon-path"
        fillRule="evenodd"
        transform="scale(0.8888888888888888)"
      />
    </svg>
  );
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      children,
      css: cssProp,
      variant = "default",
      variantColor = "primary",
      startIcon = undefined,
      endIcon = undefined,
      disabled = false,
      clickable = false,
      onClick = undefined,
      onClose = undefined,
      ...other
    },
    ref
  ) => {
    const classes = chipRecipe.raw({
      variant,
      variantColor,
      disabled,
      clickable: !!onClick || clickable,
    });
    const [styledProps, restProps] = splitCssProps(other);

    // Render
    return (
      <styled.div
        aria-disabled={disabled}
        className={cx(
          css(classes.root, styledProps, cssProp),
          "opt-chip",
          `opt-chip--${variant}`,
          `opt-chip--${variantColor}`,
          className
        )}
        paddingRight={onClose ? "4px" : undefined}
        ref={ref}
        {...restProps}
      >
        {startIcon && (
          <span className={css(classes.adornment)}>{startIcon}</span>
        )}
        {children}
        {endIcon && <span className={css(classes.adornment)}>{endIcon}</span>}
        {!!onClose && (
          <Button
            color="inherit"
            compact
            disabled={disabled}
            height={18}
            minHeight={18}
            minWidth={18}
            onClick={onClose}
            startIcon={<Icon />}
            variant="ghost"
            variantColor={variantColor}
            width={18}
          />
        )}
      </styled.div>
    );
  }
);

Chip.displayName = "Chip";

export default Chip;
