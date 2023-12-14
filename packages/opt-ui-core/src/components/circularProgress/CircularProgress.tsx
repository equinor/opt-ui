import { circularProgressRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef, type AriaAttributes, type CSSProperties } from "react";
import type { CircularProgressProps } from "./CircularProgress.types";

// Component
const BASE_SIZE = 48;
const CircularProgress = forwardRef<HTMLSpanElement, CircularProgressProps>(
  function CircularProgress(
    {
      className,
      style = {},
      css: cssProp,
      variant = "indeterminate",
      value = 0,
      size = BASE_SIZE,
      thickness = 4,
      ...other
    },
    ref
  ) {
    const classes = circularProgressRecipe.raw({
      variant,
    });
    const [styledProps, restProps] = splitCssProps(other);

    // Define styles based on size and value
    const circumference = 2 * Math.PI * ((BASE_SIZE - thickness) / 2);
    const rootProps: Pick<AriaAttributes, "aria-valuenow"> = {};
    const circleStyle: Pick<
      CSSProperties,
      "strokeDasharray" | "strokeDashoffset"
    > = {};
    if (variant === "determinate") {
      rootProps["aria-valuenow"] = Math.round(value);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`;
    }

    // Render
    return (
      <styled.span
        className={cx(
          "opt-progress",
          "opt-progress--circular",
          `opt-progress--${variant}`,
          className,
          css(classes.root, styledProps, cssProp)
        )}
        ref={ref}
        role="progressbar"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...style,
        }}
        {...rootProps}
        {...restProps}
      >
        <svg
          className={css(classes.svg)}
          viewBox={`${BASE_SIZE / 2} ${
            BASE_SIZE / 2
          } ${BASE_SIZE} ${BASE_SIZE}`}
        >
          <circle
            className={css(classes.circle, classes.circle__background)}
            cx={BASE_SIZE}
            cy={BASE_SIZE}
            r={(BASE_SIZE - thickness) / 2}
            style={{ strokeWidth: thickness }}
          />
          <circle
            className={css(classes.circle, classes.circle__progress)}
            cx={BASE_SIZE}
            cy={BASE_SIZE}
            r={(BASE_SIZE - thickness) / 2}
            style={{ strokeWidth: thickness, ...circleStyle }}
          />
        </svg>
      </styled.span>
    );
  }
);

export default CircularProgress;
