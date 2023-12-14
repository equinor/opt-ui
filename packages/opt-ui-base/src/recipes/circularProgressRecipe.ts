import {
  sva,
  type RecipeVariantProps,
} from "@equinor/opt-ui-styled-system/css";

export const circularProgressRecipe = sva({
  slots: ["root", "svg", "circle", "circle__background", "circle__progress"],
  base: {
    root: {
      display: "inline-block",
      color: "primary.main",
      width: "48px",
      height: "48px",
    },
    svg: {
      display: "block",
    },
    circle: {
      stroke: "currentcolor",
      strokeLinecap: "round",
      fill: "none",
      strokeWidth: 4,
    },
    circle__background: {
      opacity: 0.2,
    },
  },
  variants: {
    /**
     * The variant to use.
     */
    variant: {
      determinate: {
        root: {
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          transform: "rotate(-90deg)",
        },
        circle__progress: {
          transition:
            "stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
      indeterminate: {
        root: {
          animationName: "spin",
          animationDuration: "1.4s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        },
        circle__progress: {
          animationName: "circular-dash",
          animationDuration: "1.4s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          strokeDasharray: "80px, 200px",
          strokeDashoffset: "0px",
        },
      },
    },
  },
  defaultVariants: {
    variant: "indeterminate",
  },
});

export type CircularProgressRecipeProps = NonNullable<
  RecipeVariantProps<typeof circularProgressRecipe>
>;
