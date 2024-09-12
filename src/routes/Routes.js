import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
import { Colors } from "../theme/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();
const TabHomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "homeScreen") {
            iconName = focused ? "home" : "home";
          }
          return (
            <View
              style={{
                backgroundColor: Colors.Primary,
                padding: 8,
                borderRadius: 12,
              }}
            >
              <AntDesign name={iconName} size={24} color="white" />
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

const Stack = createStackNavigator();
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
