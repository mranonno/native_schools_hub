import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export const Fonts = {
  HL: responsiveScreenFontSize(2.4), // For large headings
  HR: responsiveScreenFontSize(2.0), // Regular headings
  HS: responsiveScreenFontSize(1.8), // Sub-headings or smaller headings
  BL: responsiveScreenFontSize(1.6), // Larger body text
  BR: responsiveScreenFontSize(1.4), // Regular body text
  BS: responsiveScreenFontSize(1.2), // Small body text or captions
};
