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
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import LineUP from "../components/GameDetailsComponents/LineUP";
import GameInfo from "../components/GameDetailsComponents/GameInfo";
import OtherPlayers from "../components/GameDetailsComponents/OtherPlayers";
import Marker from "../components/GameDetailsComponents/Marker";
import MatchDetails from "../components/GameDetailsComponents/MatchDetails";
import GameCard from "../components/GameDetailsComponents/GameCard";
const GameDetails = ({ navigation }) => {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      {/*Header */}
      <GameCard />
      <ScrollView showsVerticalScrollIndicator={false}>
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
