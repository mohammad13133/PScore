import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors/colors";
import { CameraIcon, HeartIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";

const Profile = () => {
  const [page, setPage] = useState("stats");
  const renderComponent = () => {
    switch (page) {
      case "Posts":
        return <Text>posts</Text>;
      case "games":
        return <Text>games</Text>;
      case "stats":
        return <Stats />;
      default:
        return null;
    }
  };
  return (
    <ScrollView>
      <View className="h-[300px] flex items-center justify-center relative space-y-1">
        <View
          className="relative rounded-full border "
          style={{ backgroundColor: colors.mainColor }}
        >
          <Image
            className="rounded-full "
            style={{
              width: 120,
              height: 120,
              resizeMode: "cover",
            }}
            source={require("../assets/images/players/Mohammad.jpg")}
          />
          <View className="absolute top-0 right-0 bg-white rounded-full p-1">
            <CameraIcon size={30} color={"black"} />
          </View>
        </View>
        <Text>Mohammad Khaled</Text>
        <Text>Nablus</Text>

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
      <View className="w-full flex items-center justify-center mt-2">
        <View
          style={{ backgroundColor: colors.secondColor }}
          className=" flex-row  rounded-lg"
        >
          <Slide name={"Posts"} page={page} setPage={setPage} />
          <Slide name={"games"} page={page} setPage={setPage} />
          <Slide name={"stats"} page={page} setPage={setPage} />
        </View>
      </View>
      {renderComponent()}
    </ScrollView>
  );
};
const Slide = ({ name, page, setPage }) => {
  const activeStyle =
    page == name ? "bg-slate-100 border border-emerald-950" : "";
  return (
    <Pressable
      onPress={() => {
        setPage(name);
      }}
      className={"flex items-center w-[100px] py-2 rounded-lg " + activeStyle}
    >
      <Text>{name}</Text>
    </Pressable>
  );
};
const Stats = () => {
  return (
    <View
      style={{ backgroundColor: colors.secondColor }}
      className="h-[200px] flex justify-center space-y-6 mt-14 mx-5 rounded-md"
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
export default Profile;
