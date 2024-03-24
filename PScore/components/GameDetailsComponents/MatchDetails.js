import { View, Text, Image } from "react-native";
import React from "react";
import { ClockIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DetailsTable from "../DetailsTable";
const MatchDetails = () => {
  return (
    <DetailsTable classes="mt-10" header="match events">
      <View className="flex-col-reverse items-center justify-start pt-4">
        <ClockIcon color={"black"} />
        <VerticalLine />
        <Event team2Goal={"Mohammad"} team2Asist={"Ahmad"} time={"33`"} />
        <VerticalLine />
        <Event team1Goal={"fuckAhmad"} team1Asist={"Mohammad"} time={"44`"} />
        <VerticalLine />
        <Event team1Goal={"fuckAhmad"} time={"99`"} />
        <VerticalLine />
        <Event time={"end"} />
      </View>
    </DetailsTable>
  );
};
const Event = ({ team1Goal, team1Asist, time, team2Goal, team2Asist }) => {
  return (
    <View
      className=" flex-row items-center justify-between "
      style={{ width: wp(80) }}
    >
      <View className=" w-[40%] flex items-start ">
        <View className="flex-row justify-center items-center space-x-1">
          {team1Goal && (
            <>
              <Text>{team1Goal}</Text>
              <Image
                className="rounded-full"
                source={require("../../assets/images/footballcartoon.jpg")}
                style={{ width: 15, height: 15 }}
              />
            </>
          )}
        </View>
        <View className="flex-row justify-center items-center space-x-1">
          {team1Asist && (
            <>
              <Text>{team1Asist}</Text>
              <Image
                source={require("../../assets/images/assists.png")}
                style={{ width: 15, height: 15 }}
              />
            </>
          )}
        </View>
      </View>
      <View className=" w-[10%] flex items-center">
        <Text>{time}</Text>
      </View>
      <View className=" w-[40%] flex items-end">
        {team2Goal && (
          <>
            <View className="flex-row justify-center items-center space-x-1">
              <Text>{team2Goal}</Text>
              <Image
                className="rounded-full"
                source={require("../../assets/images/footballcartoon.jpg")}
                style={{ width: 15, height: 15 }}
              />
            </View>
          </>
        )}
        {team2Asist && (
          <>
            <View className="flex-row justify-center items-center space-x-1">
              <Text>{team2Asist}</Text>
              <Image
                source={require("../../assets/images/assists.png")}
                style={{ width: 15, height: 15 }}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export const VerticalLine = () => <View className="w-[2px] h-6 bg-black" />;

export default MatchDetails;
