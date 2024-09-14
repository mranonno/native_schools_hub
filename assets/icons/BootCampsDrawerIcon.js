import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BootCampsDrawerIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5zM14 8h5M15 12h4M17 16h2"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 11.29a1.81 1.81 0 100-3.62 1.81 1.81 0 000 3.62zM12 16.33a3.02 3.02 0 00-2.74-2.72 7.72 7.72 0 00-1.52 0A3.03 3.03 0 005 16.33"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BootCampsDrawerIcon;
