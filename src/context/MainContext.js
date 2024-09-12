import React, { createContext } from "react";
export const MainContext = createContext();
const MyProvider = ({ children }) => {
  const value = {};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
