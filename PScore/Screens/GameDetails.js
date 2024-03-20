import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { StatusBar } from "expo-status-bar";
import colors from "../assets/colors/colors";
import { ChevronLeftIcon, BellAlertIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import LineUP from "../components/GameDetailsComponents/LineUP";
import GameInfo from "../components/GameDetailsComponents/GameInfo";
import OtherPlayers from "../components/GameDetailsComponents/OtherPlayers";
import Marker from "../components/GameDetailsComponents/Marker";
const GameDetails = ({ navigation }) => {
  const [activeBell, setActiveBell] = useState(false);
  const [activeTeam1, setActiveTeam1] = useState(false);
  const [activeTeam2, setActiveTeam2] = useState(true);
  activeTeamStyle1 =
    activeTeam1 == true ? "bg-slate-100 border border-emerald-950" : "";

  activeTeamStyle2 =
    activeTeam2 == true ? "bg-slate-100 border border-emerald-950" : "";
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      {/*Header */}
      <View style={{ width: wp(100), height: hp(30) }} className="relative">
        <Image
          style={{ resizeMode: "stretch" }}
          source={require("../assets/images/soccerBGRot.jpg")}
          className="w-full h-full"
        />
        <View className="absolute flex-row items-center  w-full justify-between mt-10 z-10">
          <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
            <ChevronLeftIcon color={colors.lightGreen} size={hp(5)} />
          </TouchableOpacity>

          <Text className=" text-white">nablus,betWazaan</Text>
          <TouchableOpacity onPress={() => setActiveBell(!activeBell)}>
            {activeBell ? (
              <BellIcon color={"white"} size={hp(4)} />
            ) : (
              <BellAlertIcon color={"white"} size={hp(4)} />
            )}
          </TouchableOpacity>
        </View>
        <View className="absolute w-full h-full flex-row items-center justify-center space-x-4">
          <Image
            source={require("../assets/images/arsenal.png")}
            className="bg-slate-400 rounded-full"
            style={{ width: wp(15), height: wp(15) }}
          />
          <View className="flex items-center justify-center">
            <Text className="text-l font-bold p-2" style={{ color: "white" }}>
              ended
            </Text>
            <Text className="text-l font-bold p-2" style={{ color: "white" }}>
              2 - 6
            </Text>
          </View>

          <Image
            source={require("../assets/images/manuntd.png")}
            className="bg-slate-400 rounded-full"
            style={{ width: wp(15), height: wp(15) }}
          />
        </View>
      </View>
      <ScrollView>
        <Marker>GameDetails</Marker>
        <View className="w-full flex items-center justify-center ">
          <View className="bg-slate-400 flex-row  rounded-lg">
            <Pressable
              onPress={() => {
                setActiveTeam1(true);
                setActiveTeam2(false);
              }}
              className={"px-6 py-2 rounded-lg " + activeTeamStyle1}
            >
              <Text>Team 1</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setActiveTeam2(true);
                setActiveTeam1(false);
              }}
              className={"px-6 py-2 rounded-lg " + activeTeamStyle2}
            >
              <Text>Team 2</Text>
            </Pressable>
          </View>
        </View>
        {/*map*/}
        <LineUP />
        <Marker>GameInfo</Marker>
        <GameInfo />
        <Marker>OtherPlayers</Marker>
        <OtherPlayers />
      </ScrollView>
    </View>
  );
};

export default GameDetails;
