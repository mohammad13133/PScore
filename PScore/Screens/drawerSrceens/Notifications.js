import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Notifications = () => {
  return (
    <View className="flex-1">
      <View className="w-full h-full flex items-center">
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
      </View>
    </View>
  );
};

export default Notifications;
