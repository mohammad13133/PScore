import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { StatusBar } from "expo-status-bar";
import colors from "../assets/colors/colors";
import { ChevronLeftIcon, BellAlertIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
const GameDetails = ({ navigation }) => {
  const [activeBell, setActiveBell] = useState(false);
  return (
    <View>
      <StatusBar style="light" />
      {/*Header */}
      <View style={{ width: wp(100), height: hp(30) }} className="relative">
        <Image
          style={{ resizeMode: "stretch" }}
          source={require("../assets/images/348s.jpg")}
          className="w-full h-full"
        />
        <View className="absolute flex-row items-center  w-full justify-between mt-10 z-10">
          <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
            <ChevronLeftIcon color={colors.lightGreen} size={hp(5)} />
          </TouchableOpacity>

          <Text className=" text-white">nablus,betWazaan</Text>
          <TouchableOpacity onPress={() => setActiveBell(!activeBell)}>
            {activeBell ? (
              <BellIcon color={"white"} size={hp(5)} />
            ) : (
              <BellAlertIcon color={"white"} size={hp(5)} />
            )}
          </TouchableOpacity>
        </View>
        <View className="absolute w-full h-full flex-row items-center justify-center mt-8">
          <View
            className="bg-slate-400 rounded-full"
            style={{ width: wp(20), height: wp(20) }}
          />
          <View className="flex items-center justify-center">
            <Text className="text-l font-bold p-2" style={{ color: "white" }}>
              ended
            </Text>
            <Text className="text-l font-bold p-2" style={{ color: "white" }}>
              2 - 6
            </Text>
          </View>

          <View
            className="bg-slate-400 rounded-full"
            style={{ width: wp(20), height: wp(20) }}
          />
        </View>
      </View>

      <Text>GameDetails</Text>
    </View>
  );
};

export default GameDetails;
