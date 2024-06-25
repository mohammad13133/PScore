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
  ActivityIndicator,
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
import baseUrl from "../utils/url";

import dayjs from "dayjs";
import { io } from "socket.io-client";
import MatchCounter from "../components/MatchCounter";
const mySocket = io.connect(baseUrl);
const GameDetails = ({ navigation, route }) => {
  navigation = useNavigation();
  const { gameid, inviteId } = route?.params || {};
  const { token, teamData } = useAuth();
  const [activeBell, setActiveBell] = useState(false);
  const [allPlayers, setAllPlayers] = useState({});
  const [matchDetails, setMatchDetails] = useState({});
  const [players, setPlayers] = useState({});
  const [others, setOthers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
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
      showAlert("invite responded", "you accept the invintation");
      navigation.navigate("MainPage");
    } catch (error) {
      console.error(" error:", error);
    }
  };
  const events = [
    { team2Goal: "Mohammad", team2Asist: "aaaa", time: "33" },
    { team1Goal: "add", team1Asist: "aaaa", time: "45" },
  ];
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
      console.log(response?.data);
      showAlert("invite responded", "you denyed the invintation");
      navigation.navigate("MainPage");
    } catch (error) {
      console.error(" error:", error);
    }
  };
  const [page, setPage] = useState("stats");
  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  // useEffect(() => {
  //   mySocket.emit("getMatch", gameid);

  // }, []);
  // useEffect(() => {
  //   mySocket.on("foundmatch", (data) => {
  //     console.log("Match Changed");
  //     if (data?.match) {
  //       setMatchDetails(data?.match);
  //       console.log(data);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    mySocket.emit("getMatch", gameid);
    return () => {
      mySocket.off("getMatch");
    };
  }, []);
  useEffect(() => {
    const handleFoundMatch = (data) => {
      console.log("Match Changed");
      setMatchDetails(data?.match);
      // console.log(data);
    };

    mySocket.on("foundmatch", handleFoundMatch);
    return () => {
      mySocket.off("foundmatch", handleFoundMatch);
    };
  }, []);

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      {/*Header */}
      {/*<GameCard />*/}
      {!isLoading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {matchDetails?.status === "empty" ? (
            <GameCard
              header={"friendly match"}
              discreption={matchDetails.startTime + "-" + matchDetails.endTime}
              setInvitedTeamId={setInvitedTeamId}
              score={".."}
              team1={teamData?.team.image}
              team2={""}
            />
          ) : matchDetails?.status === "timed" ? (
            <GameCard
              header={"friendly match"}
              discreption={matchDetails.startTime + "-" + matchDetails.endTime}
              setInvitedTeamId={setInvitedTeamId}
              score={matchDetails.status == "pending" ? "pending" : "..."}
              team1={matchDetails?.team1?.image}
              team2={matchDetails?.team2?.image || teamData?.team?.image}
            />
          ) : matchDetails?.status === "live" ? (
            <GameCard
              header={"friendly match"}
              discreption={
                <MatchCounter
                  start={matchDetails?.startTime}
                  end={matchDetails?.endTime}
                  counterDate={matchDetails?.date}
                />
              }
              setInvitedTeamId={setInvitedTeamId}
              score={matchDetails?.team1Score + "-" + matchDetails?.team2Score}
              team1={matchDetails?.team1?.image}
              team2={matchDetails?.team2?.image}
            />
          ) : (
            <GameCard
              header={"friendly match"}
              discreption={"ended"}
              setInvitedTeamId={setInvitedTeamId}
              score={matchDetails?.team1Score + "-" + matchDetails?.team2Score}
              team1={matchDetails?.team1?.image}
              team2={matchDetails?.team2?.image}
            />
          )}

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
          {matchDetails.status == "empty" ? (
            <SlidesPicker>
              <ChoosableLineUp
                dispalyName={"team1"}
                players={players}
                setPlayers={setPlayers}
                others={others}
                setOthers={setOthers}
              />
            </SlidesPicker>
          ) : matchDetails.status == "pending" ? (
            <SlidesPicker>
              <LineUP
                dispalyName={"team1"}
                players={
                  matchDetails?.team1Players ? matchDetails?.team1Players : {}
                }
                others={
                  matchDetails?.team1others ? matchDetails?.team1others : []
                }
              />
              <ChoosableLineUp
                dispalyName={"team2"}
                players={players}
                setPlayers={setPlayers}
                others={others}
                setOthers={setOthers}
              />
            </SlidesPicker>
          ) : (
            <SlidesPicker>
              <LineUP
                dispalyName={"team1"}
                players={
                  matchDetails?.team1Players ? matchDetails?.team1Players : {}
                }
                others={
                  matchDetails?.team1others ? matchDetails?.team1others : []
                }
              />
              <LineUP
                dispalyName={"team2"}
                players={
                  matchDetails?.team2Players ? matchDetails?.team2Players : {}
                }
                others={
                  matchDetails?.team2others ? matchDetails?.team2others : []
                }
              />
            </SlidesPicker>
          )}

          {/*map*/}

          <View className="mt-10 flex items-center justify-center">
            <TouchableOpacity
              className="py-2 px-3 mb-2 rounded-sm"
              style={{ backgroundColor: colors.mainColor }}
              onPress={() =>
                navigation.navigate("AddEvent", {
                  players1: matchDetails?.team1Players,
                  players2: matchDetails?.team2Players,
                })
              }
            >
              <Text className="text-white">add event</Text>
            </TouchableOpacity>
            <MatchDetails events={events} />
          </View>
          <Marker>GameInfo</Marker>
          <GameInfo matchDetails={matchDetails} />

          {matchDetails.status == "empty" ? (
            <View className="flex justify-center items-center">
              <TouchableOpacity
                className="px-4 py-2 bg-green-400 rounded-md"
                onPress={handleInvite}
              >
                <Text>send invite</Text>
              </TouchableOpacity>
            </View>
          ) : matchDetails.status == "pendind" ? (
            <Pending onPressAccept={handleAccept} onPressDeny={handleDeny} />
          ) : null}
        </ScrollView>
      ) : (
        <ActivityIndicator color={colors.lightGreen} />
      )}
    </View>
  );
};

export default GameDetails;
