import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const TabHomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homeScreen"
        options={{
          headerShown: false,
          headerTitle: "Home Screen",
          tabBarLabel: "Home",
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        name="mainHomeScreen"
        options={{ headerShown: false }}
        component={TabHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default Routes;
