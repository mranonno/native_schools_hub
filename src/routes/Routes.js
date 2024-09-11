import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="signIn">
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="signUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
