import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import PageTest from "./Screens/PageTest";
import News from "./Screens/News";
import Home from "./Screens/Home";
import Login from "./Screens/Login.js";
import SignUp from "./Screens/SignUp.js";
import Notifications from "./Screens/Notifications.js";
import {
  HomeIcon,
  NewspaperIcon,
  BellAlertIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";
const colors = require("./assets/colors/colors.js");
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

import {
  HomeIcon as HomeIconLine,
  NewspaperIcon as NewspaperIconLine,
  BellAlertIcon as BellAlertIconLine,
  UserCircleIcon as UserCircleIconLine,
} from "react-native-heroicons/outline";
import Profile from "./Screens/Profile.js";
import GameDetails from "./Screens/GameDetails.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="MainPage" component={MyTabs} />
        <Stack.Screen name="GameDetails" component={GameDetails} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.secondColor,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            icon = focused ? (
              <HomeIcon color={color} size={size} />
            ) : (
              <HomeIconLine color={color} size={size} />
            );
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            icon = focused ? (
              <BellAlertIcon color={color} size={size} />
            ) : (
              <BellAlertIconLine color={color} size={size} />
            );
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            icon = focused ? (
              <NewspaperIcon color={color} size={size} />
            ) : (
              <NewspaperIconLine color={color} size={size} />
            );
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            icon = focused ? (
              <UserCircleIcon color={color} size={size} />
            ) : (
              <UserCircleIconLine color={color} size={size} />
            );
            return icon;
          },
        }}
      />
    </Tab.Navigator>
  );
}
const menuIcons = (focused, route, color, size) => {
  let icon;
  if (route.name == "hi") {
    icon = focused ? (
      <HomeSolid color={"#e0ac69"} size={40} />
    ) : (
      <HomeIcon color={"#ffdbac"} size={40} />
    );
  } else if (route.name == "Settings") {
    icon = focused ? (
      <HeartSolid color={"#e0ac69"} size={40} />
    ) : (
      <HeartIcon color={"#ffdbac"} size={40} />
    );
  }

  return (
    <View className={focused ? "rounded-full bg-white p-2" : ""}>{icon}</View>
  );
};
