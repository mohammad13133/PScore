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
import Marker from "./Marker";
import DetailsTable from "../DetailsTable";
const GameInfo = () => {
  return (
    <DetailsTable header={"GameInfo"}>
      <Info first={"betWazan Stadium"} second={"Nablus"} Pin={MapPinIcon} />
      <Info first={"26/11/2024"} second={"16:00"} Pin={CalendarDaysIcon} />
    </DetailsTable>
  );
};
const Info = ({ first, second, Pin }) => {
  return (
    <View className="flex-row items-center py-3 ">
      <Pin color={"black"} />
      <View className="ml-1">
        <Text>{first}</Text>
        <Text>{second}</Text>
      </View>
    </View>
  );
};

export default GameInfo;
