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
        <Player top={"70%"} left={"35%"} goals={3} assists={1} />
        <Player top={"70%"} left={"65%"} goals={9} />
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
const Player = ({ top, left, ImageProp, goals, assists }) => {
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
      {/*goals*/}
      <View
        className="absolute flex items-start justify-start  w-10  z-10"
        style={{ transform: [{ translateX: 30 }, { translateY: -35 }] }}
      >
        {goals > 0 && (
          <View className="flex-row bg-white/60 rounded-full px-1 space-x-[3px] border border-[#18453B]">
            {Array(goals < 3 ? goals : 3)
              .fill()
              .map((_, index) => (
                <Image
                  key={index}
                  className="rounded-full"
                  source={require("../../assets/images/footballcartoon.jpg")}
                  style={{ width: 20, height: 20 }}
                />
              ))}
            <Text className="px-1 h-5">{goals < 3 ? goals : `(${goals})`}</Text>
          </View>
        )}
      </View>

      {/*assets*/}

      <View
        className="absolute flex items-start justify-start  w-10  z-10"
        style={{ transform: [{ translateX: 30 }, { translateY: 10 }] }}
      >
        {assists > 0 && (
          <View className="flex-row bg-white/60 rounded-full px-1 space-x-[3px] border border-[#18453B]">
            {Array(assists < 3 ? assists : 3)
              .fill()
              .map((_, index) => (
                <Image
                  key={index}
                  className=""
                  source={require("../../assets/images/assists.png")}
                  style={{ width: 20, height: 20 }}
                />
              ))}
            <Text className="px-1 h-5">
              {assists < 3 ? assists : `(${assists})`}
            </Text>
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
