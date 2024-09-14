import React, { createContext, useState } from "react";
export const MainContext = createContext();
const MyProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState("");
  const value = {
    modalVisible,
    setModalVisible,
    setVerifyingEmail,
    verifyingEmail,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
