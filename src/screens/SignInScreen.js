import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Text style={styles.titleSchools}>
          SCHOOLS <Text style={styles.titleHub}>HUB</Text>
        </Text>
        <Text style={styles.subTitle}>Network of Schools</Text>
        <Text style={styles.welcome}>Welcome Back!</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoCapitalize="none"
        />
        <Text style={styles.bellowLabel}>Must be at least 8 characters*</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotText}>Forgot password?</Text>
      <Text style={styles.signInWithText}>Or Sign In With</Text>
      <View>
        <TouchableOpacity>{/* <FontAwesome/> */}</TouchableOpacity>
      </View>
      <Text style={styles.accountText}>
        Don't have an account? <Text style={styles.registerText}>Register</Text>
      </Text>
      <Text style={styles.agreeText}>
        By clicking "Sign In", You agree to our{" "}
        <Text style={styles.termsText}>Terms of Use and Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  accountText: {},
  agreeText: {},
  registerText: {},
  termsText: {},
  signInWithText: {
    color: "gray",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  forgotText: {
    alignSelf: "center",
    color: "green",
    fontSize: 16,
    fontWeight: "600",
  },
  bellowLabel: {
    marginTop: -10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 14,
    borderRadius: 12,
    marginTop: 40,
  },
  formContainer: {
    marginTop: 40,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: -5,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  titleHub: {
    color: "green",
  },
  titleSchools: {
    fontSize: 24,
    fontWeight: "900",
  },
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
});
