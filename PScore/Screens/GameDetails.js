import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  NativeEventEmitter,
  Animated,
  Alert,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

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
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import MyAlert from "../components/MyAlert";

const GameDetails = ({ navigation, route }) => {
  navigation = useNavigation();
  const { type, gameid, inviteId } = route?.params || {};
  const { token, teamData } = useAuth();
  console.log(type);
  const [activeBell, setActiveBell] = useState(false);
  const [allPlayers, setAllPlayers] = useState({});
  const [matchDetails, setMatchDetails] = useState({});
  const [players, setPlayers] = useState({});
  const [others, setOthers] = useState([]);

  const [invitedTeamId, setInvitedTeamId] = useState();
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
  useEffect(() => {
    const getMatch = async () => {
      console.log(gameid);
      try {
        const response = await axios.get(
          `https://pscore-backend.vercel.app/match/getmatch/${gameid}`,
          {
            headers: {
              authorization: `Ahmad__${token}`,
            },
          }
        );
        setMatchDetails(response?.data?.match);
        console.log(response?.data);
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    getMatch();
  }, []);
  const handleInvite = async () => {
    console.log(gameid);
    console.log(invitedTeamId);
    const allPlayersCopy = { ...players };
    if (others) {
      allPlayersCopy.others = others;
    }
    const playersChech = [
      "player1",
      "player2",
      "player3",
      "player4",
      "player5",
    ];

    let allPresent = true;
    console.log(allPlayersCopy);
    for (const player of playersChech) {
      if (!(player in allPlayersCopy)) {
        allPresent = false;
        break;
      }
    }
    if (allPresent) {
      console.log(
        "The object contains all players from player1 to player5 as keys."
      );
    } else {
      console.log(
        "The object does not contain all players from player1 to player5 as keys."
      );
    }
    try {
      const response = await axios.post(
        `https://pscore-backend.vercel.app/team/inviteteam/${gameid}/${invitedTeamId}`,
        allPlayersCopy,
        {
          headers: {
            authorization: `Ahmad__${token}`,
          },
        }
      );
      console.log(response?.data);
      showAlert("invite sended", "you send the invintation successfully");
      navigation.navigate("MainPage");
    } catch (error) {
      console.error(" error:", error);
    }
  };
  const handleAccept = async () => {
    const allPlayersCopy = { ...players };
    if (others) {
      allPlayersCopy.others = others;
    }
    const payload = {
      response: "accepted",
      inviteId,
      others,
      ...players,
    };

    console.log(payload);
    try {
      const response = await axios.post(
        `https://pscore-backend.vercel.app/team/inviteteamresponse/${gameid}`,
        payload,
        {
          headers: {
            authorization: `Ahmad__${token}`,
          },
        }
      );

      console.log(response?.data);
      navigation.navigate("MainPage");
    } catch (error) {
      console.error(" error:", error);
    }
  };
  const handleDeny = async () => {
    console.log(gameid);
    console.log(inviteId);

    const payload = {
      response: "rejected",
      inviteId,
    };
    try {
      const response = await axios.post(
        `https://pscore-backend.vercel.app/team/inviteteamresponse/${gameid}`,
        payload,
        {
          headers: {
            authorization: `Ahmad__${token}`,
          },
        }
      );
      navigation.navigate("MainPage");
      console.log(response?.data);
    } catch (error) {
      console.error(" error:", error);
    }
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
  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      {/*Header */}
      {/*<GameCard />*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          type == "EMPTY" ? (
            <GameCard
              header={"friendly match"}
              discreption={matchDetails.startTime + "-" + matchDetails.endTime}
              setInvitedTeamId={setInvitedTeamId}
              score={".."}
              team1={teamData.team.image}
              team2={""}
            />
          ) : type == "pending" ? null : null // /> //   team2={""} //   team1={teamData.team.image} //   score={".."} //   setInvitedTeamId={setInvitedTeamId} //   discreption={matchDetails.startTime + "-" + matchDetails.endTime} //   header={"friendly match"} // <GameCard
        }
        {/* <GameCard
          header={"friendly match"}
          discreption={typeText}
          score={".."}
          team1={
            type == "PENDING" || type == "TIMED"
              ? require("../assets/images/arsenal.png")
              : ""
          }
          team2={type == "TIMED" && require("../assets/images/manuntd.png")}
        /> */}
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
        ) : type == "pending" ? (
          <SlidesPicker>
            <LineUP
              dispalyName={"team1"}
              players={matchDetails?.team1Players}
            />
            <ChoosableLineUp
              dispalyName={"team2"}
              players={players}
              setPlayers={setPlayers}
              others={others}
              setOthers={setOthers}
            />
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
        <GameInfo matchDetails={matchDetails} />

        <Marker>Pending</Marker>
        {type == "EMPTY" ? (
          <View className="flex justify-center items-center">
            <TouchableOpacity
              className="px-4 py-2 bg-green-400 rounded-md"
              onPress={handleInvite}
            >
              <Text>send invite</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Pending onPressAccept={handleAccept} onPressDeny={handleDeny} />
        )}
      </ScrollView>
    </View>
  );
};

export default GameDetails;
