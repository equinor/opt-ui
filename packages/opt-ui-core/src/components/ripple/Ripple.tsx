import { rippleRecipe } from "@equinor/opt-ui-base/recipes";
import { cx } from "@equinor/opt-ui-styled-system/css";
import { styled } from "@equinor/opt-ui-styled-system/jsx";
import { forwardRef, useState, type MouseEvent } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import type { RippleElement, RippleProps } from "./Ripple.types";

/**
 * A hook to manage debounced cleanup for ripples.
 *
 * @param rippleCount - The count of ripples.
 * @param duration - The duration of the ripples.
 * @param cleanUpFunction - The function to clean up ripples.
 */
function useDebouncedRippleCleanUp(
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) {
  useIsomorphicLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | null = null;
    if (rippleCount > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- false positive
      if (bounce) clearTimeout(bounce);
      bounce = setTimeout(() => {
        cleanUpFunction();
        if (bounce) clearTimeout(bounce);
      }, duration * 2);
    }
    return () => {
      if (bounce) clearTimeout(bounce);
    };
  }, [rippleCount, duration, cleanUpFunction]);
}

// Component
const Ripple = forwardRef<HTMLSpanElement, RippleProps>(
  ({ className, duration = 750, backgroundColor = "#000" }, ref) => {
    const [rippleArray, setRippleArray] = useState<RippleElement[]>([]);
    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
      setRippleArray([]);
    });
    const classes = rippleRecipe();

    // Methods
    const addRipple = (event: MouseEvent<HTMLDivElement>) => {
      const { pageX, pageY, currentTarget } = event;
      const rect = currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = pageX - (rect.x + window.scrollX) - size / 2;
      const y = pageY - (rect.y + window.scrollY) - size / 2;
      const newRipple = {
        x,
        y,
        size,
      };
      setRippleArray([...rippleArray, newRipple]);
    };

    // Render
    return (
      <styled.span
        className={cx(classes.root, "opt-ripple", className)}
        onClick={addRipple}
        ref={ref}
      >
        {rippleArray.length > 0 &&
          rippleArray.map((ripple, index) => (
            <styled.span
              animationDuration={`${duration}ms`}
              backgroundColor={backgroundColor}
              className={cx("opt-ripple__element", classes.element)}
              key={`ripple.element-${index}`}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          ))}
      </styled.span>
    );
  }
);

Ripple.displayName = "Ripple";

export default Ripple;
