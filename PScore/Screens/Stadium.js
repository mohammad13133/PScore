import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
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
  ChatBubbleOvalLeftIcon,
} from "react-native-heroicons/outline";
import stadiumDetails from "../assets/Data/StadiumsDetails";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Calendar, CalendarList } from "react-native-calendars";

const Stadium = ({ route, navigation }) => {
  const { name, city } = route.params;
  const foundStadium = null;
  const [stadium, setStadium] = useState(null);
  const [activeImage, setActiveImage] = useState();
  const [activeHeart, setActiveHeart] = useState(false);
  const [images, setImages] = useState([]);
  const [mapLat, setMapLat] = useState(null);
  const [mapLong, setMapLong] = useState(null);

  useEffect(() => {
    const stadium = stadiumDetails.find((stadium) => stadium.name === name);
    if (stadium) {
      setStadium(stadium);
      console.log("Stadium found:", stadium.name);
      setActiveImage(stadium.imageUrls[0]); // Set activeImage to the first image in stadium.imageUrls
      setImages(stadium.imageUrls);
      setMapLat(stadium.mapLat);
      setMapLong(stadium.mapLong);
      console.log("mapLat:", stadium.mapLat);
      console.log("mapLong:", stadium.mapLong);
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

  const [statusBarHeight, setStatusBarHeight] = useState();
  return (
    <View className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
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
              style={{
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
              }}
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
                      className={`w-14 h-14 bg-white rounded-lg border-2 ${
                        activeImage === image
                          ? "border-green-700"
                          : "border-white"
                      }`}
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
              <ChatBubbleOvalLeftIcon color={colors.lightGreen} size={25} />
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

        <View className="flex items-center py-6">
          <View
            style={{
              width: "95%",
              height: 200,
              paddingTop: statusBarHeight,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "green",
            }}
          >
            {Platform.OS != "web" ? (
              mapLat !== null &&
              mapLong !== null && (
                <MapView
                  style={StyleSheet.absoluteFill}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                    latitude: mapLat,
                    longitude: mapLong,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  scrollEnabled={false}
                  showsMyLocationButton
                >
                  <Marker
                    coordinate={{ latitude: mapLat, longitude: mapLong }}
                    title={"title"}
                    description={"description"}
                  />
                </MapView>
              )
            ) : (
              <Text>use android to see maps</Text>
            )}
          </View>
        </View>
        <View className="flex items-center">
          <View style={{ width: "95%" }}>
            <MyCalender />
          </View>
        </View>
        <View>
          <Text className="pl-4 mt-2 font-bold">booking Details</Text>
        </View>
        <View
          style={{ backgroundColor: colors.lightGreen, height: 800 }}
        ></View>
      </ScrollView>
    </View>
  );
};
const MyCalender = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDayPress = (date) => {
    setSelectedDate(date.dateString);
    console.log(date);
  };
  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        //backgroundColor: "#F4F4F4",
      }}
      theme={{
        calendarBackground: "#F4F4F4",
        backgroundColor: "#F4F4F4",
      }}
      // Pass the handleDayPress function to onDayPress prop
      onDayPress={handleDayPress}
      // Pass markedDates prop to mark the selected date
      markingType={"period"}
      markedDates={{
        [selectedDate]: {
          startingDay: true,
          endingDay: true,
          textColor: "white",
          color: "green",
        },
        "2024-04-09": {
          startingDay: true,
          color: "#E72929",
          textColor: "white",
        },
        "2024-04-10": {
          color: "#FF8080",
          textColor: "white",
          ...(selectedDate === "2024-04-10" && {
            textColor: "red",
            startingDay: true,
            endingDay: true, // Example property added if date is selected
          }),
        },
        "2024-04-15": {
          color: "#FF8080",
          textColor: "white",
        },
        "2024-04-12": {
          endingDay: true,
          color: "#E72929",
          textColor: "white",
        },
      }}
    />
  );
};
export default Stadium;
