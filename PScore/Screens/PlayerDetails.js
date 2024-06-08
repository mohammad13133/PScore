import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import colors from "../assets/colors/colors";
import SlidesPicker from "../components/MyComp/SlidesPicker";
import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PlusIcon,
} from "react-native-heroicons/outline";

const PlayerDetails = ({ navigation, route }) => {
  const name = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          <TouchableOpacity
            className="pr-2"
            onPress={() =>
              navigation.navigate("Chat", { roomid: name, playerid: 400 })
            }
          >
            <ChatBubbleBottomCenterIcon size={24} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <PlusIcon size={24} color={"black"} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <View
        style={{
          height: 300,
          backgroundColor: colors.secondColor,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}
        className="flex items-center justify-center relative "
      >
        <View className="absolute top-10">
          <Text>Mohammad Khaled</Text>
        </View>

        <View
          className="rounded-full border border-red-600 flex items-center justify-center"
          style={{ width: 151, height: 151 }}
        >
          <Image
            className="rounded-full"
            source={require("../assets/images/players/haaland.png")}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
        </View>
        <View className="absolute bottom-10 w-full flex-row justify-between px-20">
          <Text>Manchester</Text>
          <Text>Al-Etihad</Text>
        </View>
      </View>
      <SlidesPicker>
        <View dispalyName={"games"}>
          <Text>hello</Text>
          <Text>hello</Text>
        </View>
        <View dispalyName={"stats"}>
          <UpperStats />
          <Stats />
        </View>
      </SlidesPicker>
    </View>
  );
};
const UpperStats = () => {
  return (
    <View className="w-full items-center mt-4">
      <View
        className="flex-row justify-between rounded-md p-1"
        style={{
          width: 300,
          backgroundColor: colors.secondColor,
        }}
      >
        <View className="flex items-center w-[100px]">
          <HeartIcon size={25} color={colors.mainColor} />
          <Text>2.3k</Text>
        </View>
        <View className="flex items-center w-[100px]">
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "cover",
            }}
            source={{ uri: "https://flagsapi.com/PS/flat/64.png" }}
          />
          <Text>Palestine</Text>
        </View>
        <View className="flex items-center w-[100px]">
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "cover",
            }}
            source={{ uri: "https://flagsapi.com/PS/flat/64.png" }}
          />
          <Text>No Team</Text>
        </View>
      </View>
    </View>
  );
};
const Stats = () => {
  return (
    <View
      style={{ backgroundColor: colors.secondColor }}
      className="h-[200px] flex justify-center space-y-6 mt-4 mx-5 rounded-md"
    >
      <View className="flex-row justify-around">
        <View className="flex items-center w-[100px] space-y-4 ">
          <Text>Age</Text>
          <Text>19</Text>
        </View>
        <View className="flex items-center w-[100px] space-y-4 ">
          <Text>Position</Text>
          <Text>Striker</Text>
        </View>
        <View className="flex items-center w-[100px] space-y-4 ">
          <Text>Matches</Text>
          <Text>4</Text>
        </View>
      </View>
      <View className="flex-row justify-around">
        <View className="flex items-center w-[100px] space-y-4 ">
          <Image
            className="rounded-full"
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/footballcartoon.jpg")}
          />
          <Text>20(3)</Text>
        </View>
        <View className="flex items-center w-[100px] space-y-4 ">
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/assists.png")}
          />
          <Text>12</Text>
        </View>
      </View>
    </View>
  );
};
export default PlayerDetails;
