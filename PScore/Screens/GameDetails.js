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
import { BellIcon } from "react-native-heroicons/outline";
import Pending from "../components/GameDetailsComponents/Pending";
import ChoosableLineUp from "../components/GameDetailsComponents/ChoosableLineUp";
import SlidesPicker from "../components/MyComp/SlidesPicker";

const GameDetails = ({ navigation }) => {
  navigation = useNavigation();
  const [activeBell, setActiveBell] = useState(false);
  const [allPlayers, setAllPlayers] = useState({});

  const [players, setPlayers] = useState({});
  const [others, setOthers] = useState({});
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
    setAllPlayers({
      ...players,
      ...others,
    });
  };

  const [page, setPage] = useState("stats");
  const renderComponent = () => {
    switch (page) {
      case "Posts":
        return <LineUP />;
      case "games":
        return <ChoosableLineUp />;
      case "stats":
        return <Text>stats</Text>;
      default:
        return null;
    }
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      {/*Header */}
      {/*<GameCard />*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <GameCard />

        <Marker>GameDetails</Marker>
        <SlidesPicker>
          <ChoosableLineUp
            dispalyName={"yourLineUp"}
            players={players}
            setPlayers={setPlayers}
            others={others}
            setOthers={setOthers}
          />
          <LineUP dispalyName={"enemyLineUp"} />
        </SlidesPicker>
        {/*map*/}

        {/* <View className="mt-10">
          <MatchDetails />
        </View> */}
        <Marker>GameInfo</Marker>
        <GameInfo />

        <Marker>Pending</Marker>
        <Pending onPress={() => handleSubmit()} />
        <Pending onPress={() => console.log(allPlayers)} />
      </ScrollView>
    </View>
  );
};

export default GameDetails;
