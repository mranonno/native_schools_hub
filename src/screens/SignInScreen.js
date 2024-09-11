import {
  Image,
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

const SignInScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Error", "Please fill in both fields");
      return;
    }
    console.log("Logging in with", email, password);
  };
  return (
    <View style={[styles.mainContainer, { paddingTop: top }]}>
      <View style={styles.titleContainer}>
        <Image source={logo} />
        <Text style={styles.welcome}>Welcome Back!</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email *</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
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

        <Text style={styles.label}>Password *</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={showPassword}
            autoCapitalize="none"
          />
          <Feather
            style={styles.leftIconInput}
            name="lock"
            size={24}
            color={"#546A7E"}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color={"#546A7E"}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.bellowLabel}>Must be at least 8 characters*</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
      <Text style={styles.signInWithText}>Or Sign In With</Text>
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
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.privacyContainer}>
        <Text style={styles.agreeText}>
          By clicking "Sign In", You agree to our
        </Text>
        <TouchableOpacity>
          <Text style={styles.termsText}> Terms</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.termsText}>of Use and Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

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
  registerText: {
    fontWeight: "500",
    marginLeft: 5,
    color: "#0B2A46",
    textDecorationLine: "underline",
  },
  privacyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  agreeText: {
    color: "#546A7E",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },

  termsText: {
    color: "#27AC1F",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    fontSize: 12,
  },
  signInWithText: {
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
    flex: 1,
  },
});
