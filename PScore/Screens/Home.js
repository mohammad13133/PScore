import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex-1">
      <StatusBar style="dark" />

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default Home;
