import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { View } from "react-native";
import { Colors } from "../theme/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OtpScreen from "../screens/OtpScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabHomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <View
              style={{
                backgroundColor: Colors.Primary,
                padding: 8,
                borderRadius: 12,
              }}
            >
              <HomeIcon />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "white",
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: "tomato",
      //   inactiveTintColor: "gray",
      // }}
    >
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

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={SignInScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkUserToken = async () => {
      const value = await AsyncStorage.getItem("user_token");
      setIsLoggedIn(!!value);
    };

    checkUserToken();
  }, []);

  if (isLoggedIn === null) {
    // Show a loading screen or spinner while checking the token
    return null;
  }
  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "signIn" : "signUp"}>
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
        name="otpScreen"
        options={{ headerShown: false }}
        component={OtpScreen}
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
