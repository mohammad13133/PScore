import { View, Text, Image } from "react-native";
import React from "react";
import DetailsTable from "../DetailsTable";

const OtherPlayers = () => {
  return (
    <DetailsTable header={"OtherPlayers"}>
      <Info first={"haaland"} position={"st"} />
      <Info first={"haaland"} position={"st"} />
    </DetailsTable>
  );
};
const Info = ({ first, position }) => {
  return (
    <View className="flex-row  items-center py-3 ml-2">
      <View className="rounded-full border border-green-700">
        <Image
          className="rounded-full"
          source={require("../../assets/images/players/haaland.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>

      <View className="ml-1">
        <Text>{first}</Text>
        <Text>{position}</Text>
      </View>
    </View>
  );
};
export default OtherPlayers;
