import { View, Text, Image } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { CameraIcon, HeartIcon } from "react-native-heroicons/outline";

const Profile = () => {
  return (
    <View>
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
    </View>
  );
};

export default Profile;
