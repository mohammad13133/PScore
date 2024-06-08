import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect, Component } from "react";
import io from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";
import { useCallback } from "react";
import { v4 } from "uuid";
import { useChats } from "../contexts/ChatsContext";
import { useLayoutEffect } from "react";
import colors from "../assets/colors/colors";
// const socket = io.connect("http://localhost:4000");

const Chat = ({ navigation, route }) => {
  const { roomid } = route.params;
  //   const roomid = 900;
  const { allChatRooms, setAllChatRooms, user, socket } = useChats();
  const [messageCounter, setMessageCounter] = useState(1); // Initialize the counter state

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
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
    });
  }, [navigation]);

  useEffect(() => {
    socket.emit("createNewGroup", roomid);
  }, []);
  useEffect(() => {
    socket.emit("join_room", roomid);
    socket.emit("getAllGroups");
  }, []);
  useEffect(() => {
    // Your logic to fetch initial messages or set initial messages
  }, []);

  useEffect(() => {
    if (messageList.length > 0) {
      socket.emit("updateMessages", {
        groupId: roomid,
        newMessages: messageList,
      });
      console.log(roomid);
    }
  }, [messageList]);
  //   useEffect(() => {
  //     setMessageList(allChatRooms ? allChatRooms[0]?.messages : []);
  //   }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      const receivedMessage = {
        _id: data._id,
        text: data.message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: data.username,
        },
      };
      setMessageList((previousMessages) =>
        GiftedChat.append(previousMessages, receivedMessage)
      );
    });
  }, []);

  return (
    <View className="flex-1 items-center">
      {/* <TextInput
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      /> */}
      {/* <TextInput onChangeText={(text) => setRoom(text)} placeholder="Room" /> */}
      {/* <TouchableOpacity
        onPress={joinRoom}
        className="px-2 py-1 bg-green-500 rounded-md"
      >
        <Text>Join Room</Text>
      </TouchableOpacity> */}
      <ChatGifted
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

const ChatGifted = ({
  socket,
  username,
  room,
  messageList,
  setMessageList,
  allChatRooms,
}) => {
  const sendMessage = (messages = []) => {
    if (messages.length > 0) {
      const currentMessage = messages[0];
      const MessageData = {
        _id: v4(),
        room: room,
        username: username,
        message: currentMessage.text,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("send_message", MessageData);

      setMessageList((previousMessages) =>
        GiftedChat.append(previousMessages, currentMessage)
      );
    }
  };
  useEffect(() => {
    const initialMessages = allChatRooms[0]?.messages || [];
    console.log(initialMessages);
    // setMessageList(initialMessages);
  }, []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <GiftedChat
        messages={messageList}
        onSend={(messages) => {
          // onSend(message);
          sendMessage(messages);
        }}
        user={{
          _id: 1,
          name: username,
        }}
      />
    </View>
  );
};

export default Chat;
