import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatsContext from "../contexts/ChatsContext";
import { useChats } from "../contexts/ChatsContext";
import { useEffect } from "react";

const MessagesScreen = () => {
  const { user, setUser, allChatRooms } = useChats();
  useEffect(() => {
    setUser("name");
  }, []);

  return (
    <View>
      {allChatRooms ? (
        <FlatList
          data={allChatRooms}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item}
        />
      ) : null}
      <Text>{user ? user : ""}</Text>
    </View>
  );
};
const Item = ({ title }) => {
  return <Text>{title}</Text>;
};
export default MessagesScreen;
