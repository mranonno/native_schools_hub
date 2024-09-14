import { StatusBar } from "react-native";
import Routes from "./src/routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
import MyProvider from "./src/context/MainContext";

export default function App() {
  return (
    <MyProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <Routes />
      </NavigationContainer>
    </MyProvider>
  );
}
