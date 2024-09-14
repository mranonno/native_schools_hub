import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComingSoonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.comingSoonText}>Coming soon...</Text>
    </View>
  );
};

export default ComingSoonScreen;

const styles = StyleSheet.create({
  comingSoonText: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
