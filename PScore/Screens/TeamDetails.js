import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import SlidesPicker from "../components/MyComp/SlidesPicker";
import DetailsTable from "../components/DetailsTable";
import { useEffect } from "react";
import colors from "../assets/colors/colors";

import axios from "axios";
import { useState } from "react";
import Player from "../components/Player";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GameCard from "../components/GameCard";
const TeamDetails = ({ route }) => {
  const [teamData, setTeamData] = useState({});
  const navigation = useNavigation();
  const { _id } = route?.params;
  useEffect(() => {
    console.log(_id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pscore-backend.vercel.app/team/teamdetails/${_id}
          `,
          {},
          {}
        );
        console.log(response.data);
        setTeamData(response.data);
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
    });
  }, [navigation]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ display: "flex", alignItems: "center" }}
    >
      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: colors.secondColor,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}
        className="flex items-center justify-center relative "
      >
        <View className="absolute top-10">
          <Text>{teamData?.team?.name}</Text>
        </View>
        <View
          className="rounded-full border flex items-center justify-center"
          style={{ width: 151, height: 151 }}
        >
          {teamData?.team?.image && (
            <Image
              className="rounded-full"
              source={{ uri: teamData?.team?.image }}
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
              }}
            />
            // <Text>dd</Text>
          )}
        </View>
      </View>
      <SlidesPicker>
        <View className="flex" dispalyName={"games"}>
          <GameCard matches={teamData?.myMatches} name={""} />
        </View>

        {teamData?.playerProfile?.length > 0 && (
          <Players dispalyName="Players" team={teamData} />
        )}
      </SlidesPicker>
    </ScrollView>
  );
};
const Players = ({ team }) => {
  return (
    <View className="mt-3">
      <DetailsTable header={"Players"}>
        {team?.playerProfile &&
          team?.playerProfile.map((item, index) => (
            <Player item={item} key={index} />
          ))}
      </DetailsTable>
    </View>
  );
};
export default TeamDetails;
