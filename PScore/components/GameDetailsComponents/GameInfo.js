import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
const GameInfo = () => {
  return (
    <View className="bg-slate-500 mx-2 rounded-md">
      <Text className="pl-2">GameInfo</Text>
      <View className="flex items-center">
        <View className="bg-slate-200 w-full" style={{}}>
          <Info first={"betWazan Stadium"} second={"Nablus"} Pin={MapPinIcon} />
          <Info first={"26/11/2024"} second={"16:00"} Pin={CalendarDaysIcon} />
        </View>
      </View>
    </View>
  );
};
const Info = ({ first, second, Pin }) => {
  return (
    <View className="flex-row items-center py-3 border-b border-r border-l border-slate-500">
      <Pin color={"black"} />
      <View className="ml-1">
        <Text>{first}</Text>
        <Text>{second}</Text>
      </View>
    </View>
  );
};

export default GameInfo;
