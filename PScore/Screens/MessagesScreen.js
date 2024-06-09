import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import ChatsContext from "../contexts/ChatsContext";
import { useChats } from "../contexts/ChatsContext";
import { useEffect } from "react";
import io from "socket.io-client";
import { useLayoutEffect } from "react";
import colors from "../assets/colors/colors";
// const socket = io.connect("http://localhost:4000");

const MessagesScreen = ({ navigation }) => {
  const { socket, user, setUser, allChatRooms, setAllChatRooms } = useChats();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
    });
  }, [navigation]);
  useEffect(() => {
    socket.emit("getAllGroups");
  }, []);
  return (
    <View>
      {allChatRooms ? (
        <FlatList
          data={allChatRooms}
          renderItem={({ item, index }) => (
            <Item key={index} item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.chatGroupName}
        />
      ) : null}
      {/* <Text>{user ? user : ""}</Text> */}
    </View>
  );
};
const Item = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center"
      style={{ backgroundColor: "white" }}
      onPress={() =>
        navigation.navigate("Chat", { roomid: item.chatGroupName })
      }
    >
      <Image
        source={require("../assets/images/defaultUserImage.jpg")}
        className="rounded-full"
        style={{ width: 50, height: 50 }}
      />
      <View>
        <Text>{item.chatGroupName}</Text>
        <Text>
          {item.messages.length > 0
            ? item.messages[item.messages.length - 1].text
            : "enter to text"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default MessagesScreen;
