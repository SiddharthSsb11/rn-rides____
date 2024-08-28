import { NavigationContainer } from "@react-navigation/native";
import MyApp from "./src/MyApp";

export default function App() {
  console.log("hello");
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
}
