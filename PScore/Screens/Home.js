import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "../components/Header.js";
const colors = require("../assets/colors/colors.js");
import GameCard from "../components/GameCard.js";

import { Formik } from "formik";
import Line from "../components/Line.js";
import DayPicker from "../components/DayPicker.js";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const Home = ({ navigation }) => {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <Header />
      <DayPicker />
      <ScrollView
        contentContainerStyle={{ display: "flex", alignItems: "center" }}
      >
        <GameCard />
        <GameCard />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: colors.secondColor }}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default Home;
