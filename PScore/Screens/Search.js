import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import colors from "../assets/colors/colors";

const Search = ({ navigation }) => {
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
      <Text>Search</Text>
    </View>
  );
};

export default Search;
