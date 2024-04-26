import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import colors from "../assets/colors/colors";
import DetailsTable from "../components/DetailsTable";
import Info from "../components/Info";
import { useNavigation } from "@react-navigation/native";
import DayPicker from "../components/DayPicker";
import GameCard from "../components/GameCard";

const Team = ({ navigation, route }) => {
  const matches = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
    });
  }, [navigation]);
  const [page, setPage] = useState("news");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [page]);

  const renderComponent = () => {
    switch (page) {
      case "games":
        return loading ? (
          <ActivityIndicator size="large" color={colors.mainColor} />
        ) : (
          <GamesComponent matches={matches} />
        );
      case "players":
        return <PlayersComponent />;
      case "news":
        return <NewsComponent />;
      default:
        return null;
    }
  };
  return (
    <ScrollView className="flex-1">
      <View
        style={{
          height: 300,
          backgroundColor: colors.secondColor,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}
        className="flex items-center justify-center relative "
      >
        <View className="absolute top-10">
          <Text>{matches && matches[0]?.competition?.name}</Text>
        </View>

        <View
          className="rounded-full border border-red-600 flex items-center justify-center"
          style={{ width: 151, height: 151 }}
        >
          <Image
            className="rounded-full"
            source={require("../assets/images/MancityTeam.jpg")}
            style={{
              width: 150,
              height: 150,
              resizeMode: "cover",
            }}
          />
        </View>
        <View className="absolute bottom-10 w-full flex-row justify-between px-20">
          <Text>Manchester</Text>
          <Text>Al-Etihad</Text>
        </View>
      </View>
      <View className="w-full flex items-center justify-center mt-5">
        <View className="bg-slate-400 flex-row  rounded-lg">
          <Slide name={"games"} page={page} setPage={setPage} />
          <Slide name={"players"} page={page} setPage={setPage} />
          <Slide name={"news"} page={page} setPage={setPage} />
        </View>
      </View>
      {renderComponent()}
      {/* <View className="mt-5">
        <DetailsTable header={"Upcoming Games"}></DetailsTable>
      </View> */}
    </ScrollView>
  );
};

const GamesComponent = ({ matches }) => {
  return (
    <View>
      {/* <DayPicker /> */}
      <View className="flex items-center justify-center">
        <GameCard matches={matches} />
      </View>
    </View>
  );
};
const PlayersComponent = () => {
  return (
    <View className="mt-5">
      <DetailsTable header={"Players"}>
        <Info first={"haaland"} position={"st"} />
        <Info first={"Ederson"} position={"st"} />
        <Info first={"Ahmad"} position={"st"} />
      </DetailsTable>
    </View>
  );
};
const NewsComponent = () => {
  return (
    <View>
      <Text>News</Text>
    </View>
  );
};
const Slide = ({ name, page, setPage }) => {
  const activeStyle =
    page == name ? "bg-slate-100 border border-emerald-950" : "";
  return (
    <Pressable
      onPress={() => {
        setPage(name);
      }}
      className={"px-6 py-2 rounded-lg " + activeStyle}
    >
      <Text>{name}</Text>
    </Pressable>
  );
};

export default Team;
