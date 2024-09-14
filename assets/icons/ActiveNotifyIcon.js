import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ActiveNotifyIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.333 8.333v2.5c0 3.334-1.666 5-5 5h-.417a.845.845 0 00-.666.334L11 17.833c-.55.734-1.45.734-2 0l-1.25-1.666c-.133-.184-.442-.334-.667-.334h-.417c-3.333 0-5-.833-5-5V6.667c0-3.334 1.667-5 5-5h5"
        stroke="#546A7E"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 5.833a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"
        fill="#27AC1F"
      />
      <Path
        d="M13.33 9.167h.008M9.996 9.167h.008M6.662 9.167h.008"
        stroke="#546A7E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ActiveNotifyIcon;
