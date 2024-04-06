import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React from "react";
import stadiumsData from "../../assets/Data/Stadiums";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");
const StadiumsExplore = () => {
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
        data={stadiumsData}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
const Item = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Stadium", { ...item })}
      className="bg-slate-50 rounded-lg h-[180px] mt-4 relative "
      style={{ elevation: 6, width: width * 0.8 - 20, marginHorizontal: 10 }}
    >
      <Image
        className="w-full h-full rounded-lg"
        source={item.imageUrl}
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
        <Text className="text-white text-xs font-light">{item.city}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default StadiumsExplore;
