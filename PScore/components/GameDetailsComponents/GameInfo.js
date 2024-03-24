import { View, Text, Pressable } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
const GameInfo = () => {
  const navigation = useNavigation();
  return (
    <DetailsTable header={"GameInfo"}>
      <Pressable onPress={() => navigation.navigate("MainPage")}>
        <Info first={"betWazan Stadium"} second={"Nablus"} Pin={MapPinIcon} />
      </Pressable>

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
