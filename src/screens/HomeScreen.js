import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <Text>Navigation</Text>
      <View style={styles.bootCampsContainer}>
        <Text>Bootcamps</Text>
      </View>
      <View style={styles.dashboardContainer}>
        <Text>Dashboard</Text>
      </View>
      <View style={styles.chatsContainer}>
        <Text>Chats</Text>
      </View>
      <View style={styles.calenderContainer}>
        <Text>Calender</Text>
      </View>
      <View style={styles.purchasedContainer}>
        <Text>Purchased</Text>
      </View>
      <View style={styles.communityContainer}>
        <Text>Community</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bootCampsContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27AC1F",
  },
  dashboardContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EB77E6",
  },
  chatsContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDB70B",
  },
  calenderContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0CA9B2",
  },
  purchasedContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9908F5",
  },
  communityContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EF7817",
  },
  mainContainer: {
    backgroundColor: "#F8F8F8",
    flex: 1,
  },
});
