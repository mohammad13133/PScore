import {
  View,
  Text,
  Dimensions,
  Button,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import dayjs from "dayjs";
import {
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import MyTextInput from "../../components/MyTextInput";

import SelectDropdown from "react-native-select-dropdown";
import colors from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from "react";
import AuthContext, { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import axios from "axios";
const positions = [
  { title: "striker", icon: "emoticon-happy-outline" },
  { title: "goalkeeper", icon: "emoticon-cool-outline" },
  { title: "mid", icon: "emoticon-lol-outline" },
  { title: "defend", icon: "emoticon-lol-outline" },
];
const countries = [
  { countryName: "Palestine", icon: "https://flagsapi.com/PS/flat/64.png" },
  { countryName: "Jordan", icon: "https://flagsapi.com/JO/flat/64.png" },
];
const width = Dimensions.get("window").width;
export default Settings = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Ask for permission to access media library
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    // Open image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const { profile, setProfile, token } = useAuth();
  const uploadImage = async (imageUri) => {
    console.log("hello token");
    if (token) {
      try {
        const formData = new FormData();
        const file = {
          uri: imageUri,
          name: "prfile-image",
          type: "image/jpg",
        };
        formData.append("image", file);
        const response = await axios.post(
          "https://pscore-backend.vercel.app/profile",
          formData,
          {
            headers: {
              authorization: `Ahmad__${token}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex items-center justify-center mt-6">
        <TouchableOpacity
          onPress={pickImage}
          className="relative rounded-full border "
          style={{ backgroundColor: colors.mainColor }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              className="rounded-full "
              style={{
                width: 120,
                height: 120,
                resizeMode: "cover",
              }}
            />
          ) : (
            <Image
              className="rounded-full "
              style={{
                width: 120,
                height: 120,
                resizeMode: "cover",
              }}
              source={require("../../assets/images/players/Mohammad.jpg")}
            />
          )}

          <View className="absolute top-0 right-0 bg-white rounded-full p-1">
            <CameraIcon size={30} color={"black"} />
          </View>
        </TouchableOpacity>
        <MyTextInput
          Icon={UserIcon}
          placeholder={"userName"}
          label={"UserName"}
          value={""}
          editable={false}
        />
        <MyTextInput
          Icon={EnvelopeIcon}
          placeholder={"email"}
          label={"email"}
          value={""}
          editable={false}
        />
        <MyTextInput
          Icon={PhoneIcon}
          placeholder={"number"}
          label={"number"}
          value={""}
        />
        <View className="mt-6 w-[300px]">
          <Text>position</Text>
          <SelectDropdown
            data={positions}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text className="font-medium text-lg">
                    {(selectedItem && selectedItem.title) || "Select your mood"}
                  </Text>
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
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
        <View className="mt-6 w-[300px]">
          <Text>select country</Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text className="font-medium text-lg">
                    {(selectedItem && selectedItem.countryName) ||
                      "Select your mood"}
                  </Text>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "cover",
                    }}
                    source={{ uri: selectedItem?.icon }}
                  />
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
                  <Text style={styles.dropdownItemTxtStyle}>
                    {item.countryName}
                  </Text>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "cover",
                    }}
                    source={{ uri: item.icon }}
                  />
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
        <TouchableOpacity
          onPress={() => uploadImage(image)}
          className="bg-green-400 px-8 py-2 rounded-md mt-6"
        >
          <Text>save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mainColor,
    flexDirection: "row",
    justifyContent: "space-between",
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
