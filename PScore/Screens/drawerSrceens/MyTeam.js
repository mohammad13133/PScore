import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { CameraIcon, UserGroupIcon } from "react-native-heroicons/outline";
import * as ImagePicker from "expo-image-picker";
import colors from "../../assets/colors/colors";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import axios from "axios";

import { Formik } from "formik";
import MyTextInput from "../../components/MyTextInput";
import DetailsTable from "../../components/DetailsTable";
import Player from "../../components/Player";
const MyTeam = () => {
  const { triggerEvent, token, teamData } = useAuth();
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTeam = async (values) => {
    if (token) {
      try {
        setIsLoading(true);
        const formData = new FormData();
        if (image) {
          const file = {
            uri: image,
            type: "image/jpeg", // Assuming jpeg, update accordingly if different
            name: "photo.jpg", // Update the name as per your requirements
          };
          formData.append("image", file);
        }
        if (!teamData.team) {
          formData.append("teamName", values.teamName);
        }
        console.log(formData);
        const response = await axios.post(
          "https://pscore-backend.vercel.app/team/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: `Ahmad__${token}`,
            },
          }
        );
        triggerEvent();
        console.log(response.data);
      } catch (error) {
        console.error("Error config:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("Token is not defined");
    }
  };
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
  return (
    <ScrollView>
      <View className="flex items-center">
        <Text>Team</Text>
        <TouchableOpacity
          onPress={pickImage}
          className="relative rounded-full border "
          style={{ backgroundColor: colors.mainColor }}
        >
          <Image
            source={
              image
                ? { uri: image }
                : teamData?.team?.image
                ? { uri: teamData?.team?.image }
                : require("../../assets/images/defaultUserImage.jpg")
            }
            className="w-[150px] h-[150px] rounded-full"
          />

          <View className="absolute top-0 right-0 bg-white rounded-full p-1">
            <CameraIcon size={30} color={"black"} />
          </View>
        </TouchableOpacity>

        <Formik
          initialValues={{
            teamName: "",
          }}
          onSubmit={(values) => fetchTeam(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <MyTextInput
                Icon={UserGroupIcon}
                placeholder={teamData?.team?.name || "teamName"}
                label={"teamName"}
                onChangeText={handleChange("teamName")}
                onBlur={handleBlur("teamName")}
                value={values.teamName}
                editable={teamData?.team ? false : true}
              />

              <TouchableOpacity
                onPress={handleSubmit}
                className="px-14 py-5 rounded-xl mt-8 flex items-center"
                style={{ backgroundColor: colors.mainColor, width: 300 }}
              >
                {isLoading ? (
                  <ActivityIndicator color={colors.secondColor} />
                ) : teamData?.team ? (
                  <Text style={{ color: colors.secondColor }}>
                    update team image
                  </Text>
                ) : (
                  <Text style={{ color: colors.secondColor }}>create team</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        {teamData?.playerProfile?.length > 0 && (
          <Players dispalyName="Players" team={teamData} />
        )}
      </View>
    </ScrollView>
  );
};
const Players = ({ team }) => {
  return (
    <View className="mt-3">
      <DetailsTable header={"Players"}>
        {team?.playerProfile &&
          team?.playerProfile.map((item, index) => (
            <Player item={item} key={index} />
          ))}
      </DetailsTable>
    </View>
  );
};
export default MyTeam;
