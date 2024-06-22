import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  NativeEventEmitter,
  Animated,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

import LineUP from "../components/GameDetailsComponents/LineUP";
import GameInfo from "../components/GameDetailsComponents/GameInfo";
import OtherPlayers from "../components/GameDetailsComponents/OtherPlayers";
import Marker from "../components/GameDetailsComponents/Marker";
import MatchDetails from "../components/GameDetailsComponents/MatchDetails";
import GameCard from "../components/GameDetailsComponents/GameCard";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { BellAlertIcon } from "react-native-heroicons/solid";
import { BellIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import Pending from "../components/GameDetailsComponents/Pending";
import ChoosableLineUp from "../components/GameDetailsComponents/ChoosableLineUp";
import SlidesPicker from "../components/MyComp/SlidesPicker";

const GameDetails = ({ navigation, route }) => {
  navigation = useNavigation();
  const { type } = route?.params || {};

  console.log(type);
  const [activeBell, setActiveBell] = useState(false);
  const [allPlayers, setAllPlayers] = useState({});

  const [players, setPlayers] = useState({});
  const [others, setOthers] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setActiveBell(!activeBell)}>
          {activeBell ? (
            <BellAlertIcon color={"black"} size={28} />
          ) : (
            <BellIcon color={"black"} size={28} />
          )}
        </TouchableOpacity>
      ),

      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
    });
  }, [navigation, activeBell]);
  const handleSubmit = () => {
    let playersExist = true;

    for (let i = 1; i <= 5; i++) {
      if (!players[`player${i}`]) {
        playersExist = false;
        break;
      }
    }

    if (playersExist) {
      console.log("All players from 1 to 5 exist.");
    } else {
      console.log("Some players from 1 to 5 are missing.");
    }
    const allPlayersCopy = { ...players };
    if (others) {
      allPlayersCopy.others = others;
    }
    console.log(allPlayersCopy);
    setAllPlayers(allPlayersCopy);
  };

  const [page, setPage] = useState("stats");
  const typeText =
    type === "EMPTY"
      ? "12:30 - 14"
      : type === "PENDING"
      ? "pending"
      : type === "TIMED"
      ? "16:00 - 18"
      : "";

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      {/*Header */}
      {/*<GameCard />*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <GameCard
          header={"friendly match"}
          discreption={typeText}
          score={".."}
          team1={
            type == "PENDING" || type == "TIMED"
              ? require("../assets/images/arsenal.png")
              : ""
          }
          team2={type == "TIMED" && require("../assets/images/manuntd.png")}
        />
        <Marker>GameDetails</Marker>
        {type == "EMPTY" ? (
          <SlidesPicker>
            <ChoosableLineUp
              dispalyName={"team1"}
              players={players}
              setPlayers={setPlayers}
              others={others}
              setOthers={setOthers}
            />
          </SlidesPicker>
        ) : type == "PENDING" ? (
          <SlidesPicker>
            <ChoosableLineUp
              dispalyName={"team1"}
              players={players}
              setPlayers={setPlayers}
              others={others}
              setOthers={setOthers}
            />
            <LineUP dispalyName={"team2"} />
          </SlidesPicker>
        ) : type == "TIMED" ? (
          <SlidesPicker>
            <LineUP dispalyName={"team1"} />
            <LineUP dispalyName={"team2"} />
          </SlidesPicker>
        ) : (
          <SlidesPicker>
            <LineUP dispalyName={"team"} />
            <LineUP dispalyName={"team2"} />
          </SlidesPicker>
        )}

        {/*map*/}

        {/* <View className="mt-10">
          <MatchDetails />
        </View> */}
        <Marker>GameInfo</Marker>
        <GameInfo />

        <Marker>Pending</Marker>
        {type == "EMPTY" ? (
          <View className="flex justify-center items-center">
            <TouchableOpacity
              className="px-4 py-2 bg-green-400 rounded-md"
              onPress={() => {}}
            >
              <Text>send Request</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Pending onPress={() => handleSubmit()} />
        )}
      </ScrollView>
    </View>
  );
};

export default GameDetails;
