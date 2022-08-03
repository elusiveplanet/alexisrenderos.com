import * as React from "react";
import { SVGProps } from "react";

const SvgTopRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 1h5v5m0-5L1 7l6-6Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
    />
  </svg>
);

export default SvgTopRightArrow;
