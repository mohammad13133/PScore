// import React, { useState, useCallback, useEffect } from "react";
// import { GiftedChat } from "react-native-gifted-chat";

// const Notifications = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: "Hello developer",
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: "React Native",
//           avatar: require("../../assets/images/players/haaland.png"),
//         },
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={(messages) => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   );
// };
import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useState } from "react";
const Notifications = ({ navigation }) => {
  const { token, triggerInvites } = useAuth();
  const [invites, setInvites] = useState([]);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(
          `https://pscore-backend.vercel.app/team/invitation`,
          {
            headers: {
              authorization: `Ahmad__${token}`,
            },
          }
        );
        setInvites(response?.data?.invites);
        console.log(response?.data?.invites);
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    getNotifications();
  }, [token, triggerInvites]);
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="w-full h-full flex items-center">
          {/* Request */}
          {invites
            .slice()
            .reverse()
            .map((item, index) => (
              <View
                key={index}
                className="bg-white my-2 flex-row items-center space-x-3"
                style={{ width: wp(90), height: 100 }}
              >
                <Image
                  className="rounded-full"
                  style={{ width: 70, height: 70, resizeMode: "stretch" }}
                  source={{ uri: item.image }}
                />
                <View className="flex items-start  justify-center">
                  <Text>{item.message}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("GameDetails", {
                        type: "pending",
                        gameid: item.match,
                        inviteId: item._id,
                      })
                    }
                    className="bg-green-400 py-2 px-4 rounded-md"
                  >
                    <Text>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;
