import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [region, setRegion] = useState(null);

  const mapViewRef = useRef(null);
  useEffect(() => {
    (async () => {
      // Request permissions for accessing device location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      // Get user's current location
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
  const goToNewLocation = () => {
    mapViewRef.current.animateToRegion({
      ...region,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };
  const goToMyLocation = () => {
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

export default MapScreen;
