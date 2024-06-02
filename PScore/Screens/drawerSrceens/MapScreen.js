import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const locations = [
    {
      id: 1,
      title: "Location 1",
      latitude: 32.23257817189633,
      longitude: 35.21605422702873,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Location 2",
      latitude: 32.22210841485003,
      longitude: 35.25456093346338,
      image: "https://via.placeholder.com/150",
    },
  ];

  const mapViewRef = useRef(null);
  useEffect(() => {
    (async () => {
      // Request permissions for accessing device location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(newRegion);

      mapViewRef.current.animateToRegion(newRegion);
    })();
  }, []);
  const goToMyLocation = () => {
    mapViewRef.current.animateToRegion({
      ...region,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };
  const goToNewLocation = () => {
    const newLocation = { latitude: 37.78825, longitude: -122.4324 }; // Example new location coordinates
    mapViewRef.current.animateToRegion({
      ...newLocation,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };
  return (
    <View className="flex-1">
      {region && (
        <MapView
          ref={mapViewRef}
          style={{ height: 500 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
            >
              <Callout>
                <Image
                  source={require("../../assets/images/stadiums/etihad.jpg")}
                  style={{ resizeMode: "cover", width: "100%", height: 100 }}
                  alt="ssss"
                />
                <Text>ddd</Text>
                <Button
                  title="Details"
                  onPress={() => Alert(`Details of ${location.title}`)}
                />
              </Callout>
            </Marker>
          ))}
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
        </MapView>
      )}

      <Button title="Go to New Location" onPress={goToNewLocation} />
      <Button title="Go to my Location" onPress={goToMyLocation} />
    </View>
  );
};
const styles = StyleSheet.create({
  callout: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "cover",
  },
});

export default MapScreen;
