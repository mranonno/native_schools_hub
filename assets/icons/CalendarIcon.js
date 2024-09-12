import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CalendarIcon(props) {
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
        d="M10 2.5v3.75M20 2.5v3.75M4.375 11.363h21.25M26.25 10.625V21.25c0 3.75-1.875 6.25-6.25 6.25H10c-4.375 0-6.25-2.5-6.25-6.25V10.625c0-3.75 1.875-6.25 6.25-6.25h10c4.375 0 6.25 2.5 6.25 6.25z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.618 17.125h.011M19.618 20.875h.011M14.994 17.125h.011M14.994 20.875h.011M10.368 17.125h.011M10.368 20.875h.011"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalendarIcon;
