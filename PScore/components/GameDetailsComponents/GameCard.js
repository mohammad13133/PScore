import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import colors from "../../assets/colors/colors";
import { ChevronLeftIcon, BellAlertIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
{
  /*const GameCard = () => {
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
};*/
}
const GameCard = () => {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: colors.secondColor,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
      }}
      className="flex items-center justify-center relative "
    >
      <View
        className="px-1 rounded-md"
        style={{
          position: "absolute",
          top: 50,
          backgroundColor: colors.mainColor,
        }}
      >
        <Text style={{ color: colors.lightGreen }}>Uefa champions</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-3">
        <Image
          source={require("../../assets/images/arsenal.png")}
          className="bg-slate-400 rounded-full "
          style={{ width: 100, height: 100 }}
        />
        <View
          className="flex items-center justify-center"
          style={{ width: 100, height: 100 }}
        >
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
          style={{ width: 100, height: 100 }}
        />
        <View
          style={{
            position: "absolute",
            top: 130,
            width: "100%",
          }}
        >
          <View className="flex-row justify-around">
            <View className="flex-row space-x-1">
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
            </View>
            <View className="flex-row space-x-1">
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: colors.mainColor }}
              >
                <Text style={{ color: "white", position: "absolute" }}>W</Text>
              </View>
              <View
                className="rounded-full p-4 relative flex items-center justify-center"
                style={{ backgroundColor: "white" }}
              >
                <Text style={{ color: "black", position: "absolute" }}>L</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameCard;
