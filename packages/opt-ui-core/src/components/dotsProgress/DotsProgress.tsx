import { dotsProgressRecipe } from "@equinor/opt-ui-base/recipes";
import { css, cx } from "@equinor/opt-ui-styled-system/css";
import { splitCssProps, styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef } from "react";
import type { DotsProgressProps } from "./DotsProgress.types";

// Component
const DotsProgress = forwardRef<HTMLSpanElement, DotsProgressProps>(
  function DotsProgress({ className, css: cssProp, size = 32, ...other }, ref) {
    const classes = dotsProgressRecipe.raw();
    const [styledProps, restProps] = splitCssProps(other);

    // Render
    return (
      <styled.span
        className={cx(
          "opt-progress",
          "opt-progress--dots",
          className,
          css(classes.root, styledProps, cssProp)
        )}
        ref={ref}
        role="progressbar"
        {...restProps}
      >
        <svg
          className={css(classes.svg)}
          style={{
            width: size,
            height: size / 2,
          }}
          viewBox="0 0 16 4"
        >
          <circle
            className={css(classes.circle, classes.circle1)}
            cx={2}
            cy={2}
            r={2}
          />
          <circle
            className={css(classes.circle, classes.circle2)}
            cx={8}
            cy={2}
            r={2}
          />
          <circle
            className={css(classes.circle, classes.circle3)}
            cx={14}
            cy={2}
            r={2}
          />
        </svg>
      </styled.span>
    );
  }
);

export default DotsProgress;
