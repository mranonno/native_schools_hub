import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { Colors } from "../theme/Colors";
import EmailIcon from "../../assets/icons/EmailIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MainContext } from "../context/MainContext";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../utils/axiosInstance";

const VerificationModal = () => {
  const { modalVisible, setModalVisible, verifyingEmail, otpData } =
    useContext(MainContext);
  const navigation = useNavigation();
  const handleGetCodeButton = () => {
    let checkedChanel = "email";
    console.log("ID", JSON.stringify(otpData._id, null, 1));
    console.log("email", JSON.stringify(verifyingEmail, null, 1));
    axiosInstance
      .post("/user/sendotp", {
        userId: otpData._id,
        channel: checkedChanel,
        captchaToken: "",
      })
      .then((response) => {
        console.log("response", JSON.stringify(response.data, null, 1));
        setModalVisible(false);
        // setLoading(false);
        navigation.navigate("otpScreen", { otpData, checkedChanel });
      });
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="arrowleft" size={24} color="#546A7E" />
                <Text style={styles.closeTextStyle}>Back</Text>
              </Pressable>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeTextStyle}>X</Text>
              </Pressable>
            </View>
            <View style={styles.horizontalLine} />

            <Text style={styles.verificationText}>Account Verification</Text>
            <Text style={styles.subHeadingText}>
              Please choose either email or phone to receive the OTP.
              <Text style={{ color: Colors.BodyText, fontSize: 14 }}>
                (One Time Password)
              </Text>
            </Text>
            <View style={styles.horizontalLine} />
            <View style={styles.emailContainer}>
              <View style={{ position: "absolute", top: 13, left: 15 }}>
                <EmailIcon />
              </View>
              <Text style={styles.mailText}>{verifyingEmail}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleGetCodeButton()}
              style={styles.getCodeButton}
            >
              <Text style={styles.getCodeButtonText}>Get Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VerificationModal;

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#00000026",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  emailContainer: {
    backgroundColor: Colors.Background_color,
    marginTop: 20,
  },
  mailText: {
    paddingVertical: 16,
    paddingLeft: 50,
    borderRadius: 10,
    borderColor: Colors.Primary,
    borderWidth: 1,
    color: Colors.Heading,
    lineHeight: 16.42,
  },
  subHeadingText: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Heading,
    alignSelf: "baseline",
  },
  verificationText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 23.45,
    color: Colors.Heading,
    alignSelf: "baseline",
    marginVertical: 20,
  },
  getCodeButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  getCodeButton: {
    backgroundColor: Colors.Primary,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 34,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#0000001A",
    width: 28,
    height: 28,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  closeTextStyle: {
    color: Colors.BodyText,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {},
});
