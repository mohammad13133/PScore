import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors/colors";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";
import MatchCounter from "../components/MatchCounter";
const emojisWithIcons = [
  { title: "happy", icon: "emoticon-happy-outline" },
  { title: "cool", icon: "emoticon-cool-outline" },
  { title: "lol", icon: "emoticon-lol-outline" },
  { title: "sad", icon: "emoticon-sad-outline" },
  { title: "cry", icon: "emoticon-cry-outline" },
  { title: "angry", icon: "emoticon-angry-outline" },
  { title: "confused", icon: "emoticon-confused-outline" },
  { title: "excited", icon: "emoticon-excited-outline" },
  { title: "kiss", icon: "emoticon-kiss-outline" },
  { title: "devil", icon: "emoticon-devil-outline" },
  { title: "dead", icon: "emoticon-dead-outline" },
  { title: "wink", icon: "emoticon-wink-outline" },
  { title: "sick", icon: "emoticon-sick-outline" },
  { title: "frown", icon: "emoticon-frown-outline" },
];

const AddEvent = ({ route }) => {
  const navigation = useNavigation();
  const { gameid, players1, players2 } = route?.params || {};
  const { profile } = useAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
    });
  }, [navigation]);
  useEffect(() => {
    console.log(players1);
  }, []);
  const [isGoalSelected, setIsGoalSelected] = useState(false);
  useEffect(() => {
    console.log(isGoalSelected);
  }, []);
  const [goalPlayer, setGoalPlayer] = useState();
  const [assistPlayer, setAssistPlayer] = useState();

  return (
    <View className="flex-1 items-start justify-center">
      <View className="flex-row items-center justify-between space-x-4">
        <View className="border border-green-700 rounded-full ">
          <Image
            className="w-[50px] h-[50px]  rounded-full"
            source={
              profile.image
                ? { uri: profile.image }
                : require("../assets/images/defaultUserImage.jpg")
            }
            style={{ resizeMode: "contain" }}
          />
        </View>
        <Text>{profile.userName}</Text>
      </View>
      <SelectDropdown
        data={players1}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          if (selectedItem) {
            setIsGoalSelected(true);
            setGoalPlayer({
              goal: selectedItem.name,
              goalId: selectedItem.playerId,
            });
          }
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {/* {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )} */}
              {selectedItem && (
                <Image
                  source={
                    selectedItem.photo
                      ? { uri: selectedItem.photo }
                      : require("../assets/images/defaultUserImage.jpg")
                  }
                  className="w-[30px] h-[30px] rounded-full"
                />
              )}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.name) || "Select the player"}
              </Text>
              {/* <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
              /> */}
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              {/* <Icon name={item.icon} style={styles.dropdownItemIconStyle} /> */}
              <Image
                source={
                  item.photo
                    ? { uri: item.photo }
                    : require("../assets/images/defaultUserImage.jpg")
                }
                className="w-[30px] h-[30px] rounded-full"
              />
              <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      {isGoalSelected && (
        <SelectDropdown
          data={players1}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            if (selectedItem) {
              setIsGoalSelected(true);
              setAssistPlayer({
                assist: selectedItem.name,
                assistId: selectedItem.playerId,
              });
            }
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                {/* {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )} */}
                {selectedItem && (
                  <Image
                    source={
                      selectedItem.photo
                        ? { uri: selectedItem.photo }
                        : require("../assets/images/defaultUserImage.jpg")
                    }
                    className="w-[30px] h-[30px] rounded-full"
                  />
                )}
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.name) || "Select the player"}
                </Text>
                {/* <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
              /> */}
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                {/* <Icon name={item.icon} style={styles.dropdownItemIconStyle} /> */}
                <Image
                  source={
                    item.photo
                      ? { uri: item.photo }
                      : require("../assets/images/defaultUserImage.jpg")
                  }
                  className="w-[30px] h-[30px] rounded-full"
                />
                <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      )}
      <TouchableOpacity
        onPress={() => {
          const mergedJson = { ...goalPlayer, ...assistPlayer };
          console.log(mergedJson);
        }}
      >
        <View>
          <Text>add event</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default AddEvent;
