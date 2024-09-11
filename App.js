import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/Routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar
        translucent={true}
        backgroundColor={"white"}
        barStyle={"dark-content"}
      />
    </NavigationContainer>
  );
}
