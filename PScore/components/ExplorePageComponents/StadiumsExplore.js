import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import stadiumsData from "../../assets/Data/Stadiums";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const { width } = Dimensions.get("window");
const StadiumsExplore = () => {
  const { token } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      console.log("hello token");
      console.log(token);
      try {
        const response = await axios.get(
          "https://pscore-backend.vercel.app/playground",
          {
            headers: {
              authorization: `Ahmad__${token}`,
            },
          }
        );
        console.log(response.data[0]);
        setData(response.data);
        // setProfile(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <>
      <Text>Nearest</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToOffsets={[...Array(stadiumsData.length)].map(
          (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40
        )}
        // onScroll={(event) => {
        //   setScrollX(event.nativeEvent.contentOffset.x);
        // }}
        contentContainerStyle={{ paddingBottom: 10 }}
        data={data}
        renderItem={({ item, index }) => <Item item={item} key={index} />}
        keyExtractor={(item) => item._id}
      />
    </>
  );
};
const Item = ({ item }) => {
  const navigation = useNavigation();
  const isWeb = Platform.OS === "web";

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Stadium", { ...item })}
      className="bg-slate-50 rounded-lg h-[180px] mt-4 relative "
      style={{
        elevation: 6,
        width: isWeb ? 300 : width * 0.8 - 20,
        marginHorizontal: 10,
      }}
    >
      <Image
        className="w-full h-full rounded-lg"
        source={
          item.photos[0]
            ? { uri: item.photos[0] }
            : require("../../assets/images/stadiums/etihad.jpg")
        }
        style={{ resizeMode: "stretch" }}
      />
      <LinearGradient
        className="w-full h-full absolute rounded-lg"
        start={{ x: 0, y: 0.4 }} // Start from the top
        end={{ x: 0, y: 1 }} // End at the bottom
        colors={["transparent", "rgba(0,0,0,0.8)"]}
      />
      <View className="absolute bottom-0 translate-x-5 mb-5">
        <Text className="text-white ">{item.name}</Text>
        <Text className="text-white text-xs font-light">Nablus</Text>
      </View>
    </TouchableOpacity>
  );
};
export default StadiumsExplore;
