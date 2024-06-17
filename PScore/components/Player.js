import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Player = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("PlayerDetails", { _id: item._id || item.user })
      }
      className="flex-row mt-2"
    >
      <Image
        className="rounded-full"
        style={{ width: 50, height: 50, resizeMode: "stretch" }}
        source={
          item?.image
            ? { uri: item.image }
            : require("../assets/images/defaultUserImage.jpg")
        }
      />
      <View>
        <Text>{item?.userName}</Text>
        <View className="w-[250px] flex-row justify-between">
          <Text>Team Name</Text>
          <Text>{item?.position}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Player;
