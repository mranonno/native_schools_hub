import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../theme/Colors";
import { Fonts } from "../theme/Fonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import messageNotify from "../../assets/icons/message-notif.png";
import BootcampsIcon from "../../assets/icons/BootcampsIcon";
import ChatsIcon from "../../assets/icons/ChatsIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import PurchasedIcon from "../../assets/icons/PurchasedIcon";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import CommunityIcon from "../../assets/icons/CommunityIcon";
import ActivitiesIcon from "../../assets/icons/ActivitiesIcon";
import TechnicalIcon from "../../assets/icons/TechnicalIcon";
import InterviewIcon from "../../assets/icons/InterviewIcon";
import ShowIcon from "../../assets/icons/ShowIcon";
import AudioAndVideoIcon from "../../assets/icons/AudioAndVideoIcon";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import DocumentsIcon from "../../assets/icons/Documents";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import ActiveNotifyIcon from "../../assets/icons/ActiveNotifyIcon";
const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MenuIcon />
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <View style={styles.headerIcons}>
            <Feather name="repeat" size={20} color={Colors.GrayButtonColor} />
          </View>
          <View style={styles.headerIcons}>
            <ActiveNotifyIcon />
            <Text style={styles.messageCountText}>10</Text>
          </View>
          <View style={styles.headerIcons}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={Colors.GrayButtonColor}
            />
          </View>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <FontAwesome
          name="user-circle-o"
          size={44}
          color={Colors.GrayButtonColor}
        />
        <View>
          <Text style={styles.profileName}>Anonno Das</Text>
          <Text style={styles.profileMail}>anonnodas97@gmail.com</Text>
          <Text style={styles.profileId}>ID: 1122</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={[styles.scrolledNavigationContainer]}>
        <Text style={styles.navigationText}>Navigations</Text>
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: Colors.Primary }]}
          >
            <View style={styles.imageContainer}>
              <BootcampsIcon />
            </View>
            <Text style={styles.containerText}>Bootcamps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#eb77e6" }]}
          >
            <View style={styles.imageContainer}>
              <DashboardIcon />
            </View>
            <Text style={styles.containerText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#9808F5" }]}
          >
            <View style={styles.imageContainer}>
              <ChatsIcon />
            </View>
            <Text style={styles.containerText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#EF7917" }]}
          >
            <View style={styles.imageContainer}>
              <CalendarIcon />
            </View>
            <Text style={styles.containerText}>Calender</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#097EF2" }]}
          >
            <View style={styles.imageContainer}>
              <PurchasedIcon />
            </View>
            <Text style={styles.containerText}>Purchased</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#83B4FF" }]}
          >
            <View style={styles.imageContainer}>
              <CommunityIcon />
            </View>
            <Text style={styles.containerText}>Community</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#00D7C5" }]}
          >
            <View style={styles.imageContainer}>
              <ActivitiesIcon />
            </View>
            <Text style={styles.containerText}>Day to day{"\n"}activities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#F34141" }]}
          >
            <View style={styles.imageContainer}>
              <TechnicalIcon />
            </View>
            <Text style={styles.containerText}>Technical Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#4F14EA" }]}
          >
            <View style={styles.imageContainer}>
              <InterviewIcon />
            </View>
            <Text style={styles.containerText}>Mock Interview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#639DCB" }]}
          >
            <View style={styles.imageContainer}>
              <ShowIcon />
            </View>
            <Text style={styles.containerText}>Show N Tell</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#DA7297" }]}
          >
            <View style={styles.imageContainer}>
              <AudioAndVideoIcon />
            </View>
            <Text style={styles.containerText}>Audios & Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#5BBCFF" }]}
          >
            <View style={styles.imageContainer}>
              <NotificationIcon />
            </View>
            <Text style={styles.containerText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("comingSoon")}
            style={[styles.navigationItem, { backgroundColor: "#FDB70A" }]}
          >
            <View style={styles.imageContainer}>
              <DocumentsIcon />
            </View>
            <Text style={styles.containerText}>Documents</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  messageCountText: {
    position: "absolute",
    backgroundColor: "red",
    color: "white",
    padding: 1,
    borderRadius: 4,
    top: -2,
    right: -2,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  headerIcons: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.BackDropColor,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  profileId: { color: Colors.BodyText },
  profileMail: { color: Colors.BodyText },
  profileName: {
    fontSize: Fonts.HR,
    fontWeight: "600",
    color: Colors.Heading,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  navigationText: {
    fontSize: Fonts.HR,
    fontWeight: "600",
    marginVertical: 18,
  },
  scrolledNavigationContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  containerText: {
    color: "white",
    fontSize: Fonts.HR,
    fontWeight: "800",
    marginTop: 10,
    textAlign: "center",
  },
  imageContainer: {
    backgroundColor: Colors.WhiteOpacityColor,
    borderRadius: 50,
    width: 67,
    height: 67,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
  navigationItem: {
    width: "47%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 139,
    borderRadius: 14,
  },
  mainContainer: {
    backgroundColor: "#F8F8F8",
    flex: 1,
  },
});
