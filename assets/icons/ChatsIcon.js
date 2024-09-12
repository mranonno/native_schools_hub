import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ChatsIcon(props) {
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
        d="M27.5 12.5v3.75c0 5-2.5 7.5-7.5 7.5h-.625c-.387 0-.762.188-1 .5l-1.875 2.5c-.825 1.1-2.175 1.1-3 0l-1.875-2.5c-.2-.275-.662-.5-1-.5H10c-5 0-7.5-1.25-7.5-7.5V10C2.5 5 5 2.5 10 2.5h7.5"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.375 8.75a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
        fill="#fff"
      />
      <Path
        d="M19.995 13.75h.011M14.994 13.75h.011M9.993 13.75h.011"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChatsIcon;
