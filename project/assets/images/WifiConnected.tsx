import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const WifiConnected = (props: any) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#pattern0_13_71)" />
    <Defs>
      <Pattern
        id="pattern0_13_71"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_13_71" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_13_71"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default WifiConnected;
