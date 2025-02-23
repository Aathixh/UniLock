import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const Lock = (props: any) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={100} height={100} fill="url(#pattern0_13_16)" />
    <Defs>
      <Pattern
        id="pattern0_13_16"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_13_16" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_13_16"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default Lock;
