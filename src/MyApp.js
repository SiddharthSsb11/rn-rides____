import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "../constants/Colors";
import Onboarding from "./screens/Onboarding";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Rides from "./screens/Rides";
import Profile from "./screens/Profile";
import Chats from "./screens/Chats";
import FindRide from "./screens/FindRide";
import BookRide from "./screens/BookRide";
import ConfirmRide from "./screens/ConfirmRide";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import TabBarIcon from "./components/UI/TabBarIcon";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const styles = {
  shadow: {
    shadowColor: Colors.primary[300],
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
};

const BottomTabsOverview = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          elevation: 0,
          backgroundColor: Colors.secondary[900],
          borderRadius: 50,
          height: 78,
          ...styles.shadow,
        },
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <Entypo name="home" size={28} color="white" />
            </TabBarIcon>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Rides"
        component={Rides}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <FontAwesome6 name="list-alt" size={24} color="white" />
            </TabBarIcon>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <Ionicons name="chatbubble-ellipses" size={28} color="white" />
            </TabBarIcon>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <FontAwesome6 name="circle-user" size={28} color="white" />
            </TabBarIcon>
          ),
        }}
      />
      <BottomTabs.Screen
        name="FindRide"
        component={FindRide}
        options={{
          tabBarButton: () => null,
          title: "",
          tabBarStyle: { display: "none" }, // Hide tab bar
        }}
      />
      <BottomTabs.Screen
        name="BookRide"
        component={BookRide}
        options={{
          tabBarButton: () => null,
          title: "",
          // headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <BottomTabs.Screen
        name="ConfirmRide"
        component={ConfirmRide}
        options={{
          tabBarButton: () => null,
          title: "",
          tabBarStyle: { display: "none" },
        }}
      />
    </BottomTabs.Navigator>
  );
};

const MyApp = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary[500]} />
      </View>
    );
  }

  // if (isAuth === null) {
  //   return <LoadingScreen />; // Show a loading indicator while checking auth status
  // }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen
          name="BottomTabsOverview"
          component={BottomTabsOverview}
        />
      </Stack.Navigator>
    </>
  );
};

export default MyApp;
