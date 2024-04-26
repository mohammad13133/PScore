import { View, Text, Image } from "react-native";
import React from "react";
import DetailsTable from "../DetailsTable";
import Info from "../Info";

const OtherPlayers = () => {
  return (
    <DetailsTable header={"OtherPlayers"}>
      <Info first={"haaland"} position={"st"} />
      <Info first={"haaland"} position={"st"} />
    </DetailsTable>
  );
};

export default OtherPlayers;
