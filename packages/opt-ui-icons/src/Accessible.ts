import { createSvgIcon } from "@equinor/opt-ui-core";

export default createSvgIcon({
  name: "accessible",
  prefix: "eds",
  height: "24",
  width: "24",
  svgPathData:
    "M14 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm-2 3c2.83 0 5.89-.3 8.5-1l.5 2c-1.86.5-4 .83-6 1v13h-2v-6h-2v6H9V9c-2-.17-4.14-.5-6-1l.5-2c2.61.7 5.67 1 8.5 1Z",
  sizes: {
    small: {
      name: "accessible_small",
      prefix: "eds",
      height: "18",
      width: "18",
      svgPathData:
        "M10.5 3c0 .825-.675 1.5-1.5 1.5S7.5 3.825 7.5 3 8.175 1.5 9 1.5s1.5.675 1.5 1.5ZM9 5.25c2.123 0 4.418-.225 6.375-.75L15.75 6c-1.395.375-3 .622-4.5.75v9.75h-1.5V12h-1.5v4.5h-1.5V6.75c-1.5-.128-3.105-.375-4.5-.75l.375-1.5c1.957.525 4.253.75 6.375.75Z",
    },
  },
});
