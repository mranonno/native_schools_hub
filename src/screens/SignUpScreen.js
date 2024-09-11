import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import logo from "../../assets/logo 1.png";
import Feather from "react-native-vector-icons/Feather";

const SignUpScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setConfirmShowPassword] = useState(true);

  const handleSignUp = () => {
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      confirmPassword === "" ||
      number === ""
    ) {
      alert("Error", "Please fill in both fields");
      return;
    }
    console.log(
      "Logging in with",
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
      number
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        backgroundColor={"white"}
        barStyle={"dark-content"}
      />
      <ScrollView
        contentContainerStyle={[
          styles.mainContainer,
          { paddingTop: top, flexGrow: 1 },
        ]}
      >
        <View style={styles.titleContainer}>
          <Image
            style={{ width: "70%", resizeMode: "contain" }}
            source={logo}
          />
          <Text style={styles.createAccount}>Create an account</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>First Name *</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="First name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="user"
              size={20}
              color={"#546A7E"}
            />
          </View>
          <Text style={styles.label}>Last Name *</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Last name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="user"
              size={20}
              color={"#546A7E"}
            />
          </View>
          <Text style={styles.label}>Email *</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="mail"
              size={20}
              color={"#546A7E"}
            />
          </View>
          <Text style={styles.label}>Phone Number *</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="+880"
              value={number}
              onChangeText={(text) => setNumber(text)}
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="phone"
              size={20}
              color={"#546A7E"}
            />
          </View>

          <Text style={styles.label}>Password *</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={showPassword}
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="lock"
              size={20}
              color={"#546A7E"}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={"#546A7E"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordVerifyText}>
            <Text style={styles.bellowLabel}>
              Must be at least 8 characters
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="target" size={16} color="#546A7E" />
            </TouchableOpacity>
          </View>
          <Text style={[styles.label, { marginTop: 20 }]}>
            Confirm Password *
          </Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={showConfirmPassword}
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="lock"
              size={20}
              color={"#546A7E"}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setConfirmShowPassword(!showConfirmPassword)}
            >
              <Feather
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={20}
                color={"#546A7E"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordVerifyText}>
            <Text style={styles.bellowLabel}>
              Must be the same as above password
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="target" size={16} color="#546A7E" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Create an account</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.registerWithText}>Or Register With</Text>
        <View style={styles.signIconContainer}>
          <TouchableOpacity style={styles.signIcon}>
            <FontAwesome name="facebook" size={24} color={"#27AC1F"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIcon}>
            <FontAwesome name="google" size={24} color={"#27AC1F"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIcon}>
            <FontAwesome name="apple" size={24} color={"#27AC1F"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIcon}>
            <FontAwesome name="github" size={24} color={"#27AC1F"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIcon}>
            <FontAwesome name="linkedin" size={24} color={"#27AC1F"} />
          </TouchableOpacity>
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signIn")}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  passwordVerifyText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -10,
    gap: 5,
  },
  leftIconInput: {
    position: "absolute",
    top: 15,
    left: 14,
  },
  eyeIcon: {
    position: "absolute",
    top: 15,
    right: 14,
  },
  signIcon: {
    backgroundColor: "white",
    width: 44,
    height: 44,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  signIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
    marginTop: 20,
  },
  accountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  accountText: {
    color: "#546A7E",
  },
  signInText: {
    fontWeight: "500",
    marginLeft: 5,
    color: "#0B2A46",
    textDecorationLine: "underline",
  },
  registerWithText: {
    color: "gray",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  forgotText: {
    textAlign: "center",
    color: "#27AC1F",
    fontWeight: "500",
  },
  bellowLabel: {
    fontSize: 12,
    lineHeight: 14,
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
  },
  formContainer: {
    marginTop: 20,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#0B2A46",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    paddingVertical: 12,
    paddingLeft: 46,
    borderRadius: 10,
    marginBottom: 20,
  },
  createAccount: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
    color: "#0B2A46",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: -5,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  mainContainer: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 40,
  },
});
