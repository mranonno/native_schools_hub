import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Colors } from "../theme/Colors";
import { RegularFonts } from "../theme/RegularFonts";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerContent = () => {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem("user_token");
      navigation.navigate("signIn");
    } catch (error) {
      console.log("Error removing token", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <FontAwesome
          name="user-circle-o"
          size={44}
          color={Colors.GrayButtonColor}
        />
        <View>
          <Text style={styles.profileName}>Anonno Das</Text>
          <Text style={styles.profileMail}>anonnodas97@gmail.com</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleSignOut()}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  signOutText: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },
  profileMail: { color: Colors.BodyText, fontWeight: "500" },
  profileName: {
    fontSize: RegularFonts.HR,
    fontWeight: "600",
    color: Colors.Heading,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
});
