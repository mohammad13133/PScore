import React, { useState } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const MyGames = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Ask for permission to access media library
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    // Open image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default MyGames;
// function MyGames() {
//   const width = Dimensions.get("window").width;
//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Carousel
//         loop
//         width={width}
//         height={width / 2}
//         autoPlay={true}
//         data={[...new Array(6).keys()]}
//         scrollAnimationDuration={1000}
//         // onSnapToItem={(index) => console.log("current index:", index)}
//         renderItem={({ index }) => (
//           <View
//             style={{
//               flex: 1,
//               borderWidth: 1,
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
//           </View>
//         )}
//       /> */}
//     </View>
//   );
// }

// export default MyGames;
