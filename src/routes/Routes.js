import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
import { Colors } from "../theme/Colors";

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
