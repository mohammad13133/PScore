import { View, Text, FlatList } from "react-native";
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

  return (
    <View>
      {allChatRooms ? (
        <FlatList
          data={allChatRooms}
          renderItem={({ item, index }) => (
            <Item key={index} title={item.chatGroupName} />
          )}
          keyExtractor={(item) => item}
        />
      ) : null}
      {/* <Text>{user ? user : ""}</Text> */}
    </View>
  );
};
const Item = ({ title }) => {
  return <Text>{title}</Text>;
};
export default MessagesScreen;
