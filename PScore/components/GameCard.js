import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOutLeft,
} from "react-native-reanimated";
import dayjs from "dayjs";
import { SvgUri } from "react-native-svg";

const GameCard = ({ matches }) => {
  return (
    <View
      className="flex  p-4 rounded-md mt-1 mb-4"
      style={{
        width: wp(90),
      }}
    >
      <View className="mb-2 flex-row justify-between items-center">
        <Text className="text-lg" style={{ color: colors.myWhite }}>
          {matches[0]?.competition?.name}
        </Text>
        <Text style={{ color: colors.myWhite, opacity: 0.6 }}>
          {matches?.length} Match
        </Text>
      </View>
      {matches &&
        matches.map((element, index) => (
          <Animated.View
            key={index}
            entering={(entering = FadeInLeft.duration(200 * index))}
          >
            <SingleGame key={index} MatchDetails={element} />
          </Animated.View>
        ))}
    </View>
  );
};
const ff = {
  data: [
    {
      nameStad: "betWazan",
      id: 1,
      matches: [
        {
          id: 2009,
          homeTeam: { teamName: "rafediTeam", goals: 2, teamimage: "ssss" },
          awayTeam: { teamName: "awayTeam", goals: 2, teamimage: "ssss" },
          status: "TIMED",
        },
        {
          id: 2010,
          homeTeam: { teamName: "rafediTeam", goals: 2, teamimage: "ssss" },
          awayTeam: { teamName: "awayTeam", goals: 2, teamimage: "ssss" },
          status: "TIMED",
        },
      ],
    },
    {
      nameStad: "betWazan",
      id: 1,
      matces: [
        {
          id: 2009,
          homeTeam: { teamName: "rafediTeam", goals: 2, teamimage: "ssss" },
          awayTeam: { teamName: "awayTeam", goals: 2, teamimage: "ssss" },
          status: "TIMED",
        },
        {
          id: 2010,
          homeTeam: { teamName: "rafediTeam", goals: 2, teamimage: "ssss" },
          awayTeam: { teamName: "awayTeam", goals: 2, teamimage: "ssss" },
          status: "TIMED",
        },
      ],
    },
  ],
};
const SingleGame = ({ MatchDetails }) => {
  const navigation = useNavigation();
  const dateString = MatchDetails?.utcDate;
  const time = dayjs(dateString).format("HH:mm");
  const isSvgHome = MatchDetails?.homeTeam?.crest.endsWith(".svg");
  const isSvgAway = MatchDetails?.awayTeam?.crest.endsWith(".svg");

  return (
    <Pressable
      className="flex-row justify-center items-center   mb-5 rounded-xl"
      style={{
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6, //android
        backgroundColor: colors.myWhite,
      }}
      onPress={() => navigation.navigate("GameDetails")}
    >
      <View
        className="flex items-end justify-center m-1"
        style={{ width: 100 }}
      >
        <Text style={{ color: colors.mainColor }}>
          {MatchDetails?.homeTeam?.tla}
        </Text>
      </View>
      {isSvgHome ? (
        <View className="rounded-full" style={{ width: 35, height: 35 }}>
          <SvgUri
            width="100%"
            height="100%"
            uri={MatchDetails?.homeTeam?.crest}
          />
        </View>
      ) : (
        <Image
          source={{ uri: MatchDetails?.homeTeam?.crest }}
          className="rounded-full"
          style={{ width: 35, height: 35 }}
        />
      )}

      <View
        className="flex items-center  justify-center "
        style={{ width: 100, height: 90 }}
      >
        {MatchDetails?.status === "TIMED" ? (
          <Text className="font-semibold" style={{ color: colors.secondColor }}>
            Not started
          </Text>
        ) : MatchDetails?.status === "FINISHED" ? (
          <Text className="font-semibold" style={{ color: colors.secondColor }}>
            {MatchDetails?.score?.fullTime?.home}:
            {MatchDetails?.score?.fullTime?.away}
          </Text>
        ) : null}
        {MatchDetails?.status === "FINISHED" ? (
          <Text style={{ color: colors.secondColor, opacity: 0.7 }}>ended</Text>
        ) : (
          <Text style={{ color: colors.secondColor, opacity: 0.7 }}>
            {time}
          </Text>
        )}
      </View>

      {isSvgAway ? (
        <View className="rounded-full" style={{ width: 35, height: 35 }}>
          <SvgUri
            width="100%"
            height="100%"
            uri={MatchDetails?.awayTeam?.crest}
          />
        </View>
      ) : (
        <Image
          source={{ uri: MatchDetails?.awayTeam?.crest }}
          className="rounded-full"
          style={{ width: 35, height: 35 }}
        />
      )}
      <View
        className="flex items-start justify-center m-1"
        style={{ width: 100 }}
      >
        <Text className="text-left" style={{ color: colors.mainColor }}>
          {MatchDetails?.awayTeam?.tla}
        </Text>
      </View>
    </Pressable>
  );
};

const SingleGame2 = () => {
  return (
    <View
      className="flex-row justify-center items-center  bg-slate-200 mb-2"
      style={{ height: 100 }}
    >
      <View
        className="flex items-end justify-center m-1"
        style={{ width: 100 }}
      >
        <Text>Man City</Text>
      </View>

      <View
        className="bg-slate-500 rounded-full"
        style={{ width: 35, height: 35 }}
      />
      <View
        className="flex items-center  justify-center "
        style={{ width: 100, height: 90 }}
      >
        <Text>ended</Text>
        <Text style={{ color: colors.secondColor }}>1 - 4</Text>
        <Text style={{ color: colors.secondColor }}>AM 10:00</Text>
      </View>
      <View
        className="bg-slate-500 rounded-full"
        style={{ width: 35, height: 35 }}
      />
      <View
        className="flex items-start justify-center m-1"
        style={{ width: 100 }}
      >
        <Text>Everton</Text>
      </View>
    </View>
  );
};

export default GameCard;
