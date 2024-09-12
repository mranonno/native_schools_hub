import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BootcampsIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.625 18.125L14.875 15l-4.25-3.125v6.25z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.5 15c0-6.904-5.596-12.5-12.5-12.5S2.5 8.096 2.5 15 8.096 27.5 15 27.5 27.5 21.904 27.5 15z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M12.5 8.75L21.25 15l-8.75 6.25"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BootcampsIcon;
