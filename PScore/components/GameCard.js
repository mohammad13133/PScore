import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOutLeft,
} from "react-native-reanimated";
const GameCard = () => {
  return (
    <View
      className="flex  p-4 rounded-md mt-1 mb-4"
      style={{
        width: wp(90),
      }}
    >
      <View className="mb-2 flex-row justify-between items-center">
        <Text className="text-lg" style={{ color: colors.myWhite }}>
          Ebn Al Haitham
        </Text>
        <Text style={{ color: colors.myWhite, opacity: 0.6 }}>3 Match</Text>
      </View>
      <Animated.View entering={(entering = FadeInLeft.duration(200))}>
        <SingleGame />
      </Animated.View>
      <Animated.View entering={(entering = FadeInLeft.duration(400))}>
        <SingleGame />
      </Animated.View>
      <Animated.View entering={(entering = FadeInLeft.duration(600))}>
        <SingleGame />
      </Animated.View>
      <Animated.View entering={(entering = FadeInLeft.duration(800))}>
        <SingleGame />
      </Animated.View>
    </View>
  );
};

const SingleGame = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="flex-row justify-center items-center   mb-5 rounded-xl"
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
        backgroundColor: colors.myWhite,
      }}
      onPress={() => navigation.navigate("GameDetails")}
    >
      <View
        className="flex items-end justify-center m-1"
        style={{ width: 100 }}
      >
        <Text style={{ color: colors.mainColor }}>Arsenal</Text>
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
        <Text className="font-semibold" style={{ color: colors.secondColor }}>
          not started
        </Text>
        <Text style={{ color: colors.secondColor, opacity: 0.7 }}>
          AM 10:00
        </Text>
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
        <Text className="text-left" style={{ color: colors.mainColor }}>
          Man Untd
        </Text>
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
