import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../theme/Colors";
import { RegularFonts } from "../theme/RegularFonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import messageNotify from "../../assets/icons/message-notif.png";
const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name="menu"
          size={28}
          color={Colors.GrayButtonColor}
        />
        <View style={styles.iconsContainer}>
          <View style={styles.headerIcons}>
            <Feather name="repeat" size={20} color={Colors.GrayButtonColor} />
          </View>
          <View style={styles.headerIcons}>
            <Image source={messageNotify} />
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
            style={[styles.navigationItem, { backgroundColor: Colors.Primary }]}
          >
            <View style={styles.imageContainer}>
              <Feather name="play-circle" size={30} color="white" />
            </View>
            <Text style={styles.containerText}>Bootcamps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#eb77e6" }]}
          >
            <View style={styles.imageContainer}>
              <MaterialCommunityIcons
                name="card-bulleted-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.containerText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#9808F5" }]}
          >
            <View style={styles.imageContainer}>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.containerText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#EF7917" }]}
          >
            <View style={styles.imageContainer}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.containerText}>Calender</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#097EF2" }]}
          >
            <View style={styles.imageContainer}>
              <MaterialCommunityIcons
                name="shopping-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.containerText}>Purchased</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#83B4FF" }]}
          >
            <View style={styles.imageContainer}>
              <FontAwesome5 name="users" size={30} color="white" />
            </View>
            <Text style={styles.containerText}>Community</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#00D7C5" }]}
          >
            <View style={styles.imageContainer}>
              <MaterialCommunityIcons
                name="chart-line"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.containerText}>Day to day{"\n"}activities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#F34141" }]}
          >
            <View style={styles.imageContainer}>
              <MaterialCommunityIcons
                name="text-box-check-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.containerText}>Technical Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#4F14EA" }]}
          >
            <View style={styles.imageContainer}>
              <Ionicons name="barcode-sharp" size={30} color="white" />
            </View>
            <Text style={styles.containerText}>Mock Interview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#639DCB" }]}
          >
            <View style={styles.imageContainer}>
              <Entypo name="documents" size={30} color="white" />
            </View>
            <Text style={styles.containerText}>Show N Tell</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#DA7297" }]}
          >
            <View style={styles.imageContainer}>
              <AntDesign name="appstore-o" size={30} color="white" />
            </View>
            <Text style={styles.containerText}>Audios & Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#5BBCFF" }]}
          >
            <View style={styles.imageContainer}>
              <Ionicons name="notifications-outline" size={30} color="white" />
            </View>
            <Text style={styles.containerText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationItem, { backgroundColor: "#FDB70A" }]}
          >
            <View style={styles.imageContainer}>
              <Ionicons name="document-text-outline" size={30} color="white" />
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
    paddingRight: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  profileId: { color: Colors.BodyText },
  profileMail: { color: Colors.BodyText },
  profileName: {
    fontSize: RegularFonts.HR,
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
    fontSize: RegularFonts.HR,
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
    fontSize: RegularFonts.HR,
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
    gap: 20,
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
