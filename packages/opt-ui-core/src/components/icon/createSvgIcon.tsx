import { forwardRef, memo, type ReactNode } from "react";
import Icon from "./Icon";
import type { IconComponent, IconProps } from "./Icon.types";

// Prop types
type SvgIconType = {
  name?: string;
  prefix?: string;
  width: string | number;
  height: string | number;
  svgPathData: string;
};
type SvgIconProps = SvgIconType & {
  sizes?: { small: SvgIconType }; // ! EDS way to have the icon in different sizes taking care of the svg path data, we don't used for now
};
interface CreateSvgIconProps extends Omit<IconProps, "children"> {
  children?: ReactNode;
}

/**
 * Creates a reusable SVG icon component.
 *
 * @param options - The parameters for the SVG icon.
 * @returns The SVG icon component.
 */
export function createSvgIcon({ width, height, svgPathData }: SvgIconProps) {
  const SvgIcon = memo(
    forwardRef<HTMLSpanElement, CreateSvgIconProps>(
      function SvgIcon(props, ref) {
        return (
          <Icon ref={ref} {...props}>
            <svg
              fill="currentcolor"
              height={`${height}`}
              style={{ border: "currentcolor" }}
              viewBox={`0 0 ${width} ${height}`}
              width={`${width}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d={`${svgPathData}`}
                fillRule="evenodd"
              />
            </svg>
          </Icon>
        );
      }
    ) as IconComponent
  );
  SvgIcon.displayName = "SvgIcon";
  return SvgIcon;
}
