import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/Routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Routes />
    </NavigationContainer>
  );
}
