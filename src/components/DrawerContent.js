import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Colors } from "../theme/Colors";
import { Fonts } from "../theme/Fonts";
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeDrawerIcon from "../../assets/icons/HomeDrawerIcon";
import ProfileDrawerIcon from "../../assets/icons/ProfileDrawerIcon";
import BootCampsDrawerIcon from "../../assets/icons/BootCampsDrawerIcon";
import TechnicalDrawerIcon from "../../assets/icons/TechnicalDrawerIcon";
import DocumentsDrawerIcon from "../../assets/icons/DocumentsDrawerIcon";
import PassDrawerIcon from "../../assets/icons/PassDrawerIcon";
import UpdateDrawerIcon from "../../assets/icons/UpdateDrawerIcon";
import SignOutDrawerIcon from "../../assets/icons/SignOutDrawerIcon";
import SettingDrawerIcon from "../../assets/icons/SettingDrawerIcon";
import Toast from "react-native-root-toast";

const DrawerContent = () => {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem("user_token");
      navigation.dispatch(DrawerActions.closeDrawer());
      Toast.show("Logged out!");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "signIn" }],
        })
      );
    } catch (error) {
      console.log("Error removing token", error);
    }
  };
  return (
    <View style={styles.container}>
      <View>
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
        <View style={{ marginTop: 35, flexDirection: "column", gap: 35 }}>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <HomeDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Home
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <ProfileDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Profile
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <BootCampsDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Bootcamps
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <TechnicalDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Technical Tests
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <DocumentsDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              My Documents
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <PassDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Change Password
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <SettingDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Display Setting
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30 }}>
            <UpdateDrawerIcon height={20} weight={20} />
            <Text style={{ color: Colors.Heading, fontWeight: "500" }}>
              Check for Update
            </Text>
          </View>
          <View style={[styles.horizontalLine, { borderBottomWidth: 2 }]} />
        </View>
      </View>

      <View>
        <View style={styles.horizontalLine} />
        <TouchableOpacity
          style={{ flexDirection: "row", gap: 30 }}
          onPress={() => handleSignOut()}
        >
          <SignOutDrawerIcon height={20} weight={20} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
        <Text
          style={{
            fontSize: Fonts.BR,
            color: Colors.Heading,
            fontWeight: "500",
          }}
        >
          Version: 2.9.17
        </Text>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#00000015",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  signOutText: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },
  profileMail: { color: Colors.BodyText, fontWeight: "500" },
  profileName: {
    fontSize: Fonts.HR,
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
