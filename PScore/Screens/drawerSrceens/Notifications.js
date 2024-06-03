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
import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../../components/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
const Notifications = ({ navigation }) => {
  return (
    <View className="flex-1">
      <View className="w-full h-full flex items-center">
        {/* stadium Accepted */}
        <View
          className="bg-white my-2 flex-row items-center space-x-3"
          style={{ width: wp(90), height: 100 }}
        >
          <Image
            className="rounded-full"
            style={{ width: 70, height: 70, resizeMode: "stretch" }}
            source={require("../../assets/images/stadiums/etihad.jpg")}
          />
          <View className="flex items-start  justify-center">
            <Text>stadium approve</Text>
            <TouchableOpacity className="bg-green-400 py-2 px-4 rounded-md">
              <Text>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Accepted */}
        <View
          className="bg-white my-2 flex-row items-center space-x-3"
          style={{ width: wp(90), height: 100 }}
        >
          <Image
            className="rounded-full"
            style={{ width: 70, height: 70, resizeMode: "cover" }}
            source={require("../../assets/images/arsenal.png")}
          />
          <View className="flex items-start  justify-center">
            <Text>you Accepted A play wait the mal3ab approve</Text>
            <TouchableOpacity className="bg-green-400 py-2 px-4 rounded-md">
              <Text>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Request */}
        <View
          className="bg-white my-2 flex-row items-center space-x-3"
          style={{ width: wp(90), height: 100 }}
        >
          <Image
            className="rounded-full"
            style={{ width: 70, height: 70, resizeMode: "stretch" }}
            source={require("../../assets/images/MancityTeam.jpg")}
          />
          <View className="flex items-start  justify-center">
            <Text>MancityTeam Request A play</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GameDetails", {
                  type: "pending",
                })
              }
              className="bg-green-400 py-2 px-4 rounded-md"
            >
              <Text>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
        <View
          className="bg-white my-2"
          style={{ width: wp(90), height: 100 }}
        ></View>
      </View>
    </View>
  );
};

export default Notifications;
