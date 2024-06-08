import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import colors from "../assets/colors/colors";
import { CameraIcon, HeartIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
import AuthContext, { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import SlidesPicker from "../components/MyComp/SlidesPicker";

const Profile = () => {
  const { token, getUser } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      console.log(token);
      // const decoded = decodeToken(token);
      const user = getUser(token);
      console.log("ll");

      console.log(user);
      setUser(user);
      // Store the decoded token in state
    }
  }, [token]);

  return (
    <ScrollView>
      <View className="h-[300px] flex items-center justify-center relative space-y-1">
        <View
          className="relative rounded-full border "
          style={{ backgroundColor: colors.mainColor }}
        >
          <Image
            className="rounded-full "
            style={{
              width: 120,
              height: 120,
              resizeMode: "cover",
            }}
            source={require("../assets/images/players/Mohammad.jpg")}
          />
          <View className="absolute top-0 right-0 bg-white rounded-full p-1">
            <CameraIcon size={30} color={"black"} />
          </View>
        </View>
        <Text>{user ? user?.username : "no login"}</Text>
        <Text>{user ? user?.type : "no login"}</Text>
        <View
          className="flex-row justify-between rounded-md p-1"
          style={{
            width: 300,
            backgroundColor: colors.secondColor,
          }}
        >
          <View className="flex items-center w-[100px]">
            <HeartIcon size={25} color={colors.mainColor} />
            <Text>2.3k</Text>
          </View>
          <View className="flex items-center w-[100px]">
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "cover",
              }}
              source={{ uri: "https://flagsapi.com/PS/flat/64.png" }}
            />
            <Text>Palestine</Text>
          </View>
          <View className="flex items-center w-[100px]">
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "cover",
              }}
              source={{ uri: "https://flagsapi.com/PS/flat/64.png" }}
            />
            <Text>No Team</Text>
          </View>
        </View>
      </View>
      <SlidesPicker>
        <Stats dispalyName="Stats" loading={loading} />
        <Text dispalyName="bb">lello</Text>
      </SlidesPicker>
    </ScrollView>
  );
};

const Stats = ({ loading }) => {
  return loading ? (
    <ActivityIndicator />
  ) : (
    <View
      style={{ backgroundColor: colors.secondColor }}
      className="h-[200px] flex justify-center space-y-6 mt-14 mx-5 rounded-md"
    >
      <View className="flex-row justify-around">
        <View className="flex items-center w-[100px] space-y-4 ">
          <Text>Age</Text>
          <Text>19</Text>
        </View>
        <View className="flex items-center w-[100px] space-y-4 ">
          <Text>Position</Text>
          <Text>Striker</Text>
        </View>
        <View className="flex items-center w-[100px] space-y-4 ">
          <Text>Matches</Text>
          <Text>4</Text>
        </View>
      </View>
      <View className="flex-row justify-around">
        <View className="flex items-center w-[100px] space-y-4 ">
          <Image
            className="rounded-full"
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/footballcartoon.jpg")}
          />
          <Text>20(3)</Text>
        </View>
        <View className="flex items-center w-[100px] space-y-4 ">
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/assists.png")}
          />
          <Text>12</Text>
        </View>
      </View>
    </View>
  );
};
export default Profile;
