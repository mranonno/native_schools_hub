export const handleVerify = async () => {
  const value = await AsyncStorage.getItem("user_token");
  if (value) {
    return;
  } else {
  }
};
