import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../contexts/AuthContext";

const LogOut = ({ navigation }) => {
  const { setToken } = useContext(AuthContext);
  React.useEffect(() => {
    setToken();
    navigation.replace("Welcome");
    console.log("ss");
  }, [navigation]);

  return (
    <View>
      <Text>LogOut</Text>
    </View>
  );
};

export default LogOut;
