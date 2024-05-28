import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import OtherPlayers from "./OtherPlayers";
const PLAYEERS = [
  {
    id: 1,
    playername: "mohammad khaled",
    image: require("../../assets/images/players/ederson.png"),
  },
  {
    id: 2,
    playername: "Ahmad",
    image: require("../../assets/images/players/ederson.png"),
  },
  {
    id: 3,
    playername: "Aamer",
    image: require("../../assets/images/players/ederson.png"),
  },
  {
    id: 4,
    playername: "maen",
    image: require("../../assets/images/players/ederson.png"),
  },
  {
    id: 5,
    playername: "yaser",
    image: require("../../assets/images/players/ederson.png"),
  },
];
const ChoosableLineUp = ({ players, setPlayers, others, setOthers }) => {
  const [selectedChoice, setSelectedChoice] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [playerCount, setPlayerCount] = useState(5);
  const handlePlayerPress = (position) => {
    setSelectedPlayer(position);
    setIsOther(false);
    setModalVisible(true);
  };
  const handleVisibleAddOther = () => {
    setIsOther(true);
    setModalVisible(true);
  };
  const handleAddOther = (newOther) => {
    if (Object.values(others).some((player) => player.id === newOther.id)) {
      console.log("Duplicate ID", "This player ID already exists.");

      setModalVisible(false);
      return;
    }

    const newPlayerKey = `player${playerCount + 1}`;
    setOthers((prevOthers) => ({
      ...prevOthers,
      [newPlayerKey]: newOther, // Adding the new player
    }));
    setPlayerCount((prevCount) => prevCount + 1);

    setModalVisible(false);
  };
  const handleChoiceSelection = (choice) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [selectedPlayer]: choice,
    }));

    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
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
              player={players.player1}
              onPress={() => handlePlayerPress("player1")}
            />
            {/*defence*/}

            <Player
              top={"50%"}
              left={"50%"}
              player={players.player2}
              onPress={() => handlePlayerPress("player2")}
            />
            <Player
              top={"70%"}
              left={"35%"}
              player={players.player3}
              onPress={() => handlePlayerPress("player3")}
            />
            <Player
              top={"70%"}
              left={"65%"}
              player={players.player4}
              onPress={() => handlePlayerPress("player4")}
            />
            <Player
              top={"20%"}
              left={"50%"}
              ImageProp={require("../../assets/images/players/haaland.png")}
              player={players.player5}
              onPress={() => handlePlayerPress("player5")}
            />
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={PLAYEERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="border-b mb-2"
                    onPress={() => {
                      isOther == true
                        ? handleAddOther(item)
                        : handleChoiceSelection(item);
                    }}
                  >
                    <View className="flex-row items-center">
                      <View className="rounded-full border border-green-600">
                        <Image
                          className="rounded-full"
                          style={{ height: 50, width: 50 }}
                          source={item.image}
                        />
                      </View>

                      <Text style={styles.choiceText}>{item.playername}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
      <OtherPlayers
        choosable
        onPress={() => handleVisibleAddOther()}
        others={others}
      />
    </>
  );
};
const Player = ({ top, left, ImageProp, goals, assists, player, onPress }) => {
  return (
    <TouchableOpacity
      className="absolute flex items-center justify-center"
      onPress={onPress}
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
          source={
            player
              ? player.image
              : require("../../assets/images/defaultUserImage.jpg")
          }
          style={{ resizeMode: "stretch", width: 50, height: 50 }}
        />
      </View>

      <Text className="text-white">
        {player ? player.playername : "SelectPlayer"}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  choiceButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  choiceText: {
    fontSize: 18,
  },
});

export default ChoosableLineUp;
