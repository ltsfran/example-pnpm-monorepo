import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheck = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M18.71 7.21a.999.999 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a.999.999 0 0 0 0-1.47Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
