import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const Notifications = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../../assets/images/players/haaland.png"),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};
// import { View, Text } from "react-native";
// import React from "react";
// import Header from "../../components/Header";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// const Notifications = () => {
//   return (
//     <View className="flex-1">
//       <View className="w-full h-full flex items-center">
//         <View
//           className="bg-white my-2"
//           style={{ width: wp(90), height: 100 }}
//         ></View>
//         <View
//           className="bg-white my-2"
//           style={{ width: wp(90), height: 100 }}
//         ></View>
//         <View
//           className="bg-white my-2"
//           style={{ width: wp(90), height: 100 }}
//         ></View>
//         <View
//           className="bg-white my-2"
//           style={{ width: wp(90), height: 100 }}
//         ></View>
//       </View>
//     </View>
//   );
// };

export default Notifications;
