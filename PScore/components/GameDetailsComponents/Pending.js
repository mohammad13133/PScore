import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Pending = ({ onPress }) => {
  return (
    <View className="flex items-center">
      <Text>Accapting the match?</Text>
      <View className="flex-row space-x-2">
        <TouchableOpacity
          className="px-4 py-2 bg-green-400 rounded-md"
          onPress={onPress}
        >
          <Text>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 bg-red-600 rounded-md">
          <Text>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pending;
