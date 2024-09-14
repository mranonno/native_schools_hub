import { StatusBar } from "react-native";
import Routes from "./src/routes/Routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <Routes />
    </NavigationContainer>
  );
}
