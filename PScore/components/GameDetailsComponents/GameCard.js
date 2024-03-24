import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import colors from "../../assets/colors/colors";
import { ChevronLeftIcon, BellAlertIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
const GameCard = () => {
  navigation = useNavigation();
  const [activeBell, setActiveBell] = useState(false);
  return (
    <View
      style={{ width: wp(100), height: hp(30) }}
      className="relative bg-slate-500"
    >
      <Image
        style={{
          resizeMode: "stretch",
        }}
        source={require("../../assets/images/348s.jpg")}
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
      <View className="absolute w-full h-full flex items-center justify-center space-x-4 overflow-visible">
        <View
          className="flex-row items-center justify-center bg-neutral-100 px-8 py-6 rounded-lg mt-[70px]"
          style={{ elevation: 9 }}
        >
          <Image
            source={require("../../assets/images/arsenal.png")}
            className="bg-slate-400 rounded-full"
            style={{ width: wp(15), height: wp(15) }}
          />
          <View className="flex items-center justify-center">
            <Text className="text-l font-bold p-2" style={{ color: "black" }}>
              ended
            </Text>
            <Text className="text-l font-bold p-2" style={{ color: "black" }}>
              2 - 6
            </Text>
          </View>

          <Image
            source={require("../../assets/images/manuntd.png")}
            className="bg-slate-400 rounded-full"
            style={{ width: wp(15), height: wp(15) }}
          />
        </View>
      </View>
    </View>
  );
};

export default GameCard;
