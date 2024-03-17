import { View, Text } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
const Header = () => {
  return (
    <View
      className="w-full flex-row justify-between items-center px-4 pt-8 pb-2"
      style={{ backgroundColor: colors.secondColor }}
    >
      <Text className="text-2xl">PScore</Text>
      <MagnifyingGlassIcon color={"black"} />
    </View>
  );
};

export default Header;
