import { View, Text } from "react-native";
import React from "react";
import { ClockIcon } from "react-native-heroicons/outline";

const MatchDetails = () => {
  return (
    <View className="flex-col-reverse items-center justify-start h-[300px] bg-slate-700">
      <ClockIcon color={"black"} />
      <View className="w-[2px] h-6 bg-black" />
      <View className=" flex-row items-center justify-between w-[300px]">
        <View className="bg-slate-400 w-[30%]">
          <Text>Team1</Text>
        </View>
        <View className="bg-slate-400 w-[30%] flex items-center">
          <Text>43`</Text>
        </View>
        <View className="bg-slate-400 w-[30%] flex items-end">
          <Text>Moahammad</Text>
          <Text>Ahamad</Text>
        </View>
      </View>

      <View className="w-[2px] h-6 bg-black" />
      <Text>MatchDetails3</Text>
      <View className="w-[2px] h-6 bg-black" />
      <Text>fuck Ahmad</Text>
    </View>
  );
};

export default MatchDetails;
