import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import Welcome from "./Screens/Welcome";
import PageTest from "./Screens/PageTest";
import News from "./Screens/News";
import Home from "./Screens/Home";
import Login from "./Screens/Login.js";
import SignUp from "./Screens/SignUp.js";
import Notifications from "./Screens/drawerSrceens/Notifications.js";
import {
  HomeIcon,
  NewspaperIcon,
  BellAlertIcon,
  UserCircleIcon,
  GlobeAsiaAustraliaIcon,
  ArchiveBoxArrowDownIcon,
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
  GlobeAsiaAustraliaIcon as GlobeAsiaAustraliaIconLine,
  ArchiveBoxArrowDownIcon as ArchiveBoxArrowDownIconLine,
  Cog6ToothIcon,
  MapIcon,
  ArrowLeftStartOnRectangleIcon,
} from "react-native-heroicons/outline";
import Profile from "./Screens/Profile.js";
import GameDetails from "./Screens/GameDetails.js";
import Explore from "./Screens/Explore.js";
import MyGames from "./Screens/drawerSrceens/MyGames.js";
import Settings from "./Screens/drawerSrceens/Settings.js";
import Stadium from "./Screens/Stadium.js";
import Team from "./Screens/Team.js";
import Search from "./Screens/Search.js";
import MapScreen from "./Screens/drawerSrceens/MapScreen.js";
import Player from "./Screens/Player.js";
import AuthContext, { AuthProvider, useAuth } from "./contexts/AuthContext.js";
import { ChatsProvider, useChats } from "./contexts/ChatsContext.js";
import PlayerDetails from "./Screens/PlayerDetails.js";
import LogOut from "./Screens/drawerSrceens/LogOut.js";
import MassegesScreen from "./Screens/MessagesScreen.js";
import Chat from "./Screens/Chat.js";
import MessagesScreen from "./Screens/MessagesScreen.js";
import { useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const mySocket = io.connect("http://localhost:4000");
export default function App() {
  return (
    <AuthProvider>
      <ChatsProvider>
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
            <Stack.Screen name="MainPage" component={MyTabsDrower} />
            <Stack.Screen name="GameDetails" component={GameDetails} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Stadium" component={Stadium} />
            <Stack.Screen name="Team" component={Team} />
            <Stack.Screen name="Player" component={Player} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
            <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
      </ChatsProvider>
    </AuthProvider>
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
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            icon = focused ? (
              <GlobeAsiaAustraliaIcon color={color} size={size} />
            ) : (
              <GlobeAsiaAustraliaIconLine color={color} size={size} />
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
function MyTabsDrower() {
  const { profile, setProfile, token } = useAuth();
  const { socket, setSocket, setAllChatRooms, set } = useChats();
  useEffect(() => {
    setSocket(mySocket);
    mySocket.emit("getAllGroups");
  }, []);
  useEffect(() => {
    // mySocket.emit("getAllGroups");
    mySocket.on("group_list", (groups) => {
      console.log(groups);
      setAllChatRooms(groups);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      console.log("hello token");
      try {
        const response = await axios.get(
          "https://pscore-backend.vercel.app/profile",
          {
            headers: {
              authorization: `Ahmad__${token}`,
            },
          }
        );
        console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);
  useEffect(() => {
    if (profile) {
      console.log(profile);
    }
  }, [profile]);

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props) => {
        return (
          <View>
            <View className="h-[300px] flex items-center justify-center">
              <View className="bg-zinc-800 w-[150px] h-[150px] rounded-full mb-2">
                <Image
                  source={require("./assets/images/players/Mohammad.jpg")}
                  className="w-[150px] h-[150px] rounded-full"
                />
              </View>
              <Text className="text-lg font-semibold">
                {profile ? profile?.userName : "no login"}
              </Text>
            </View>
            <DrawerItemList {...props} />
          </View>
        );
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondColor, // Change header background color
          elevation: 0,
        },
        headerTintColor: "black", // Change text color of header titles
        drawerActiveTintColor: colors.secondColor,
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: "Home",
          title: "PScore",
          drawerIcon: () => <HomeIconLine color={colors.secondColor} />,
        }}
        component={MyTabs}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerIcon: () => <BellAlertIconLine color={colors.secondColor} />,
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="MyGames"
        options={{
          drawerIcon: () => (
            <ArchiveBoxArrowDownIconLine color={colors.secondColor} />
          ),
        }}
        component={MyGames}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerIcon: () => <Cog6ToothIcon color={colors.secondColor} />,
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="MapScreen"
        options={{
          drawerIcon: () => <MapIcon color={colors.secondColor} />,
        }}
        component={MapScreen}
      />
      <Drawer.Screen
        name="LogOut"
        options={{
          drawerIcon: () => (
            <ArrowLeftStartOnRectangleIcon color={colors.secondColor} />
          ),
        }}
        component={LogOut}
      />
    </Drawer.Navigator>
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
