import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
const colors = require("../assets/colors/colors.js");
const Welcome = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center relative">
      <Image
        className="w-full h-full"
        style={{ resizeMode: "stretch" }}
        source={require("../assets/images/soccerBG.jpg")}
      />
      <LinearGradient
        className="w-full h-full absolute"
        style={{ resizeMode: "stretch" }}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={["transparent", "rgba(0,0,0,0.8)"]}
      />
      <View className="absolute flex items-center justify-center h-full w-full">
        <View className="mb-10 flex items-center">
          <Text
            className="text-white text-6xl"
            style={{ color: colors.secondColor }}
          >
            <Text style={{ color: colors.mainColor }}>PS</Text>core
          </Text>
          <View>
            <Image
              className="rounded-full"
              style={{ width: 200, height: 200 }}
              source={require("../assets/images/football.jpg")}
            />
          </View>
        </View>
      </View>
      <View className="absolute flex items-center justify-end h-full w-full ">
        <TouchableOpacity
          onPress={() => navigation.navigate("PageTest", { name: "Jane" })}
          className="px-20 py-5 rounded-xl mb-40"
          style={{ backgroundColor: colors.mainColor }}
        >
          <Text className="text-xl" style={{ color: colors.secondColor }}>
            Start Your Journey
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
