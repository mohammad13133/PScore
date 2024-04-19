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

const GameDetails = ({ navigation }) => {
  navigation = useNavigation();
  const [activeBell, setActiveBell] = useState(false);
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
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      {/*Header */}
      {/*<GameCard />*/}

      <ScrollView showsVerticalScrollIndicator={false}>
        <GameCard />
        <Marker>GameDetails</Marker>

        {/*map*/}
        <LineUP />
        <View className="mt-10">
          <MatchDetails />
        </View>
        <Marker>GameInfo</Marker>
        <GameInfo />
        <Marker>OtherPlayers</Marker>
        <OtherPlayers />
      </ScrollView>
    </View>
  );
};

export default GameDetails;
