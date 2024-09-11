import {
  Image,
  ScrollView,
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
      <ScrollView
        contentContainerStyle={[
          styles.mainContainer,
          { paddingTop: top, flexGrow: 1 },
        ]}
      >
        <View style={styles.titleContainer}>
          <Image source={logo} />
          <Text style={styles.welcome}>Create an account</Text>
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
              size={24}
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
              size={24}
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
              size={24}
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
              size={24}
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
              secureTextEntry
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="lock"
              size={24}
              color={"#546A7E"}
            />
            <Feather
              style={styles.eyeIcon}
              name="eye-off"
              size={24}
              color={"#546A7E"}
            />
          </View>
          <Text style={styles.bellowLabel}>Must be at least 8 characters*</Text>
          <Text style={[styles.label, { marginTop: 20 }]}>
            Confirm Password *
          </Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
              autoCapitalize="none"
            />
            <Feather
              style={styles.leftIconInput}
              name="lock"
              size={24}
              color={"#546A7E"}
            />
            <Feather
              style={styles.eyeIcon}
              name="eye-off"
              size={24}
              color={"#546A7E"}
            />
          </View>
          <Text style={styles.bellowLabel}>
            Must be the same as above password*
          </Text>
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
    marginTop: -10,
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
    borderColor: "#ccc",
    paddingVertical: 12,
    paddingLeft: 46,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
    color: "#0B2A46",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: -5,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 70,
  },
  mainContainer: {
    backgroundColor: "#f1f1f1",
    paddingBottom: 40,
  },
});
