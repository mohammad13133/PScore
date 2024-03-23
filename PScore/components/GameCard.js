import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
const GameCard = () => {
  return (
    <View
      className="flex bg-white p-4 rounded-md mt-1 mb-4"
      style={{
        width: wp(90),
        shadowColor: "#000",
        elevation: 2, //android
      }}
    >
      <View className="mb-2 ">
        <Text className="font-bold" style={{ color: colors.mainColor }}>
          Ebn Al Haitham
        </Text>
        <Text>3 Math</Text>
      </View>
      <SingleGame />
      <SingleGame />
      <SingleGame2 />
    </View>
  );
};

const SingleGame = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="flex-row justify-center items-center  bg-slate-200 mb-5 rounded-lg"
      style={{
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6, //android
      }}
      onPress={() => navigation.navigate("GameDetails")}
    >
      <View
        className="flex items-end justify-center m-1"
        style={{ width: 100 }}
      >
        <Text>Arsenal</Text>
      </View>

      <Image
        source={require("../assets/images/arsenal.png")}
        className="bg-slate-500 rounded-full"
        style={{ width: 35, height: 35 }}
      />
      <View
        className="flex items-center  justify-center "
        style={{ width: 100, height: 90 }}
      >
        <Text>not started</Text>
        <Text style={{ color: colors.secondColor }}>AM 10:00</Text>
      </View>
      <Image
        source={require("../assets/images/manuntd.png")}
        className=" rounded-full"
        style={{ width: 35, height: 35 }}
      />
      <View
        className="flex items-start justify-center m-1"
        style={{ width: 100 }}
      >
        <Text className="text-left">Man Untd</Text>
      </View>
    </Pressable>
  );
};

const SingleGame2 = () => {
  return (
    <View
      className="flex-row justify-center items-center  bg-slate-200 mb-2"
      style={{ height: 100 }}
    >
      <View
        className="flex items-end justify-center m-1"
        style={{ width: 100 }}
      >
        <Text>Man City</Text>
      </View>

      <View
        className="bg-slate-500 rounded-full"
        style={{ width: 35, height: 35 }}
      />
      <View
        className="flex items-center  justify-center "
        style={{ width: 100, height: 90 }}
      >
        <Text>ended</Text>
        <Text style={{ color: colors.secondColor }}>1 - 4</Text>
        <Text style={{ color: colors.secondColor }}>AM 10:00</Text>
      </View>
      <View
        className="bg-slate-500 rounded-full"
        style={{ width: 35, height: 35 }}
      />
      <View
        className="flex items-start justify-center m-1"
        style={{ width: 100 }}
      >
        <Text>Everton</Text>
      </View>
    </View>
  );
};

export default GameCard;
