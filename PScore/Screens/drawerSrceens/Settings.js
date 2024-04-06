import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const width = Dimensions.get("window").width;
const Settings = () => {
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <View>
      <Carousel
        style={{
          width: width,
        }}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={colors}
        renderItem={({ index }) => <Text>ddd</Text>}
      />
    </View>
  );
};

export default Settings;
