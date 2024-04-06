import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";
import { Platform } from "react-native";

import Constants from "expo-constants";
import {
  ChevronLeftIcon,
  HeartIcon as HeartIconTrue,
} from "react-native-heroicons/solid";
import {
  HeartIcon as HeartIconFalse,
  ShareIcon,
} from "react-native-heroicons/outline";
import stadiumDetails from "../assets/Data/StadiumsDetails";
import MapView from "react-native-maps";

const Stadium = ({ route, navigation }) => {
  const { name, city } = route.params;
  const foundStadium = null;
  const [stadium, setStadium] = useState(null);
  const [activeImage, setActiveImage] = useState();
  const [activeHeart, setActiveHeart] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const stadium = stadiumDetails.find((stadium) => stadium.name === name);
    if (stadium) {
      setStadium(stadium);
      console.log("Stadium found:", stadium.name);
      setActiveImage(stadium.imageUrls[0]); // Set activeImage to the first image in stadium.imageUrls
      setImages(stadium.imageUrls);
    } else {
      console.log("Stadium not found");
    }
  }, [name, stadiumDetails]);
  //   useEffect(() => {
  //     if (stadium && stadium.imageUrls && stadium.imageUrls.length > 0) {
  //       setActiveImage(stadium.imageUrls[0]); // Set activeImage to the first image in stadium.imageUrls
  //       setImages(stadium.imageUrls);
  //     }
  //   }, [stadium]);

  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);

  return (
    <View className="flex-1">
      <StatusBar style="light" backgroundColor={colors.secondColor} />
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <View className="relative">
          {/*dddd/*/}
          <View className="absolute flex-row items-center  w-full justify-between mt-10 z-10">
            <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
              <ChevronLeftIcon color={colors.lightGreen} size={50} />
            </TouchableOpacity>
          </View>
          {/*Header/*/}
          <Image
            className="w-full h-[300px]"
            source={activeImage}
            style={{ borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
          />
          {/*Images/*/}
          <View className="absolute  w-full h-full flex items-center justify-center">
            <View className="flex-row absolute space-x-5 bottom-10">
              {images.map((image, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setActiveImage(image);
                    }}
                    className="w-14 h-14 bg-white rounded-lg border border-white"
                  >
                    {image ? (
                      <Image
                        source={image}
                        className="w-full h-full rounded-lg"
                        style={{ resizeMode: "stretch" }}
                      />
                    ) : (
                      <Image
                        className="w-full h-full rounded-lg bg-slate-900"
                        style={{ resizeMode: "stretch" }}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View className="flex-row justify-between items-start mt-4">
          <View className="pl-4">
            <Text className="font-bold text-lg">{name}</Text>
            <Text className="font-light">{city}</Text>
          </View>
          <View className="flex-row pr-4 space-x-2">
            <ShareIcon color={colors.lightGreen} size={25} />
            <TouchableOpacity onPress={() => setActiveHeart(!activeHeart)}>
              {activeHeart ? (
                <HeartIconTrue color={colors.lightGreen} size={25} />
              ) : (
                <HeartIconFalse color={colors.lightGreen} size={25} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Other components */}
      <View className="flex items-center">
        <View style={{ width: "80%", height: 400 }}>
          {Platform.OS != "web" ? (
            <MapView
              className="w-full h-full"
              initialRegion={{
                latitude: mapLat,
                longitude: mapLong,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            ></MapView>
          ) : (
            <Text>use android to see maps</Text>
          )}
        </View>
      </View>
    </View>
  );
};
export default Stadium;
