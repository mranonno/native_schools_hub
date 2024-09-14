import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo 1.png";
import { Colors } from "../theme/Colors";
import axiosInstance from "../utils/axiosInstance";

const OtpScreen = ({ route }) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { otpData, checkedChannel } = route.params;

  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if text is entered
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }

    // Move to the previews input if text is removed
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleLogin = () => {
    console.log("otpData", JSON.stringify(otpData._id, null, 1));
    console.log("checked", checkedChannel);
    const otpString = otp.join("");
    console.log("otpCode", typeof otpString);
    console.log("otpCode", otpString);

    axiosInstance
      .post("/user/verifyotp", {
        userId: otpData._id,
        otp: otpString,
        channel: checkedChannel,
      })
      .then((response) => {
        console.log("response", JSON.stringify(response, null, 1));
        navigation.navigate("signIn");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={[styles.mainContainer, { paddingTop: top }]}>
      <View style={styles.titleContainer}>
        <Image style={{ width: "70%", resizeMode: "contain" }} source={logo} />
        <Text style={styles.verification}>Verification</Text>
      </View>
      <Text
        style={{ textAlign: "center", color: Colors.BodyText, marginTop: 20 }}
      >
        Enter the 6-digit code that we sent to{"\n"}the email address
      </Text>
      <Text style={{ textAlign: "center", color: Colors.BodyText }}>
        p********0@gmail.com
      </Text>
      <View style={styles.formContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={(text) => handleChangeText(text, index)}
            value={value}
            keyboardType="number-pad"
            maxLength={1}
            autoCapitalize="none"
            ref={(input) => (inputs.current[index] = input)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.validTimeText}>
        OTP(One time password) valid for 5 minutes
      </Text>
      <View style={styles.timeExpireContainer}>
        <Text style={styles.timeExpireCode}>
          Didn’t receive your code, or did the code
        </Text>
        <View style={styles.getCodeContainer}>
          <Text style={styles.timeExpireCode}>time expire?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
            <Text style={styles.getNewCodeText}>Get a new one</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  validTimeText: {
    marginTop: 20,
    fontSize: 12,
    color: Colors.BodyText,
    textAlign: "center",
  },

  timeExpireContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  getCodeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  timeExpireCode: {
    color: Colors.Heading,
  },
  getNewCodeText: {
    fontWeight: "500",
    marginLeft: 5,
    color: Colors.Primary,
    textDecorationLine: "underline",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#27AC1F",
    padding: 14,
    borderRadius: 10,
    marginTop: 34,
    marginHorizontal: 20,
  },
  formContainer: {
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: "#0B2A46B2",
    padding: 10,
    marginBottom: 20,
    fontSize: 30,
    color: "#0B2A46",
  },
  verification: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
    color: "#0B2A46",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  mainContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
});
