import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import colors from "../assets/colors/colors";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
import DetailsTable from "../components/DetailsTable";
import axios from "axios";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState(null);
  const searchInputRef = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.football-data.org/v4/competitions/PL/standings",
          {
            headers: {
              "X-Auth-Token": "561656b64db54bc8b5d5534f66275f4f", // Replace 'YOUR_TOKEN' with your actual token
            },
          }
        );
        if (response.data) {
          const Objects = response.data.standings[0].table.map(
            (element, index) => {
              // Transform each element as needed
              return element.team;
            }
          );
          setTeams(Objects);
        } else {
          console.log("Table data not available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.secondColor, // Customize background color
      },
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View className="bg-white rounded-lg mx-4 py-3 mt-5 flex-row items-center justify-between">
        <View className="mx-1">
          <MagnifyingGlassIcon size={30} color={"black"} />
        </View>

        <TextInput
          className="flex-1 px-3"
          value={search}
          onChangeText={(value) => setSearch(value)}
          placeholder="search for Players or Stadiums..."
        ></TextInput>
        {search && (
          <Pressable
            className="mx-1 rounded-md"
            style={{ backgroundColor: colors.myWhite }}
          >
            <XMarkIcon size={30} color={"black"} />
          </Pressable>
        )}
      </View>

      <View className="mt-4 flex">
        <DetailsTable header={"Players"}>
          <Player />
          <Player />
        </DetailsTable>
      </View>
      <View className="mt-4">
        <DetailsTable header={"Teams"}>
          {teams &&
            teams.map((team, index) => {
              return (
                <Team
                  key={index}
                  team={team.shortName}
                  image={team.crest}
                  tla={team.tla}
                />
              );
            })}
        </DetailsTable>
      </View>
      <View className="mt-4">
        <DetailsTable header={"Stadiums"}>
          <Stadium />
        </DetailsTable>
      </View>
    </ScrollView>
  );
};
const Player = () => {
  return (
    <View className="flex-row mt-2">
      <Image
        className="rounded-full"
        style={{ width: 50, height: 50, resizeMode: "stretch" }}
        source={require("../assets/images/players/haaland.png")}
      />
      <View>
        <Text>Haaland</Text>
        <View className="w-[250px] flex-row justify-between">
          <Text>Manchester City</Text>
          <Text>Manchester</Text>
          <Text>ST</Text>
        </View>
      </View>
    </View>
  );
};
const Team = ({ index, team, image, tla }) => {
  return (
    <View className="flex-row mt-2" key={index}>
      <Image
        className="rounded-full"
        style={{ width: 50, height: 50, resizeMode: "center" }}
        source={{ uri: image }}
      />
      <View>
        <Text>{team}</Text>
        <Text>{tla}</Text>
      </View>
    </View>
  );
};
const Stadium = () => {
  return (
    <View className="flex-row mt-2">
      <Image
        className="rounded-full"
        style={{ width: 50, height: 50, resizeMode: "cover" }}
        source={require("../assets/images/stadiums/etihad.jpg")}
      />
      <View>
        <Text>Etihad</Text>
        <Text>Manchester</Text>
      </View>
    </View>
  );
};
export default Search;
