import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect, Component } from "react";
import io from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";
import { useCallback } from "react";
import { v4 } from "uuid";
import { useChats } from "../contexts/ChatsContext";
import { useLayoutEffect } from "react";
import colors from "../assets/colors/colors";
import { useRef } from "react";
// const socket = io.connect("http://localhost:4000");

const Chat = ({ navigation, route }) => {
  const { roomid } = route.params;
  //   const roomid = 900;
  const {
    allChatRooms,
    setAllChatRooms,
    user,
    socket,
    roomMasseges,
    setRoomMasseges,
    isLoading,
    setIsLoading,
  } = useChats();

  const [newChatMassege, setNewChatMassege] = useState("");
  const [messageList, setMessageList] = useState([]);

  //   const joinRoom = () => {
  //     if (username !== "") {
  //       socket.emit("join_room", roomid);
  //     }
  //   };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
      headerTitle: roomid,
    });
  }, [navigation]);
  //   useEffect(() => {
  //     console.log(roomMasseges);
  //     setMessageList[roomMasseges];
  //   }, [roomMasseges]);

  useEffect(() => {
    socket.emit("getAllGroups");
  }, []);
  useEffect(() => {
    socket.emit("createNewGroup", roomid);
    socket.emit("join_room", roomid);
  }, []);
  useEffect(() => {
    socket.on("groupMassge", (data) => {
      console.log(data);
      setNewChatMassege(data);
    });
  }, []);
  useEffect(() => {
    socket.emit("findGroup", roomid);
  }, [newChatMassege]);
  useEffect(() => {
    socket.on("foudGroup", (data) => setMessageList(data));
  }, [socket]);
  return (
    <View className="flex-1 items-center">
      <MyChat
        socket={socket}
        username={user}
        room={roomid}
        messageList={messageList}
        setMessageList={setMessageList}
        allChatRooms={allChatRooms}
      />
    </View>
  );
};
const MyChat = ({ socket, username, room, messageList, setMessageList }) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMassege = () => {
    if (username && currentMessage != "") {
      socket.emit("newChatMassege", {
        currentMessageID: v4(),
        currentUser: username,
        currentMessage: currentMessage,
        groupID: room,
        date:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      });
      socket.emit("findGroup", room);
      setCurrentMessage("");
    }
  };
  const flatListRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom once the component has mounted
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messageList]);

  return (
    <View className="flex-1 justify-end items-end w-full">
      {console.log(messageList)}
      {messageList && messageList[0] ? (
        <View className="flex-1 w-full">
          <FlatList
            ref={flatListRef}
            showsHorizontalScrollIndicator={false}
            data={messageList}
            renderItem={({ item, index }) => (
              <Bubble key={index} item={item} user={username} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }} // Ensures the FlatList takes up all available space
            initialScrollIndex={messageList.length - 1}
          />
        </View>
      ) : (
        ""
      )}

      <View className="flex-row justify-center items-center space-x-3 bg-white w-full">
        <View className="border border-green-600 rounded-lg">
          <TextInput
            className="px-1 py-2 w-[200px]"
            value={currentMessage}
            onChangeText={(value) => setCurrentMessage(value)}
            placeholder="enter text"
          />
        </View>

        <TouchableOpacity
          onPress={sendMassege}
          className="bg-green-600 px-3 py-1 rounded-md"
        >
          <Text>enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Bubble = ({ item, user }) => {
  const currentUserStatus = item.currentUser !== user;
  return (
    <View
      className="flex justify-center "
      style={
        currentUserStatus
          ? { alignItems: "flex-start" }
          : { alignItems: "flex-end" }
      }
    >
      <View
        className={`flex justify-center rounded-md my-3 w-[200px] ${
          currentUserStatus ? "bg-white" : "bg-blue-400"
        }`}
      >
        <Text>{item.text}</Text>
        <Text className="text-sm">{item.date}</Text>
      </View>
    </View>
  );
};

export default Chat;
