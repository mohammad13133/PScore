import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const LineUP = () => {
  return (
    <View className="w-full flex items-center justify-center mt-4 relative">
      <View
        style={{
          width: wp(130),
          height: hp(50),
        }}
      >
        <Image
          source={require("../../assets/images/footballground.png")}
          style={{ resizeMode: "stretch", width: "100%", height: "100%" }}
        />
        {/*Gk */}
        <Player
          top={"90%"}
          left={"50%"}
          ImageProp={require("../../assets/images/players/ederson.png")}
        />
        {/*defence*/}
        <Player
          top={"50%"}
          left={"50%"}
          ImageProp={require("../../assets/images/players/ederson.png")}
        />
        <Player top={"70%"} left={"20%"} goals={2} />
        <Player top={"70%"} left={"80%"} goals={5} />
        <Player
          top={"20%"}
          left={"50%"}
          ImageProp={require("../../assets/images/players/haaland.png")}
          goals={5}
        />
      </View>
    </View>
  );
};
const Player = ({ top, left, ImageProp, goals }) => {
  return (
    <View
      className="absolute flex items-center justify-center"
      style={{
        width: 100,
        height: 100,
        top: top,
        left: left,
        transform: [{ translateX: -50 }, { translateY: -50 }],
      }}
    >
      <View
        className="absolute flex items-start justify-start  w-10  z-10"
        style={{ transform: [{ translateX: 30 }, { translateY: -35 }] }}
      >
        {goals > 0 && (
          <View className="flex-row bg-white/60 rounded-full px-1 space-x-[1px] border border-[#18453B]">
            {Array(goals)
              .fill()
              .map((_, index) => (
                <Image
                  key={index}
                  className="rounded-full"
                  source={require("../../assets/images/footballcartoon.jpg")}
                  style={{ width: 20, height: 20 }}
                />
              ))}
            <Text className="px-1">{goals}</Text>
          </View>
        )}
      </View>

      <View className="border border-emerald-400 rounded-full">
        <Image
          className="rounded-full "
          source={ImageProp}
          style={{ resizeMode: "stretch", width: 50, height: 50 }}
        />
      </View>

      <Text className="text-white">ederson</Text>
    </View>
  );
};
export default LineUP;
